/**
 * `generateUsername` middleware
 */

import type { Core } from "@strapi/strapi";

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    if (!ctx.request.body.email) {
      return ctx.badRequest("email.required");
    }

    ctx.request.body.username = ctx.request.body.email;

    await next();
  };
};
