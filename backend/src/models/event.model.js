const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    display: {
      type: Boolean,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: false,
    },
    formLink: {
      type: String,
      required: false,
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error('Invalid URL');
        }
      },
    },
    image: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error('Invalid URL');
        }
      },
    },
    hosts: {
      type: [String],
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
eventSchema.plugin(toJSON);
eventSchema.plugin(paginate);

module.exports = mongoose.model('Event', eventSchema);
