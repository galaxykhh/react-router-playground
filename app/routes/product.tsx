import { Meta, useLoaderData } from "react-router";
import type { Route } from "./+types/product";
import { getProduct } from "~/features/products/api/get-products";
import { useEffect } from "react";

type Post = {
    id: string;
    title: string;
};

export function meta({ data }: Route.MetaArgs) {
    return [
        { title: data.title },
        { name: data.description, content: "Welcome to React Router!" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    if (params.id === undefined) {
        throw new Response("Not Found", { status: 404 });
    }

    return getProduct(Number(params.id));
}

export default function Post({ params }: Route.ComponentProps) {
    const post = useLoaderData<Post>();

    useEffect(() => {
        document.title = post.title;
    }, [post.title]);

    return (
        <>
            <div>
                <h1>Post</h1>
                <p>
                    id: {post.id} title: {post.title}
                </p>
            </div>
        </>
    );
}
