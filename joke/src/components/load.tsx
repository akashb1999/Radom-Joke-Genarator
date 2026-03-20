import { useState, useEffect } from "react";

const Load = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            <p className="text-gray-500 animate-pulse">
            Fetching a fresh joke...
            </p>
        <h5 className = "text-center font-bold text-blue-950 m-6 text-2xl">Loading...</h5>
            {loading ? (
            <div className="flex items-center justify-center py-10">
                <div className="h-12 w-12 border-[5px] border-t-blue-500 border-r-red-500 border-b-yellow-400 border-l-green-500 rounded-full animate-spin"></div>
            </div>
            ) : (
                <p>Loaded!! but, Cheak your network!</p>
            )}
        </>
    );
};  

export { Load };