const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const memberRoute = require('./member.route');
const eventRoute = require('./event.route');
const uploadRoute = require('./upload.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/members',
    route: memberRoute,
  },
  {
    path: '/events',
    route: eventRoute,
  },
  {
    path: '/upload',
    route: uploadRoute,
  },
  // {
  //   path: '/gallery',
  //   route: galleryRoute,
  // }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
