import { useLoaderData } from "react-router";
import type { Route } from "./+types/home";
import { getCartById, type CartEntity } from "~/features/carts/api";
import { getProductById, type ProductEntity } from "~/features/products/api";
import Main from "~/features/core/components/main";
import { Section } from "~/features/core/components";
import { ProductListRow } from "~/features/products/components";

type CartViewType = Omit<CartEntity, "products"> & {
    products: ProductEntity[];
};

export function meta({}: Route.MetaArgs) {
    return [
        { title: "My Carts" },
        { name: "cart description", content: "Welcome to React Router!" },
    ];
}

export async function loader({
    params,
}: Route.LoaderArgs): Promise<CartViewType> {
    const cart = await getCartById(Number(params.id));
    const products = await Promise.all(
        cart.products.map((product) => getProductById(product.productId)),
    );

    return {
        ...cart,
        products: cart.products.map((product) => {
            const target = products.find((p) => p.id === product.productId);

            if (!target) {
                throw new Error("Product not found");
            }

            return {
                ...target,
                price: target.price * product.quantity,
            };
        }),
    };
}

export default function Carts() {
    const cart = useLoaderData<CartViewType>();

    if (!cart.products.length) {
        return (
            <Main className="flex items-center justify-center">
                <p className="text-lg text-gray-700">No product in cart</p>
            </Main>
        );
    }

    return (
        <Main>
            <Section label="Cart">
                <ul className="flex flex-col">
                    {cart.products.map((product) => (
                        <ProductListRow key={product.id} product={product} />
                    ))}
                </ul>
            </Section>
        </Main>
    );
}
