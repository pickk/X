import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
} from "@heroui/react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};
type ChevronDownProps = {
    fill?: string;
    size?: number;
    height?: number;
    width?: number;
    [key: string]: any;
};
export const ChevronDown = ({fill, size, height, width, ...props}: ChevronDownProps) => {
    return (
        <svg
            fill="none"
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    );
};


export function MyNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isCurrentFeaturesPage = location.pathname === "/features";
    // 图标同你的原代码
    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
    };

    return (
        <Navbar>
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>

            {/* 1. 大屏菜单 */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {/* ...原有内容不变 */}
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                Features
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu aria-label="ACME features" itemClasses={{ base: "gap-4" }}>
                        <DropdownItem key="autoscaling" description="ACME scales apps based on demand and load" >
                            Autoscaling
                        </DropdownItem>
                        <DropdownItem key="usage_metrics" description="Real-time metrics to debug issues">
                            Usage Metrics
                        </DropdownItem>
                        <DropdownItem key="production_ready" description="ACME runs on ACME, join us at web scale">
                            Production Ready
                        </DropdownItem>
                        <DropdownItem key="99_uptime" description="High availability and uptime guarantees">
                            +99% Uptime
                        </DropdownItem>
                        <DropdownItem key="supreme_support" description="Support team ready to respond">
                            +Supreme Support
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem isActive>
                    <Link aria-current="page" href="#">
                        Customers
                    </Link>
                </NavbarItem>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className={`p-0 bg-transparent data-[hover=true]:bg-transparent ${isCurrentFeaturesPage ? "text-primary" : ""}`}
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                Features
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu aria-label="ACME features" itemClasses={{ base: "gap-4" }}>
                        <DropdownItem key="autoscaling" description="ACME scales apps based on demand and load" >
                            Autoscaling
                        </DropdownItem>
                        <DropdownItem key="usage_metrics" description="Real-time metrics to debug issues">
                            Usage Metrics
                        </DropdownItem>
                        <DropdownItem key="production_ready" description="ACME runs on ACME, join us at web scale">
                            Production Ready
                        </DropdownItem>
                        <DropdownItem key="99_uptime" description="High availability and uptime guarantees">
                            +99% Uptime
                        </DropdownItem>
                        <DropdownItem key="supreme_support" description="Support team ready to respond">
                            +Supreme Support
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                Features
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu aria-label="ACME features" itemClasses={{ base: "gap-4" }}>
                        <DropdownItem key="autoscaling" description="ACME scales apps based on demand and load" >
                            Autoscaling
                        </DropdownItem>
                        <DropdownItem key="usage_metrics" description="Real-time metrics to debug issues">
                            Usage Metrics
                        </DropdownItem>
                        <DropdownItem key="production_ready" description="ACME runs on ACME, join us at web scale">
                            Production Ready
                        </DropdownItem>
                        <DropdownItem key="99_uptime" description="High availability and uptime guarantees">
                            +99% Uptime
                        </DropdownItem>
                        <DropdownItem key="supreme_support" description="Support team ready to respond">
                            +Supreme Support
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            {/* 2. 小屏菜单按钮 */}
            <div className="sm:hidden flex items-center">
                <Button
                    isIconOnly
                    variant="light"
                    onPress={() => setMenuOpen((v) => !v)}
                    aria-label="Open menu"
                >
                    {/* 汉堡图标 */}
                    <svg width="24" height="24" fill="none">
                        <path
                            d="M4 6h16M4 12h16M4 18h16"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </Button>
            </div>

            <NavbarContent justify="end" className="hidden sm:flex">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            {/* 3. 小屏菜单内容，点击汉堡按钮展开 */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md border-t z-50 sm:hidden">
                    <div className="flex flex-col gap-2 p-4">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                    endContent={icons.chevron}
                                    radius="sm"
                                    variant="light"
                                    fullWidth
                                >
                                    Features
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="ACME features" itemClasses={{ base: "gap-4" }}>
                                {/* DropdownItem 内容同上 */}
                                <DropdownItem key="autoscaling" description="ACME scales apps based on demand and load" >
                                    Autoscaling
                                </DropdownItem>
                                {/* ...其它 DropdownItem 同上 */}
                            </DropdownMenu>
                        </Dropdown>
                        <Link aria-current="page" href="#" className="w-full py-2 px-4 rounded hover:bg-gray-100">
                            Customers
                        </Link>
                        <Link color="foreground" href="#" className="w-full py-2 px-4 rounded hover:bg-gray-100">
                            Integrations
                        </Link>
                        <Link href="#" className="w-full py-2 px-4 rounded hover:bg-gray-100">
                            Login
                        </Link>
                        <Button as={Link} color="primary" href="#" variant="flat" fullWidth>
                            Sign Up
                        </Button>
                    </div>
                </div>
            )}
        </Navbar>
    );
}