pub mod utils {
    use futures::executor::block_on;
    use meilisearch_sdk::{client::*, SearchResult, SearchResults, TaskInfo, TasksResults};
    use serde::{Deserialize, Serialize};
    use std::{fs::File, io::prelude::*};

    #[derive(Debug, Deserialize, Serialize, Clone)]
    pub struct Bin {
        pub name: String,
        pub num: u32,
        pub upc: String,
        pub brand: String,
    }

    impl ToString for Bin {
        fn to_string(&self) -> String {
            format!(
                "Name: {}, Num: {}, UPC: {}, Brand: {}",
                self.name, self.num, self.upc, self.brand
            )
        }
    }

    pub async fn search(query: &str) -> Vec<Bin> {
        let client = Client::new(
            "http://localhost:7700",
            Some("HbndFFsXSL8ZoBSNlkr-uSwbp-IQS4Wbotj5D3z0p5U"),
        );

        let result: SearchResults<Bin> = client
            .index("bins")
            .search()
            .with_query(query)
            .execute()
            .await
            .unwrap();

        let bins = result
            .hits
            .iter()
            .map(|x| x.result.clone())
            .collect::<Vec<Bin>>();

        return bins;
    }

    pub fn init() {
        block_on(async move {
            let client = Client::new(
                "http://localhost:7700",
                Some("HbndFFsXSL8ZoBSNlkr-uSwbp-IQS4Wbotj5D3z0p5U"),
            );

            // reading and parsing the file
            client.delete_index("bins").await.unwrap();
            let bins = client.index("bins");
            bins.delete_all_documents().await.unwrap();
            // remove all old entries

            let mut file = File::open("bins.json").unwrap();
            let mut content = String::new();
            file.read_to_string(&mut content).unwrap();

            let bin_docs: Vec<Bin> = serde_json::from_str(&content).unwrap();

            let _result: TaskInfo = bins.add_documents(&bin_docs, Some("num")).await.unwrap();
            let tasks: TasksResults = client.get_tasks().await.unwrap();
            println!("{:#?}", tasks)
        })
    }
}
