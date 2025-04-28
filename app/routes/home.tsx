import { Link } from "react-router";
import type { Route } from "./+types/home";
import { Button } from "~/features/core/components/button";
import Main from "~/features/core/components/main";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return (
        <Main
            headerShown
            className="flex flex-col items-center justify-center gap-6"
        >
            <h1 className="text-3xl">Home 🏠</h1>
            <Button asChild>
                <Link to="products">Route to Products 📒</Link>
            </Button>
            <Button asChild>
                <Link to="carts">Route to Carts 🛒</Link>
            </Button>
        </Main>
    );
}
