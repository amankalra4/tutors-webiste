import { headerContainer, mobile, largeScreen } from "./styles";
import { LogoContainer } from "../logo";
import NavBar from "../navbar";
import SimpleBackdrop from "../navbar/backdrop";

const Header = () => {
  return (
    <header className={headerContainer}>
      <LogoContainer />
      <div className={mobile}>
        <SimpleBackdrop />
      </div>
      <div className={largeScreen}>
        <NavBar display={false} onClick={() => {}} />
      </div>
    </header>
  );
};

export default Header;
