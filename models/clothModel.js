const { Schema, model } = require("mongoose");

const schemaFormat = {
  type: String,
  required: true,
  trim: true,
};

const clothSchema = new Schema(
  {
    Catagory: {
      ...schemaFormat,
    },
    cloth_catagory: {
      ...schemaFormat,
    },
    image: {
     type:String,
      required: true,
    },
    cloth_title: {
      ...schemaFormat,
    },
    cloth_quantity: {
      ...schemaFormat,
    },

    cloth_description: {
      ...schemaFormat,
    },
    cloth_price: {
      ...schemaFormat,
    },
  },
  {
    timestamps: true,
  }
);

const Cloth = model("Cloth", clothSchema);
module.exports = Cloth;
