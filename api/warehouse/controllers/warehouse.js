"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findOne(ctx) {
    const { number } = ctx.params;

    const entity = await strapi.services.warehouse.findOne({ number });
    return sanitizeEntity(entity, { model: strapi.models.warehouse });
  },

  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.warehouse.create(data, { files });
    } else {
      entity = await strapi.services.warehouse.create({
        ...ctx.request.body,
        availableSpace: ctx.request.body.capacity,
      });
    }
    return sanitizeEntity(entity, { model: strapi.models.warehouse });
  },
};
