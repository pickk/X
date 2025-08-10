import { useRef, useEffect, useState } from "react";
import BackgroundVideo from "@/components/BackgroundVideo.tsx";

const StickyExample = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setActive(window.scrollY >= 1200);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={ref}
            style={{
                height: 2000,
                overflow: "auto",
                background: "#eee",
            }}
            onWheel={active ? undefined : (e) => e.preventDefault()}
        >
            {scrollY}
            <BackgroundVideo />
        </div>
    );
};

export default StickyExample;