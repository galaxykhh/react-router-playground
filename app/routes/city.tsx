import { Suspense } from "react";
import { Await, useLoaderData } from "react-router";
import type { Route } from "./+types/home";
import { Main } from "~/features/core/components";
import { sleep } from "~/features/core/utils/sleep";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "City" },
        { name: "city-city-city---city", content: "Welcome to React Router!" },
    ];
}

export async function loader({ params }: Route.LoaderArgs): Promise<{
    city: Promise<string>;
    description: string;
}> {
    const city = new Promise<string>((resolve) =>
        setTimeout(() => resolve("Hello"), 1000),
    );

    await sleep(300);

    const description = "one of popular cities in the world";

    return { city, description };
}

export default function City({ params }: Route.ComponentProps) {
    const { city, description } =
        useLoaderData<Awaited<ReturnType<typeof loader>>>();

    return (
        <Main>
            <Suspense fallback={<div>Loading City..</div>}>
                <Await resolve={city} errorElement={<div>City not found</div>}>
                    {(resolved) => <div>City: {JSON.stringify(resolved)}</div>}
                </Await>
            </Suspense>
            <div>Description: {description}</div>
        </Main>
    );
}
