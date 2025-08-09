import { useRef, useEffect, useState } from "react";
import BackgroundVideo from "@/components/BackgroundVideo.tsx";

const StickyExample = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [fixed, setFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            // 进入 fixed
            if (window.scrollY>=111 && window.scrollY<1200) {
                setFixed(true);
            }
            else {
                setFixed(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[window.scrollY]); // 只绑定一次，避免闭包问题！

    return (
            <div
                ref={ref}
                style={{
                    position: fixed ? "fixed" : "static",
                    left: 0,
                    right: 0,
                    padding: 32,
                    zIndex: 0,
                }}
            >
                {window.scrollY}
                <BackgroundVideo />
            </div>
    );
};

export default StickyExample;