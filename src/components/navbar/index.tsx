import { listContainer } from "./style";
// import { navItems } from "./constants";

type navBarType = {
    display: boolean;
    onClick: () => void;
};

const NavBar = ({ display, onClick }: navBarType) => {
    return (
        <div className={listContainer}>
            {/* {navItems.map((el, index) => (
        <li key={String(index + 1)} style={{ paddingBottom: "2rem" }}>
          {el}
        </li>
      ))} */}
        </div>
    );
};

export default NavBar;
