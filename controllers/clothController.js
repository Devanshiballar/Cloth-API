const clothModel = require("../models/clothModel");

exports.create = async (req, res) => {

  try {
     const {
      Catagory,
      cloth_catagory,
      cloth_title,
      cloth_quantity,
      cloth_description,
      cloth_price,
    } = req.body;
    const image = req?.file?.filename;
    console.log(image);
   
    const cloth = await clothModel.create({
      Catagory,
      cloth_catagory,
      image,
      cloth_title,
      cloth_quantity,
      cloth_description,
      cloth_price,
    });
    if (cloth) {
      res.redirect("/");
    } else {
      res.status(404).json({
        success: false,
        Message: "data are not inserted",
      });
    }
  } catch (err) {
    console.error(err);
  }
};
