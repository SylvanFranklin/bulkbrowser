export interface Bin {
    upc: string;
    name: string;
    num: number;
    brand: string;
}


interface NutritionFacts {
    ingredients: string;
    allergens: string;
    labels: string;
}

// api interfaces

interface resp {
    product: Product;
    code: string;
}

interface Product {
    ingredients_text: string;
    allergens_from_ingredints: string;
    labels: string;
}

export async function getNutrionFacts(bin: Bin): Promise<NutritionFacts> {
    const raw = await fetch(
        `https://world.openfoodfacts.org/api/v0/product/${bin.upc}.json`,
    );

    if (raw.ok) {
        const parsed = (await raw.json()) as resp;

        return {
            ingredients: parsed.product.ingredients_text,
            allergens: parsed.product.allergens_from_ingredints,
            labels: parsed.product.labels,
        };
    } else {
        console.log("request fault");
        throw Error;
    }
}

export async function upcCITEMDBtestFunc() {
    const info = await fetch("https://www.upcitemdb.com/upc/41570030851");
    console.log(info.json());
}

export function brandToColor(brand: string) {
    switch (brand) {
        case "VCCO":
            return "bg-amber-800";
        case "EBCC":
            return "bg-stone-800";
        case "VATCC":
            return "bg-orange-800";
        case "CM":
            return "bg-orange-300";
        case "EQEX":
            return "bg-red-500";
        case "ARIN":
            return "bg-red-800";
        case "TIFA":
            return "bg-green-700";
        case "FRCO":
            return "bg-white text-black";
        case "HIFO":
            return "bg-yellow-300";
        case "TNGC":
            return "bg-stone-300";
        case "PUMA":
            return "bg-orange-500";
        case "ASBU":
            return "bg-pink-300";
        case "SWBI":
            return "bg-teal-500";
        case "VTAT":
            return "bg-stone-700";
        case "SFEO":
            return "bg-fuchsia-900";
        case "SLTE":
            return "bg-emerald-200";
        case "MSMF":
            return "bg-teal-200";
        case "GFEN":
            return "bg-amber-300";
        case "NGGC":
            return "bg-lime-300";
        default:
            return "bg-red-400";
    }
}

export async function getSales() {
    // const response = await fetch("https://www.citymarket.coop/sales-and-specials");

    const response = await fetch("http://localhost:8000/sale");
    const text = await response.text();
    console.log(text);

    //
    // // Parse the HTML string into a DOM document
    // const parser = new DOMParser();
    // const doc = parser.parseFromString(html, "text/html");
    //
    // // Find all <h2> elements containing the text "Bulk"
    // const bulkHeaders = doc.querySelectorAll('h2:contains("Bulk")');
    //
    // // Iterate through each matching element and log its content
    // bulkHeaders.forEach(header => {
    //     console.log(header.textContent);
    // });
    //
}
