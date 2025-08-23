import React, { useRef, useEffect, useState } from "react";
import BackgroundVideo from "@/components/BackgroundVideo.tsx";
import ShowArticles from "@/components/ShowArticles.tsx";
const STICKY_END = 1200;    // 结束吸顶的位置
const HEIGHT = 200;         // 组件自身高度（可用ref自动测量）

const StickyExample = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [mode, setMode] = useState<"fixed" | "absolute" | "static">("static");

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            if (y < STICKY_END - HEIGHT) {
                setMode("fixed");
            } else {
                setMode("absolute");
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // 初始化
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    let style: React.CSSProperties = {
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 10,
        padding: 32,
    };

    if (mode === "fixed") {
        style.position = "fixed";
        style.top = 0;
    } else if (mode === "absolute") {
        style.position = "absolute";
        style.top = STICKY_END - HEIGHT;
    } else {
        style.position = "static";
    }

    // 外层占位，防止fixed脱流页面跳动
    return (
        <div style={{ position: "relative", height: HEIGHT }}>
            <div ref={ref} style={style}>
                <BackgroundVideo />
                <div className="articles"><ShowArticles /></div>
            </div>

        </div>
    );
};

export default StickyExample;
