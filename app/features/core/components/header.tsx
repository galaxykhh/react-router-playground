export default function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-1 flex w-full justify-center">
            <div className="flex h-14 w-[600px] items-center justify-center border-b bg-white">
                <h1 className="text-md line-clamp-1 font-semibold">
                    React Router Playground (Store)
                </h1>
            </div>
        </header>
    );
}
