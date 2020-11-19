const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://naum4ik:naumchas2010@cluster0.wxzfi.mongodb.net/todos?retryWrites=true&w=majority";

const createProduct = async (req, res, next) => {
  const newProduct = {
    id: req.body.id,
    item: req.body.item,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("items").insertOne(newProduct);
  } catch (error) {
    return res.json({ message: "Could not store data." });
  }
  client.close();

  res.json(newProduct);
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);

  let items;

  try {
    await client.connect();
    const db = client.db();
    items = await db.collection("items").find().toArray();
  } catch (error) {
    return res.json({ message: "Could not retrieve products" });
  }

  client.close();

  res.json(items);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
