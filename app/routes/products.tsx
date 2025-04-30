import { useLoaderData } from "react-router";
import type { Route } from "./+types/products";
import { getProducts, type ProductEntity } from "~/features/products/api";
import { ProductList, ProductGrid } from "~/features/products/components";
import { Main, Section } from "~/features/core/components";
import { useCallback, useMemo } from "react";

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

    const sections = useMemo(
        () => [
            {
                label: "LURE PRODUCTS",
                products: products,
            },
            {
                label: "BRAND NEW",
                products: [...products].reverse(),
            },
            {
                label: "TIME SALE",
                products: products,
            },
        ],
        [],
    );

    const renderProducts = useCallback((label: string) => {
        if (label === "LURE PRODUCTS") {
            return <ProductList products={products} />;
        }

        if (label === "BRAND NEW") {
            return <ProductList products={[...products].reverse()} />;
        }

        return <ProductGrid products={products} />;
    }, []);

    return (
        <Main>
            {sections.map((section) => (
                <Section key={section.label} label={section.label}>
                    {renderProducts(section.label)}
                </Section>
            ))}
        </Main>
    );
}
