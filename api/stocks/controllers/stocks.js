"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.stocks.create(data, { files });
    } else {
      const entityWarehouse = await strapi.services.warehouse.findOne({
        number: ctx.request.body.warehouse,
      });
      const entityProduct = await strapi.services.product.findOne({
        SKU: ctx.request.body.SKU,
      });

      const warehouse = sanitizeEntity(entityWarehouse, {
        model: strapi.models.warehouse,
      });
      const product = sanitizeEntity(entityProduct, {
        model: strapi.models.product,
      });

      let qty;
      let remainingSpace;
      let warehouseUpdated;

      if (warehouse == null) return "warehouse is not valid";

      if (warehouse.availbleSpace === 0) {
        return "No space to store products";
      } else if (
        ctx.request.body.qty >= warehouse.capacity &&
        warehouse.capacity !== null
      ) {
        qty = warehouse.capacity;
        remainingSpace = 0;
        warehouseUpdated = await strapi.services.warehouse.update(
          { id: warehouse.id },
          { availableSpace: remainingSpace }
        );
      } else if (warehouse.capacity == null) {
        qty = ctx.request.body.qty;
        warehouseUpdated = warehouse;
      } else {
        qty = ctx.request.body.qty;
        remainingSpace = warehouse.capacity - ctx.request.body.qty;
        warehouseUpdated = await strapi.services.warehouse.update(
          { id: warehouse.id },
          { availableSpace: remainingSpace }
        );
      }

      if (product != null) {
        entity = await strapi.services.stocks.create({
          product,
          warehouse: sanitizeEntity(warehouseUpdated, {
            model: strapi.models.warehouse,
          }),
          qty,
        });
      } else {
        return "product is not valid";
      }
    }
    return sanitizeEntity(entity, { model: strapi.models.stocks });
  },

  async unstock(ctx) {
    //   let entity;
    //   if (ctx.is("multipart")) {
    //     const { data, files } = parseMultipartData(ctx);
    //     entity = await strapi.services.stocks.create(data, { files });
    //   } else {
    //     const entityWarehouse = await strapi.services.warehouse.findOne({
    //       number: ctx.request.body.warehouse,
    //     });
    //     const entityProduct = await strapi.services.product.findOne({
    //       SKU: ctx.request.body.SKU,
    //     });
    //     const entityStock = await strapi.services.stocks.findOne({
    //       product: ctx.request.body.SKU,
    //     });
    //     const warehouse = sanitizeEntity(entityWarehouse, {
    //       model: strapi.models.warehouse,
    //     });
    //     const product = sanitizeEntity(entityProduct, {
    //       model: strapi.models.product,
    //     });
    //     const stock = sanitizeEntity(entityStock, {
    //       model: strapi.models.stocks,
    //     });
    //     console.log(stock);
    //     // let qty;
    //     // if (warehouse == null) return "warehouse is not valid";
    //     // if (product == null) return "product is not valid";
    //     // entity = await strapi.services.stocks.update({
    //     //   qty,
    //     // });
    //   }
    //   return sanitizeEntity(entityStock, { model: strapi.models.stocks });
  },
};
