import Fuse from "fuse.js";
import type { Bin } from "./data";

export const bins: Array<Bin> = [
  {
    name: "Organic Jolly Beans",
    num: 156,
    upc: "086700009918",
    brand: "UNFI",
  },
  {
    name: "Yogurt Raisins",
    num: 167,
    upc: "04256300345",
    brand: "UNFI",
  },
  {
    name: "Milk Chocolate Raisins",
    num: 196,
    upc: "1264711710",
    brand: "UNFI",
  },
  {
    name: "Dark Chocolate Raisins",
    num: 172,
    upc: "4256300340",
    brand: "UNFI",
  },
  {
    name: "Dark Chocolate Almonds",
    num: 169,
    upc: "04256301887",
    brand: "UNFI",
  },
  {
    name: "Milk Chocolate Peanuts",
    num: 194,
    upc: "01264737210",
    brand: "UNFI",
  },
  {
    name: "Milk Chocolate Pretzels",
    num: 193,
    upc: "08670021340",
    brand: "UNFI",
  },
  {
    name: "Chocolate Peanut Butter Malt Balls",
    num: 364,
    upc: "08670021335",
    brand: "UNFI",
  },
  {
    name: "Malted Milk Balls",
    num: 173,
    upc: "04256300342",
    brand: "UNFI",
  },
  {
    name: "Chocolate Ginger",
    num: 158,
    upc: "08670001370",
    brand: "UNFI",
  },
  {
    name: "Pasteurized Sliced Almonds",
    num: 547,
    upc: "02693804980",
    brand: "UNFI",
  },
  {
    name: "Pasteurized Slivered Almonds",
    num: 539,
    upc: "02693810962",
    brand: "UNFI",
  },
  {
    name: "Tamari Roasted Almonds",
    num: 604,
    upc: "02693821930",
    brand: "UNFI",
  },
  {
    name: "Whole Almonds, Pasteurized",
    num: 603,
    upc: "02693801788",
    brand: "UNFI",
  },
  {
    name: "Sunflower Seeds Pasteurized",
    num: 632,
    upc: "02693800288",
    brand: "UNFI",
  },
  {
    name: "Pistachio Roasted Salted",
    num: 965,
    upc: "02693807010",
    brand: "UNFI",
  },
  {
    name: "Mixed Nuts, No Salt",
    num: 615,
    upc: "02693811032",
    brand: "UNFI",
  },
  {
    name: "Mixed Nuts Roasted Salted",
    num: 633,
    upc: "02693811034",
    brand: "UNFI",
  },
  {
    name: "Cashews Roasted Salted",
    num: 658,
    upc: "02693810934",
    brand: "UNFI",
  },
  {
    name: "Whole Pasteurized Almonds 0G",
    num: 178,
    upc: "02693862370",
    brand: "UNFI",
  },
  {
    name: "Almonds, Roasted and Salted",
    num: 528,
    upc: "02693819223",
    brand: "UNFI",
  },
  {
    name: "Organic Turmeric Cashews",
    num: 878,
    upc: "64896000105",
    brand: "UNFI",
  },
  {
    name: "Cashews Whole std No Salt",
    num: 254,
    upc: "02693810932",
    brand: "UNFI",
  },
  {
    name: "Pecan Halves OG",
    num: 532,
    upc: "04256301400",
    brand: "UNFI",
  },
  {
    name: "Raw Pecan Halves",
    num: 667,
    upc: "02693800481",
    brand: "UNFI",
  },
  {
    name: "OG Sesame Seeds Unhulled",
    num: 617,
    upc: "02693862800",
    brand: "UNFI",
  },
  {
    name: "OG Sesame Seeds Hulled",
    num: 616,
    upc: "02693857098",
    brand: "UNFI",
  },
  {
    name: "Organic Black Chia Seeds",
    num: 767,
    upc: "02693873655",
    brand: "UNFI",
  },
  {
    name: "Wild Blueberry Granola w/Flax",
    num: 734,
    upc: "07507041522",
    brand: "UNFI",
  },
  {
    name: "Coconut Almond Granola",
    num: 515,
    upc: "07507041510",
    brand: "UNFI",
  },
  {
    name: "Ginger Snap Granola",
    num: 512,
    upc: "07507041527",
    brand: "UNFI",
  },
  {
    name: "Maple Almond Granola",
    num: 504,
    upc: "07507041514",
    brand: "UNFI",
  },
  {
    name: "Organic Muesli Unsweetened",
    num: 517,
    upc: "04668922501",
    brand: "UNFI",
  },
  {
    name: "Organic Classic Granola",
    num: 162,
    upc: "64896000100",
    brand: "UNFI",
  },
  {
    name: "Organic Coconola Original",
    num: 863,
    upc: "64896000103",
    brand: "UNFI",
  },
  {
    name: "Organic Original Choco Chunk",
    num: 174,
    upc: "64896007690",
    brand: "UNFI",
  },
  {
    name: "Hit The Trail Mix",
    num: 138,
    upc: "08670006070",
    brand: "UNFI",
  },
  {
    name: "Organic Choco Almond Trail Mix",
    num: 306,
    upc: "64896020208",
    brand: "UNFI",
  },
  {
    name: "Organic Antioxidant Trail Mix",
    num: 127,
    upc: "648960202425",
    brand: "UNFI",
  },
  {
    name: "Chocolate Nut Crunch",
    num: 136,
    upc: "08670006010",
    brand: "UNFI",
  },
  {
    name: "Wild Rice Sticks",
    num: 964,
    upc: "70402010110",
    brand: "UNFI",
  },
  {
    name: "Toasted Corn Nuts",
    num: 733,
    upc: "02693854556",
    brand: "UNFI",
  },
  {
    name: "Organic Black Turtle Beans",
    num: 570,
    upc: "02693832629",
    brand: "UNFI",
  },
  {
    name: "Organic Pinto Beans",
    num: 495,
    upc: "02693862660",
    brand: "UNFI",
  },
  {
    name: "Organic French Indigo Lentils",
    num: 490,
    upc: "04256301472",
    brand: "UNFI",
  },
  {
    name: "Organic Split Red Lentils",
    num: 492,
    upc: "02693869005",
    brand: "UNFI",
  },
  {
    name: "Organic Green Lentils",
    num: 491,
    upc: "02693862590",
    brand: "UNFI",
  },
  {
    name: "Organic Red Chili Beans",
    num: 484,
    upc: "02693827493",
    brand: "UNFI",
  },
  {
    name: "Organic Black-eyed Peas",
    num: 482,
    upc: "02693856858",
    brand: "UNFI",
  },
  {
    name: "Organic Split Green Peas",
    num: 498,
    upc: "02693871090",
    brand: "UNFI",
  },
  {
    name: "Organic Garbanzo Beans",
    num: 483,
    upc: "02693862710",
    brand: "UNFI",
  },
  {
    name: "Organic Adzuki Beans",
    num: 480,
    upc: "02693857400",
    brand: "UNFI",
  },
  {
    name: "Organic Yellow Split Peas",
    num: 499,
    upc: "02693849482",
    brand: "UNFI",
  },
  {
    name: "Organic Split Mung Beans",
    num: 793,
    upc: "02693827096",
    brand: "UNFI",
  },
  {
    name: "Organic Brown Rice Spirals",
    num: 118,
    upc: "62168302124",
    brand: "UNFI",
  },

  {
    name: "Honey Wheat Fig Bar",
    num: 213,
    upc: "07467288821",
    brand: "UNFI",
  },
  {
    name: "Honey Peach Apricot Fig Bar",
    num: 214,
    upc: "07467288829",
    brand: "UNFI",
  },
  {
    name: "OG Dried Whole Bananas",
    num: 8506,
    upc: "02693855339",
    brand: "UNFI",
  },
  {
    name: "OG Date Pieces in Flour",
    num: 266,
    upc: "02693862450",
    brand: "UNFI",
  },
  {
    name: "Organic Brown Flax Seeds",
    num: 204,
    upc: "04256301642",
    brand: "UNFI",
  },
  {
    name: "Organic Golden Flax Seed",
    num: 205,
    upc: "02693895646",
    brand: "UNFI",
  },
  {
    name: "Raw Walnuts",
    num: 612,
    upc: "02693800296",
    brand: "UNFI",
  },
  {
    name: "Organic Raw Walnuts",
    num: 660,
    upc: "02693846623",
    brand: "UNFI",
  },
  {
    name: "Active Dry Baking Yeast",
    num: 220,
    upc: "11792915700",
    brand: "UNFI",
  },
  {
    name: "Organic Castile Soap Citrus",
    num: 105,
    upc: "01878777765",
    brand: "UNFI",
  },
  {
    name: "Organic Soap Lavender",
    num: 106,
    upc: "01878776465",
    brand: "UNFI",
  },
  {
    name: "Organic Castile Almond Soap",
    num: 107,
    upc: "01878776165",
    brand: "UNFI",
  },
  {
    name: "Organic Castile Mild Soap",
    num: 108,
    upc: "01878776265",
    brand: "UNFI",
  },
  {
    name: "Organic Castile Soap Eucalyptus",
    num: 109,
    upc: "01878776365",
    brand: "UNFI",
  },
  {
    name: "Organic Castile Soap Peppermint",
    num: 110,
    upc: "01878776565",
    brand: "UNFI",
  },
  {
    name: "Laundry Liquid",
    num: 114,
    upc: "73198410051",
    brand: "UNFI",
  },
  {
    name: "Dish Liquid",
    num: 115,
    upc: "73198410061",
    brand: "UNFI",
  },

  {
    name: "Organic French Couscous",
    num: 684,
    upc: "02693849806",
    brand: "UNFI",
  },
  {
    name: "Pearled Israeli Couscous",
    num: 428,
    upc: "85755900822",
    brand: "UNFI",
  },
  {
    name: "Organic Steel Cut Oat Groats",
    num: 412,
    upc: "02693873400",
    brand: "UNFI",
  },
  {
    name: "OG Quick Oats",
    num: 409,
    upc: "02693849094",
    brand: "UNFI",
  },
  {
    name: "Organic Rolled Oats",
    num: 411,
    upc: "03724951101",
    brand: "UNFI",
  },
  {
    name: "Multicolored Popcorn",
    num: 265,
    upc: "02693816533",
    brand: "UNFI",
  },
  {
    name: "OG Yellow Popping Corn",
    num: 723,
    upc: "08601100328",
    brand: "UNFI",
  },
  {
    name: "Organic Quinoa",
    num: 414,
    upc: "02693854840",
    brand: "UNFI",
  },
  {
    name: "Organic Tri Color Quinoa",
    num: 201,
    upc: "02693800471",
    brand: "UNFI",
  },
  {
    name: "Organic Red Quinoa",
    num: 282,
    upc: "02693853841",
    brand: "UNFI",
  },
  {
    name: "Organic Yellow Corn Grits",
    num: 403,
    upc: "02693872800",
    brand: "UNFI",
  },
  {
    name: "Organic Yellow Corn Meal",
    num: 692,
    upc: "02693821902",
    brand: "UNFI",
  },
  {
    name: "Organic Masa Harina",
    num: 456,
    upc: "03997810283",
    brand: "UNFI",
  },
  {
    name: "Textured Vegetable Protein",
    num: 423,
    upc: "02693877953",
    brand: "UNFI",
  },
  {
    name: "Organic Hulled Millet",
    num: 408,
    upc: "02693844102",
    brand: "UNFI",
  },
  {
    name: "Organic Hulled Barley",
    num: 400,
    upc: "02693856754",
    brand: "UNFI",
  },
  {
    name: "Organic Pearled Barley",
    num: 401,
    upc: "02693818250",
    brand: "UNFI",
  },
  {
    name: "Organic Buckwheat Groats",
    num: 967,
    upc: "02693849478",
    brand: "UNFI",
  },
  {
    name: "Organic White Wheat Bulgur",
    num: 680,
    upc: "04256301246",
    brand: "UNFI",
  },
  {
    name: "Red Bulgur",
    num: 402,
    upc: "02693851756",
    brand: "UNFI",
  },
  {
    name: "Coconut Sugar OG",
    num: 166,
    upc: "07831421625",
    brand: "UNFI",
  },
  {
    name: "Organic Raw Cane Sugar",
    num: 553,
    upc: "02693805247",
    brand: "UNFI",
  },
  {
    name: "Sea Salt",
    num: 475,
    upc: "01360001070",
    brand: "UNFI",
  },
  {
    name: "Organic Shredded Coconut",
    num: 683,
    upc: "04256301086",
    brand: "UNFI",
  },
  {
    name: "Brown Rice Flour OG",
    num: 458,
    upc: "03997810974",
    brand: "UNFI",
  },
  {
    name: "Organic Vita-Spelt Flour",
    num: 463,
    upc: "02706459405",
    brand: "UNFI",
  },
  {
    name: "Almond Flour",
    num: 157,
    upc: "02693811111",
    brand: "UNFI",
  },
  {
    name: "Organic Tamari Soy Sauce",
    num: 562,
    upc: "07581000160",
    brand: "UNFI",
  },
  {
    name: "Organic Canola Oil",
    num: 588,
    upc: "02250680020",
    brand: "UNFI",
  },

  {
    name: "Organic Tahini",
    num: 580,
    upc: "04408204549",
    brand: "UNFI",
  },
  {
    name: "Organic Peanut Butter Stock",
    num: 994,
    upc: "02693858866",
    brand: "UNFI",
  },
  {
    name: "Peanut Butter Stock",
    num: 610,
    upc: "02693813250",
    brand: "UNFI",
  },
  {
    name: "Almond Butter Stock Organic",
    num: 788,
    upc: "02693895644",
    brand: "UNFI",
  },
  {
    name: "Almond Butter Stock Organic",
    num: 786,
    upc: "04256301338",
    brand: "UNFI",
  },
  {
    name: "Long Grain Brown Rice",
    num: 436,
    upc: "07341640113",
    brand: "UNFI",
  },
  {
    name: "Arborio Rice",
    num: 429,
    upc: "07341605090",
    brand: "UNFI",
  },
  {
    name: "OG Arborio Rice",
    num: 432,
    upc: "07341604090",
    brand: "UNFI",
  },
  {
    name: "Organic Rice Blend Volcano",
    num: 586,
    upc: "70895350321",
    brand: "UNFI",
  },
  {
    name: "OG Country Wild Rice",
    num: 591,
    upc: "7341600437",
    brand: "UNFI",
  },
  {
    name: "Organic Brown Jasmine Rice",
    num: 382,
    upc: "07341604039",
    brand: "UNFI",
  },
  {
    name: "Forbidden Rice",
    num: 675,
    upc: "70895300230",
    brand: "UNFI",
  },
  {
    name: "Basmati Brown Rice",
    num: 430,
    upc: "07341640150",
    brand: "UNFI",
  },
  {
    name: "Organic Brown Rice Long Grain",
    num: 437,
    upc: "07341640132",
    brand: "UNFI",
  },
  {
    name: "Organic Brown Rice Short Grain",
    num: 440,
    upc: "07341640122",
    brand: "UNFI",
  },
  {
    name: "Short Grain Brown Rice",
    num: 439,
    upc: "07341640101",
    brand: "UNFI",
  },
  {
    name: "Organic Long Grain White Rice",
    num: 444,
    upc: "07341640134",
    brand: "UNFI",
  },
  {
    name: "Organic White Basmati Rice",
    num: 433,
    upc: "07341640202",
    brand: "UNFI",
  },
  {
    name: "Organic Sushi Rice",
    num: 441,
    upc: "07341640161",
    brand: "UNFI",
  },
  {
    name: "Organic White Jasmine Rice",
    num: 443,
    upc: "07341604029",
    brand: "UNFI",
  },
  {
    name: "Jasmine Rice",
    num: 435,
    upc: "07341604024",
    brand: "UNFI",
  },
  {
    name: "Organic Brown Basmati Rice",
    num: 431,
    upc: "07341640201",
    brand: "UNFI",
  },
  {
    name: "OG Thompson Raisins",
    num: 132,
    upc: "02693834260",
    brand: "UNFI",
  },
  {
    name: "Golden Raisins Sulphured",
    num: 385,
    upc: "04256301180",
    brand: "UNFI",
  },
  {
    name: "Decas Cranberries",
    num: 386,
    upc: "02693865362",
    brand: "UNFI",
  },
  {
    name: "Mango Unsulphured",
    num: 374,
    upc: "02693825634",
    brand: "UNFI",
  },
  {
    name: "Organic Banana Chips Sweetened",
    num: 197,
    upc: "02693865756",
    brand: "UNFI",
  },
  {
    name: "Crystallized Ginger",
    num: 299,
    upc: "827499999",
    brand: "UNFI",
  },
  {
    name: "Chocolate Almond Chip",
    num: 215,
    upc: "76927010009",
    brand: "UNFI",
  },
  {
    name: "Honey Pistachio",
    num: 230,
    upc: "76927010013",
    brand: "UNFI",
  },
  {
    name: "Organic Zante Currants",
    num: 597,
    upc: "02693895806",
    brand: "UNFI",
  },
  {
    name: "Prunes, Unsulphured",
    num: 373,
    upc: "02693829400",
    brand: "UNFI",
  },
  {
    name: "Turkish Apricots, Sulphured Dried Sweetened Cherries",
    num: 371,
    upc: "02693869200",
    brand: "UNFI",
  },
  {
    name: "Cha Cha Chia OG Raw",
    num: 380,
    upc: "04256301064",
    brand: "UNFI",
  },
  {
    name: "Carob Spirulina",
    num: 266,
    upc: "76927030007",
    brand: "UNFI",
  },
  {
    name: "Organic Medjool Dates",
    num: 206,
    upc: "76927010001",
    brand: "UNFI",
  },
  {
    name: "Deglet Dates, Pitted",
    num: 121,
    upc: "02693891683",
    brand: "UNFI",
  },
  {
    name: "Organic French Country Roast",
    num: 275,
    upc: "-",
    brand: "VCCO",
  },
  {
    name: "Organic Tres",
    num: 659,
    upc: "-",
    brand: "VCCO",
  },
  {
    name: "Organic Friend Blend",
    num: 728,
    upc: "-",
    brand: "VCCO",
  },
  {
    name: "Organic DownTown Blend",
    num: 980,
    upc: "-",
    brand: "VCCO",
  },
  {
    name: "Organic Full City Roast",
    num: 981,
    upc: "-",
    brand: "VCCO",
  },
  {
    name: "Organic Italian Rustica  ",
    num: 989,
    upc: "-",
    brand: "VCCO",
  },
  {
    name: "Organic French Roast",
    num: 981,
    upc: "-",
    brand: "EQEX",
  },
  {
    name: "Organic Bion Revolution",
    num: 531,
    upc: "-",
    brand: "EQEX",
  },
  {
    name: "Organic Love Buzz",
    num: 799,
    upc: "-",
    brand: "EQEX",
  },
  {
    name: "Organic Cold Brew",
    num: 527,
    upc: "-",
    brand: "EQEX",
  },
  {
    name: "Organic Cold Brew Blend",
    num: 527,
    upc: "-",
    brand: "EQEX",
  },
  {
    name: "Organic Midnight Sun",
    num: 507,
    upc: "-",
    brand: "EQEX",
  },
  {
    name: "Organic Nicaraguan Medium Roast",
    num: 958,
    upc: "-",
    brand: "EQEX",
  },
  {
    name: "Organic Ethiopian Full City Roast",
    num: 954,
    upc: "-",
    brand: "EQEX",
  },
  {
    name: "Organic Decaf",
    num: 524,
    upc: "-",
    brand: "CM",
  },
  {
    name: "Organic Decaf",
    num: 524,
    upc: "-",
    brand: "CM",
  },
  {
    name: "Dark Roast Decaf",
    num: 916,
    upc: "-",
    brand: "VATCC",
  },
  {
    name: "Organic Village Decaf",
    num: 993,
    upc: "-",
    brand: "VCCO",
  },
  {
    name: "Organic French Roast Decaf",
    num: 952,
    upc: "-",
    brand: "EQEX",
  },
  {
    name: "Organic Espresso Blend",
    num: 949,
    upc: "-",
    brand: "EQEX",
  },
  {
    name: "Organic Mind Body & Soul",
    num: 948,
    upc: "-",
    brand: "EQEX",
  },
  {
    name: "Organic BreakFast Blend",
    num: 947,
    upc: "-",
    brand: "EQEX",
  },
  {
    name: "Organic Sumatra Dark Roast ",
    num: 258,
    upc: "-",
    brand: "EBCC",
  },
  {
    name: "Organic Light Roast",
    num: 258,
    upc: "-",
    brand: "CM",
  },
  {
    name: "Organic Dark Roast",
    num: 523,
    upc: "-",
    brand: "CM",
  },
  {
    name: "Organic Single Origin",
    num: 987,
    upc: "-",
    brand: "CM",
  },
  {
    name: "Organic Single Origin",
    num: 987,
    upc: "-",
    brand: "CM",
  },
  {
    name: "Organic Ethiopian Yirgacheffe",
    num: 259,
    upc: "-",
    brand: "EBCC",
  },
  {
    name: "Organic Moka Java",
    num: 986,
    upc: "-",
    brand: "VATCC",
  },
  {
    name: "Ethiopian Yirgacheffe",
    num: 983,
    upc: "-",
    brand: "VATCC",
  },
  {
    name: "Sumatran Gayo ",
    num: 982,
    upc: "-",
    brand: "VATCC",
  },
];

export const fuse = new Fuse(bins, { keys: ["num", "name", "upc", "brand"] });
