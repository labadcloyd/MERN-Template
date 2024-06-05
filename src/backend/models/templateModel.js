const { SAMPLE_ENUM } = require("@/common/constants/options");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const templateModelSchema = new mongoose.Schema(
  {
    id: { type: String, default: uuidv4, required: true },
    ownerId: { type: String, default: uuidv4, required: true },
    stringField: { type: String, required: false },
    numberField: { type: Number, required: false },
    boolField: { type: Boolean, required: false },
    arrayField: [{ type: Number, required: false }],
    enumField: { type: String, enum: SAMPLE_ENUM, required: false },
    objectField: {
      innerStringField: { type: String, required: false },
      innerNumberField: { type: Number, required: false },
      innerBoolField: { type: Boolean, required: false },
      innerArrayField: [{ type: Number, required: false }],
    },
  },
  {
    timestamps: true,
  }
);
// ! it is very important to structure the model like this as Nextjs has a bug that creates the models again every render if the model is not done like this
const TemplateModel =
  mongoose.models.TemplateModel ||
  mongoose.model("TemplateModel", templateModelSchema);

module.exports = { TemplateModel };
