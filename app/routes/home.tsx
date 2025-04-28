import { Link } from "react-router";
import type { Route } from "./+types/home";
import { Button } from "~/features/core/components/button";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-6">
            <h1 className="text-3xl">Home 🏠</h1>
            <Button asChild>
                <Link to="posts">Route to Posts 📒</Link>
            </Button>
        </div>
    );
}
