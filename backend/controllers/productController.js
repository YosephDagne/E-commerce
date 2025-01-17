// function for add product

const addProduct = (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image2 = req.files.image2[0];
    const image3 = req.files.image3[0];
    const image4 = req.files.image1[0];
    const image1 = req.files.image1[0];
    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller
    );
    console.log(image1, image2, image3, image4);
    res.json({});
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log(error);
  }
};

// function for list product
const listProducts = (req, res) => {};

// function for removing product

const removeProduct = (req, res) => {};

// function for single product information
const singleProduct = (req, res) => {};

export { addProduct, listProducts, removeProduct, singleProduct };
