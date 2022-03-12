import { headerContainer, itemsContainer } from "./styles";
import { LogoContainer } from "../logo";
// import NavBar from "../navbar";
// import SimpleBackdrop from "../navbar/backdrop";
import { navItems } from "../navbar/constants";
import { MutableRefObject, useContext } from "react";
import { RefContext } from "@pages/index";

const Header = ({
    handleClick
}: {
    handleClick: (inp: MutableRefObject<HTMLInputElement> | undefined, isRefOrRoute: boolean | string) => void;
}) => {
    const refArray = useContext(RefContext);
    return (
        <header className={headerContainer}>
            <LogoContainer />
            {/* <div className={mobile}>
                <SimpleBackdrop />
            </div> */}
            {/* <div className={largeScreen}>
                <NavBar display={false} onClick={() => {}} />
            </div> */}
            <div className={itemsContainer}>
                {navItems.map((el, index) => (
                    <li
                        key={String(index + 1)}
                        style={{ paddingBottom: "2rem" }}
                        onClick={() =>
                            handleClick(
                                el.refName ? refArray.find((el1) => el1.refName === el.refName)?.refValue : undefined,
                                el.refName ? true : el.route!
                            )
                        }
                    >
                        {el.name}
                    </li>
                ))}
            </div>
        </header>
    );
};

export default Header;
