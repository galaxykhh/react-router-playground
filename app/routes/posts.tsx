import type { Route } from "./+types/posts";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Posts() {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-6">
            <h1>Posts</h1>
            <p>This is a posts page.</p>
        </div>
    );
}
