import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { logo } from "@src/modules/constants";
import Image from "next/image";
import Link from "next/link";
import NavBar from ".";
import { backdrop, subBackdrop } from "./style";

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <MenuIcon
        fontSize="large"
        style={{ color: "black", cursor: "pointer" }}
        onClick={handleToggle}
      />
      <Backdrop
        sx={{
          color: "black",
          backgroundColor: "white",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <div className={backdrop}>
          <div className={subBackdrop}>
            <CloseIcon
              fontSize="large"
              onClick={handleClose}
              style={{ cursor: "pointer" }}
            />
            <Link href="/" passHref>
              <Image src={logo} alt="home" width={80} height={80} />
            </Link>
          </div>
          <NavBar display onClick={handleToggle} />
        </div>
      </Backdrop>
    </div>
  );
}
