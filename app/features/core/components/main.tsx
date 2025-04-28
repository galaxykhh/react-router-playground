import type { PropsWithChildren } from "react";
import { cn } from "../utils/cn";

type MainProps = PropsWithChildren & {
    headerShown?: boolean;
    className?: string;
};

export default function Main({
    headerShown = true,
    className,
    children,
}: MainProps) {
    return (
        <main
            className={cn(
                [headerShown ? `h-without-header mt-14` : undefined],
                className,
            )}
        >
            {children}
        </main>
    );
}
