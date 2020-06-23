const pgp = require('pg-promise')();
const connectionString = 'postgres://postgres:123456@localhost:5432/products';
const db = pgp(connectionString);

exports.getAllProducts = async (req, res) => {
  const productDetails = await db.any("select * from products_info");
  res.status(200).json({
    data: productDetails,
    message: "Connection Successful"
  })
}

exports.createNewProduct = async (req, res) => {
  const newProduct = await db.any("insert into products_info(name,price,description) values($(name),$(price),$(description)) returning id", req.body);
  res.status(200).json({
    data: newProduct,
    message: "Product Inserted Successfully"
  })
}