'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 获取控制器列表
  async getDeviceControllerList() {
    const { ctx } = this;
    const res = await ctx.service.home.getDeviceControllerList(ctx.query);
    ctx.body = res;
  }

  // 新增控制器
  async addNewDeviceController() {
    const { ctx } = this;
    const res = await ctx.service.home.addNewDeviceController(ctx.request.body);
    ctx.body = res;
  }

  // 编辑控制器
  async updateDeviceController() {
    const { ctx } = this;
    const res = await ctx.service.home.updateDeviceController(ctx.request.body);
    ctx.body = res;
  }

  // 删除控制器
  async removeDeviceController() {
    const { ctx } = this;
    const res = await ctx.service.home.removeDeviceController(
      ctx.request.body.id
    );
    ctx.body = res;
  }
}

module.exports = HomeController;
