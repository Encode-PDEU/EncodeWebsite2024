const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const memberValidation = require('../../validations/member.validation');
const memberController = require('../../controllers/member.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageMembers'), validate(memberValidation.createMember), memberController.createMember)
  .get(validate(memberValidation.getMembers), memberController.getMembers);

router
  .route('/:memberId')
  .get(validate(memberValidation.getMember), memberController.getMember)
  .put(auth('manageMembers'), validate(memberValidation.updateMember), memberController.updateMember)
  .delete(auth('manageMembers'), validate(memberValidation.deleteMember), memberController.deleteMember);

module.exports = router;
