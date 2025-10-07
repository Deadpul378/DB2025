import { MongoClient } from "mongodb";

const url = "mongodb://localhost:32768";
const client = new MongoClient(url);

const dbName = "GoluboyPidorok";

async function run() {
  try {
    await client.connect();
    console.log("Підключено до MongoDB");

    const db = client.db(dbName);
    const products = db.collection("products");

    // -------------------------------
    // a. insertOne
    const tshirt = await products.insertOne({
      name: "Футболка Oversize",
      price: 799,
      sizes: ["S", "M", "L", "XL"],
      category: "Футболки",
      inStock: true,
      details: { material: "100% cotton", color: "чорний", country: "Туреччина" },
      tags: ["унісекс", "літо"]
    });
    console.log("insertOne:", tshirt.insertedId);

    // a. insertMany
    const manyProducts = await products.insertMany([
      {
        name: "Джинси Slim Fit",
        price: 1499,
        sizes: ["28", "30", "32", "34"],
        category: "Джинси",
        inStock: true,
        details: { material: "денім", color: "синій", stretch: true },
        discount: 10
      },
      {
        name: "Худі Classic",
        price: 1199,
        sizes: ["M", "L", "XL"],
        category: "Худі",
        inStock: false,
        details: { material: "бавовна 80%, поліестер 20%", color: "сірий", hood: true },
        tags: ["зима", "унісекс"]
      }
    ]);
    console.log("insertMany:", manyProducts.insertedIds);

    // b. find() та find({ з параметрами })

    const allProducts = await products.find().toArray();
    console.log("find all:", allProducts);

    const FindProductsByPrice = await products.find({ price: 799 }).toArray();
    console.log("find ProductsByPrice:", FindProductsByPrice);

    // c. findOne
    const oneProduct = await products.findOne({ name: "Футболка Oversize" });
    console.log("findOne:", oneProduct);

    // d. updateOne
    await products.updateOne(
      { name: "Футболка Oversize" },
      { $set: { price: 666 } }
    );

    // e. updateMany
    await products.updateMany(
      { category: "Футболки" },
      { $inc: { price: 50 } } 
    );

    // f. findOneAndUpdate
    const updatedProduct = await products.findOneAndUpdate(
      { name: "Худі Classic" },
      { $set: { inStock: true } },
      { returnDocument: "after" }
    );
    console.log("findOneAndUpdate:", updatedProduct);

    // g. deleteOne та deleteMany
    await products.deleteOne({ name: "Джинси Slim Fit" });
    await products.deleteMany({ category: "Худі" });

    // h. findOneAndDelete
    const deletedProduct = await products.findOneAndDelete({ name: "Футболка Oversize" });
    console.log("findOneAndDelete:", deletedProduct);

    // i. drop
    await products.drop();
    console.log("Колекція products видалена");

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
