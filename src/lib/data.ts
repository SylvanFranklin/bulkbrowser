export interface Bin {
  upc: string;
  name: string;
  num: number;
  brand?: string;
}

export interface SearchItem {
  bin: Bin;
  isOpen: boolean;
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
    `https://world.openfoodfacts.org/api/v0/product/${bin.upc}.json`
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
