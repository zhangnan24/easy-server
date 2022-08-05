'use strict';

const Service = require('egg').Service;

const Op = require('sequelize').Op;

const { isNil } = require('lodash');

const getResponseBody = result => {
  return {
    code: 200,
    data: result,
    msg: 'success',
  };
};

class HomeService extends Service {
  async getDeviceControllerList(query) {
    const { ctx } = this;
    const { active, ip, name } = query;
    const params = {};

    if (!isNil(active)) {
      params.active = active;
    }

    if (ip) {
      params.ip = {
        [Op.like]: `%${ip}%`,
      };
    }

    if (name) {
      params.name = {
        [Op.like]: `%${name}%`,
      };
    }

    const res = await ctx.model.Home.findAll({
      where: params,
      order: [[ 'updated_at', 'DESC' ]],
    });
    return getResponseBody(res || []);
  }

  async addNewDeviceController(body) {
    const { ctx } = this;
    const { active, ip, name } = body;
    await ctx.model.Home.create({ active, ip, name });
    return getResponseBody();
  }

  async updateDeviceController(record) {
    const { ctx } = this;
    const { id, ip, name, active } = record || {};
    await ctx.model.Home.update(
      { ip, name, active },
      {
        where: { id },
      }
    );
    return getResponseBody();
  }

  async removeDeviceController(id) {
    const { ctx } = this;
    await ctx.model.Home.destroy({
      where: { id },
    });
    return getResponseBody();
  }
}

module.exports = HomeService;
