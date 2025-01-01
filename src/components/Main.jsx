import Navbar from "./Navbar";

export default function Main({ children }) {
    return (
        <>
            <div className="bg-zinc-700 text-white min-h-screen">
                {children}
            </div>
        </>

    )
}