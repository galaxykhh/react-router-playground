import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("products", "routes/products.tsx"),
    route("products/:id", "routes/product.tsx"),
    route("carts/:id", "routes/carts.tsx"),
] satisfies RouteConfig;
