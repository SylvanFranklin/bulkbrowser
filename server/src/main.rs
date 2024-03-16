mod cors;
mod db;
use cors::CORS;
use db::utils::Bin;
#[macro_use]
extern crate rocket;
use reqwest;
use rocket::serde::json::Json;
use scraper::{Html, Selector};
use std::error::Error;

use crate::db::utils::search;

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

async fn get_sales() -> Result<String, Box<dyn Error>> {
    let resp = reqwest::get("http://citymarket.coop/sales-and-specials")
        .await?
        .text()
        .await?;
    Ok(resp)
}

struct Product {
    brand: String,
    title: String,
}

impl ToString for Product {
    fn to_string(&self) -> String {
        format!("{} - {}", self.brand, self.title)
    }
}

fn parse_bulk_sales(html: &str) -> String {
    let fragment = Html::parse_fragment(html);
    // none of the below should ever fail, since the selectors are hardcoded and valid
    let sale_item_selector = Selector::parse(".sales-item").unwrap();
    let brand_selector = Selector::parse(".item-brand").unwrap();
    let item_detail_selector = Selector::parse(".item-detail").unwrap();
    let item_description_selector = Selector::parse(".item-description").unwrap();
    let mut products: Vec<Product> = vec![];

    for sale_item in fragment.select(&sale_item_selector) {
        // <div class="sales-item">
        //   <div class="item-brand">
        //     Vermont Coffee Company
        //   </div>
        //
        //   <div class="item-detail">
        //     <div class="item-description">
        //       Organic French Country
        //       Roast<span class="item-size"
        //         > 5 lb</span
        //       >
        //     </div>
        //   </div>
        // </div>

        let brand: String = match sale_item.select(&brand_selector).next() {
            Some(brand) => brand.text().collect(),
            None => "Unknown".to_string(),
        };

        // the name must be sub-extracted from .item-detail
        let item_detail = sale_item.select(&item_detail_selector).next().unwrap();
        let item_description: String = match item_detail.select(&item_description_selector).next() {
            Some(description) => description.text().collect(),
            None => "Unknown".to_string(),
        };

        products.push(Product {
            brand: if brand.trim().len() > 0 {
                brand.trim().to_string()
            } else {
                "Unknown".to_string()
            },
            title: if item_description.trim().len() > 0 {
                item_description.trim().to_string()
            } else {
                "Unknown".to_string()
            },
        });
    }

    return products
        .iter()
        .enumerate()
        .map(|(i, p)| format!("{}. {}", i + 1, p.to_string()))
        .collect::<Vec<String>>()
        .join("\n");
}

#[get("/search/<query>")]
async fn bulk_search(query: &str) -> Json<Vec<Bin>> {
    let results = search(&query).await;
    return Json(results);
}

#[get("/sale")]
async fn sale() -> String {
    let done = match get_sales().await {
        Ok(body) => body,
        Err(e) => e.to_string(),
    };

    println!("{}", parse_bulk_sales(&done));
    "".to_string()
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(CORS)
        .mount("/", routes![index, sale, bulk_search])
}
