const Joi = require('joi');

const createEvent = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    date: Joi.date().required(),
    location: Joi.string().optional(),
    image: Joi.string().required(),
    formLink: Joi.string().optional(),
    hosts: Joi.array().items(Joi.string()).optional(),
    type: Joi.string().required(),
    year: Joi.string().required(),
    display: Joi.boolean().required(),
  }),
};

const updateEvent = {
  params: Joi.object().keys({
    eventId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    date: Joi.date(),
    location: Joi.string(),
    image: Joi.string(),
    formLink: Joi.string(),
    hosts: Joi.array().items(Joi.string()),
    type: Joi.string(),
    year: Joi.string(),
    display: Joi.boolean(),
  }),
};

const deleteEvent = {
  params: Joi.object().keys({
    eventId: Joi.string().required(),
  }),
};

module.exports = {
  createEvent,
  updateEvent,
  deleteEvent,
};
