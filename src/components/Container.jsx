export default function Container({ children, className="" }) {
    return (
        <>
            <div className={`w-full max-w-[800px] mx-auto my-0 ${className}`}>
                {children}
            </div>
        </>
    )


}