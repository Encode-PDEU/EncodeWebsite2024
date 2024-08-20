const httpStatus = require('http-status');
const { Member } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a member
 * @param {Object} memberBody
 * @returns {Promise<Member>}
 */
const createMember = async (memberBody) => {
  return Member.create(memberBody);
};

/**
 * Query for members
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryMembers = async (filter, options) => {
  const members = await Member.paginate(
    {
      ...filter,
      name: {
        $regex: new RegExp(filter.name, 'i'),
      },
      position: {
        $regex: new RegExp(filter.position, 'i'),
      },
    },
    options
  );
  return members;
};

/**
 * Get member by id
 * @param {ObjectId} id
 * @returns {Promise<Member>}
 */
const getMemberById = async (id) => {
  return Member.findById(id);
};

/**
 * Update member by id
 * @param {ObjectId} memberId
 * @param {Object} updateBody
 * @returns {Promise<Member>}
 */
const updateMemberById = async (memberId, updateBody) => {
  const member = await getMemberById(memberId);
  if (!member) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Member not found');
  }
  Object.assign(member, updateBody);
  await member.save();
  return member;
};

/**
 * Delete member by id
 * @param {ObjectId} memberId
 * @returns {Promise<Member>}
 */
const deleteMemberById = async (memberId) => {
  const member = await getMemberById(memberId);
  if (!member) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Member not found');
  }
  await member.remove();
  return member;
};

module.exports = {
  createMember,
  queryMembers,
  getMemberById,
  updateMemberById,
  deleteMemberById,
};
