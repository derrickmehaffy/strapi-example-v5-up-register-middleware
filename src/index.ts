// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {
    const middleware = "global::generateUsername";
    const routesPath =
      strapi.plugins["users-permissions"].routes["content-api"].routes;

    const registerIndex = routesPath.findIndex(
      (route) => route.path === "/auth/local/register"
    );

    const registerRoute = routesPath[registerIndex];

    registerRoute.config.middlewares.push(middleware);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
