import { headerContainer, listContainer } from "./styles";
import { navItems } from "./constants";
import { LogoContainer } from "../logo";

const Header = () => {
    return (
        <header className={headerContainer}>
            <LogoContainer />
            <div className={listContainer}>
                {navItems.map((el, index) => (
                    <li key={String(index + 1)}>{el}</li>
                ))}
            </div>
        </header>
    );
};

export default Header;
