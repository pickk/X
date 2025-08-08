import { useRef, useEffect, useState } from "react";

const StickyExample = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [fixed, setFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            // 进入 fixed
            if (window.scrollY>=13148 && window.scrollY<15100) {
                setFixed(true);
            }
            else {
                setFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]); // 只绑定一次，避免闭包问题！

    return (
            <div
                ref={ref}
                style={{
                    marginTop: 10000, // 或 paddingTop: 200
                    position: fixed ? "fixed" : "static",
                    left: 0,
                    right: 0,
                    top: 0,
                    background: "orange",
                    padding: 32,
                    zIndex: 100,

                }}
            >
                refrertgrtegetr
                refrertgrtegetr
                refrertgrtegetrrefrertgrtegetr
                refrertgrtegetr
                refrertgrtegetr
                refrertgrtegetrrefrertgrtegetr
                refrertgrtegetr


            </div>
    );
};

export default StickyExample;