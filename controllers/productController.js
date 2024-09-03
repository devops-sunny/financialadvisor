const { generateUniqueId } = require("../middlewares/generateUniqueId");
const Product = require("../models/productModel");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    .populate({
      path: 'category',
      populate: {
        path: 'parentCategory', 
        select: 'name  description', 
      },
    });

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      products
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "category subCategory"
    );
    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      product
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const uniqueId = generateUniqueId("PR");
    const images = req.body.image || []; 
    const productData = {
      ...req.body,
      Uniqueid: uniqueId,
      images
    };

    const newProduct = await Product.create(productData);

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.ADDED,
      newProduct
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { imagesToDelete, image, ...otherProductData } = req.body;


    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    let updatedImages = product.images;


    if (imagesToDelete && imagesToDelete.length > 0) {
      updatedImages = updatedImages?.filter((img) => !imagesToDelete.includes(img));
    }

    if (image && image.length > 0) {
      updatedImages = [...updatedImages, ...image];
      updatedImages = await [...new Set(updatedImages)];
    
    }

    const updateData = {
      ...otherProductData,
      images: updatedImages,
    };

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true } 
    );

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.UPDATED,
      updatedProduct
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.DELETED,
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
