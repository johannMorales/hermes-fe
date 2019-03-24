import api from "./api";

function getProducts() {
  return api.get("/store/products");
}

export { getProducts };
