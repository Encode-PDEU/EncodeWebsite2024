const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const memberSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    year: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    socials: {
      type: Map,
      of: new mongoose.Schema({
        name: {
          type: String,
          required: true,
        },
        link: {
          type: String,
          required: true,
          validate(value) {
            if (!validator.isURL(value)) {
              throw new Error('Invalid URL');
            }
          },
        },
      }),
    },
    profilePicture: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error('Invalid URL');
        }
      },
    },
    former: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
memberSchema.plugin(toJSON);
memberSchema.plugin(paginate);

module.exports = mongoose.model('Member', memberSchema);
