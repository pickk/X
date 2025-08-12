import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@heroui/react";

import '../styles/acme.css';
import '../styles/Navbara.css';

export default function MyNavbara() {
    return (
        <div className="navbar-row">
            <Navbar className="navbar">
            <NavbarBrand>
                <p className="acme">ELDO'S</p>
            </NavbarBrand>
        </Navbar>
            <Navbar className="navbar2">
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Link className="feature-btn1" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link className="feature-now" aria-current="page" href="#">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="feature-btn2" href="#">
                            Integrations
                        </Link>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>

    );
}
