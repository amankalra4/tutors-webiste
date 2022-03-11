import { headerContainer, listContainer, logoContainer } from "./styles";
import { heading, navItems } from "./constants";
import { logo } from "@src/modules/constants";
import Image from "next/image";

const Header = () => {
    return (
        <header className={headerContainer}>
            <div className={logoContainer}>
                <Image src={logo} alt="home" width={80} height={80} />
                <h1>{heading}</h1>
            </div>
            <div className={listContainer}>
                {navItems.map((el, index) => <li key={String(index + 1)}>{el}</li>)}
            </div>
        </header>
    );
};

export default Header;
