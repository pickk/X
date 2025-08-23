import {title} from "@/components/primitives.ts";

const TranslucentBox = () => {
    return (
        <div style={{
            background: "rgba(254,254,254,0.8)",
            color: "rgba(0,0,0,0.98)",
            display: "flex",
            justifyContent: "center",
            // alignItems: "flex-start", // 顶部对齐
            borderRadius: "16px",
            // fontSize: "24px",
            // position: "relative",
            // transform: "translateY(-35%)", // 向下移动 30%
        }}>
            <div className={title({ className: "relative z-[99999]"})} style={{fontSize: "65px", fontWeight: 650,
                                                                                fontFamily: "'Courier New', Courier, monospace", // 修正为 fontFamily
            }}>
                <div style={{fontSize: "30px"}}>&nbsp;</div>
                MAKE LIFE AN ADVENTURE{'\n'}
                <div style={{fontSize: "30px"}}>&nbsp;</div>
                <div style={{ color: "rgba(1,1,1,0.89)", fontSize: "33px"}}>Welcome to My Space</div>
                <div style={{fontSize: "30px"}}>&nbsp;</div></div>
        </div>
    );
};

export default TranslucentBox;
