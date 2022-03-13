import { itemsContainer, headerContainer } from "./styles";
import { LogoContainer } from "../logo";
// import NavBar from "../navbar";
// import SimpleBackdrop from "../navbar/backdrop";
// import { navItems } from "../navbar/constants";
import { MutableRefObject, useContext } from "react";
import { RefContext } from "@pages/index";
import Typography from "@mui/material/Typography";
import { headerItems, IRouting } from "../navbar/constants";

interface IHeaderProps {
    handleClick: (inp: MutableRefObject<HTMLInputElement> | undefined, isRefOrRoute: boolean | string) => void;
    showWhite: boolean;
    currentPage: IRouting;
}

const Header = ({ handleClick, showWhite, currentPage }: IHeaderProps) => {
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
                {headerItems
                    .find((el) => el.currentPage === currentPage)
                    ?.itemsToBeShown.map((el, index) => (
                        <Typography
                            variant="h6"
                            component="span"
                            color="text.secondary"
                            key={String(index + 1)}
                            style={{ padding: "0.9rem", color: `${showWhite ? "white" : "black"}` }}
                            onClick={() =>
                                handleClick!(
                                    el.refName ? refArray.find((el1) => el1.refName === el.refName)?.refValue : undefined,
                                    el.refName ? true : el.route!
                                )
                            }
                        >
                            {el.name}
                        </Typography>
                    ))}
            </div>
        </header>
    );
};

export default Header;
