import { useLoaderData } from "react-router";
import type { Route } from "./+types/product";

type Post = {
    id: string;
    title: string;
};

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: params.id,
                title: "Post Title",
            });
        }, 1000);
    });
}

export default function Post({ params }: Route.ComponentProps) {
    const post = useLoaderData<Post>();

    return (
        <div>
            <h1>Post</h1>
            <p>
                id: {post.id} title: {post.title}
            </p>
        </div>
    );
}
