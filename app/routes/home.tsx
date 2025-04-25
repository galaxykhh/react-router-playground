import { useNavigation } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    const navigation = useNavigation();

    return (
        <div className="flex h-screen items-center justify-center">
            <button
                className="cursor-pointer rounded bg-amber-700 p-2"
                onClick={() => {}}
            >
                Route to Posts
            </button>
        </div>
    );
}
