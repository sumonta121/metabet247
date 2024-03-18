const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slideManageSchema = new Schema(
  {
    text: {
      type: String,
      // required: true,
      trim: true,
    },

    slideImage: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const SlideManage = mongoose.model("slideManage", slideManageSchema);

module.exports = SlideManage;
