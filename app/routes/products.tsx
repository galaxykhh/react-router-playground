import { getProducts } from "~/features/products/api/get-products";
import type { Route } from "./+types/products";
import { useLoaderData } from "react-router";
import Section from "~/features/core/components/section";
import ProductList from "~/features/products/components/product-list";
import ProductGrid from "~/features/products/components/product-grid";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Products" },
        { name: "products", content: "description" },
    ];
}

export function loader({ params }: Route.LoaderArgs) {
    return getProducts();
}

export default function Posts() {
    const products = useLoaderData();

    return (
        <>
            <Section label="LURE PRODUCTS">
                <ProductList products={products} />
            </Section>

            <Section label="BRAND NEW">
                <ProductList products={[...products].reverse()} />
            </Section>

            <Section label="TIME SALE">
                <ProductGrid products={products} />
            </Section>
        </>
    );
}
