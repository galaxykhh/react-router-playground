import { useLoaderData } from "react-router";
import type { Route } from "./+types/products";
import { getProducts, type ProductEntity } from "~/features/products/api";
import { ProductList, ProductGrid } from "~/features/products/components";
import { Main, Section } from "~/features/core/components";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Products" },
        { name: "products", content: "description" },
    ];
}

export function loader(args: Route.LoaderArgs) {
    return getProducts();
}

export default function Posts() {
    const products = useLoaderData<ProductEntity[]>();

    return (
        <Main>
            <Section label="LURE PRODUCTS">
                <ProductList products={products} />
            </Section>

            <Section label="BRAND NEW">
                <ProductList products={[...products].reverse()} />
            </Section>

            <Section label="TIME SALE">
                <ProductGrid products={products} />
            </Section>
        </Main>
    );
}
