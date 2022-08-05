'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/device_controller/list', controller.home.getDeviceControllerList);

  router.post('/device_controller/add', controller.home.addNewDeviceController);

  router.post(
    '/device_controller/update',
    controller.home.updateDeviceController
  );

  router.post(
    '/device_controller/remove',
    controller.home.removeDeviceController
  );
};
