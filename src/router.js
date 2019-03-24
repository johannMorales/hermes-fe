import Vue from "vue";
import Router from "vue-router";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import toLower from "lodash/toLower";

const requireComponent = require.context("./pages", true, /[\w-]+\.vue$/);

const routes = [];

requireComponent.keys().forEach(fileName => {
  const path =
    "/" +
    toLower(
      fileName
        .replace("_", ":")
        .replace("./", "")
        .replace(".vue", "")
    ).replace("index", "");

  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(camelCase(fileName.replace(/\.\w+$/, "")));
  const component = Vue.component(componentName, componentConfig.default);
  const name = upperFirst(camelCase(fileName.replace(/\.\w+$/, "")));

  routes.push({ path, name, component });
});

export default new Router({
  routes
});
