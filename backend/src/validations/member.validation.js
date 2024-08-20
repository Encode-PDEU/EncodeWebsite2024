const Joi = require('joi');

const createMember = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    year: Joi.string().required(),
    position: Joi.string().required(),
    description: Joi.string().required(),
    socials: Joi.object().pattern(
      Joi.string(),
      Joi.object().keys({
        name: Joi.string().required(),
        link: Joi.string().required(),
      })
    ),
    profilePicture: Joi.string().required(),
    former: Joi.boolean().required(),
  }),
};

const updateMember = {
  params: Joi.object().keys({
    memberId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string().email(),
    year: Joi.string(),
    position: Joi.string(),
    description: Joi.string(),
    socials: Joi.object().pattern(
      Joi.string(),
      Joi.object().keys({
        name: Joi.string().required(),
        link: Joi.string().required(),
      })
    ),
    profilePicture: Joi.string(),
    former: Joi.boolean(),
  }),
};

const deleteMember = {
  params: Joi.object().keys({
    memberId: Joi.string().required(),
  }),
};

module.exports = {
  createMember,
  updateMember,
  deleteMember,
};
