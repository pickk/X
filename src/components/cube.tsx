import {title} from "@/components/primitives.ts";

const TranslucentBox = () => {
    return (
        <div style={{
            width: "600px",
            height: "300px",
            background: "rgba(254,254,254,0.5)",  // 半透明黑色
            color: "#000000",                     // 文字颜色
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",              // 圆角，可选
            fontSize: "24px"
        }}>
            <div className={title({ className: "relative z-[99999]"})} style={{fontSize: "65px"}}>MAKE LIFE AN ADVENTURE{'\n'}
                <div style={{fontSize: "30px"}}>&nbsp;</div>
                <div style={{ color: "rgba(1,1,1,0.89)", fontSize: "33px"}}>Welcome to My Space</div></div>
        </div>
    );
};

export default TranslucentBox;