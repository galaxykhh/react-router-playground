import { useLoaderData } from "react-router";
import type { Route } from "./+types/home";
import { getCarts, type Cart } from "~/features/carts/api/get-carts";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Carts" },
        { name: "cart description", content: "Welcome to React Router!" },
    ];
}

export async function loader(args: Route.LoaderArgs) {
    return getCarts();
}

export default function Carts() {
    const carts = useLoaderData();

    if (carts.length !== 0) {
        return (
            <div className="h-without-header flex items-center justify-center">
                <p className="text-lg text-gray-700">No product</p>
            </div>
        );
    }

    return (
        <ul>
            <li>ddwqdqwd</li>
            <li>ddwqdqwd</li>
            <li>ddwqdqwd</li>
            <li>ddwqdqwd</li>
            <li>ddwqdqwd</li>
            <li>ddwqdqwd</li>
            <li>ddwqdqwd</li>
        </ul>
    );
}
