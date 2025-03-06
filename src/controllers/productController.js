const Product = require("../models/productModel");

exports.addProduct = async (req, res) => {
  try {
    const { productName, price, uom, category, image } = req.body;

    // Validate input
    if (!productName || !price || !uom || !category || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create product
    const newProduct = new Product({
      user: req.user.userId,
      productName,
      price,
      uom,
      category,
      image,
    });

    await newProduct.save();
    return res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const { productId } = req.query;

    if (productId) {
      const product = await Product.findOne({
        _id: productId,
        user: req.user.userId,
      });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json(product);
    }

    const products = await Product.find({ user: req.user.userId });
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getProductKeyValuePair = async (req, res) => {
  try {
    const products = await Product.find(
      { user: req.user.userId },
      "productName _id"
    );
    const productList = products.map((product) => ({
      key: product._id,
      value: product.productName,
    }));
    return res.status(200).json(productList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { productName, price, uom, category, image } = req.body;

    // Validate input
    if (!productName || !price || !uom || !category || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = await Product.findOneAndUpdate(
      { _id: productId, user: req.user.userId },
      {
        productName,
        price,
        uom,
        category,
        image,
      },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res
      .status(200)
      .json({ message: "Product updated successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findOneAndDelete({
      _id: productId,
      user: req.user.userId,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
