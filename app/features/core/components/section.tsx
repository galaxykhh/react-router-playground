import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren & {
    label: string;
};

export default function Section(props: SectionProps) {
    return (
        <section>
            <h1 className="px-6 py-4 text-xl font-bold">{props.label}</h1>
            {props.children}
        </section>
    );
}
