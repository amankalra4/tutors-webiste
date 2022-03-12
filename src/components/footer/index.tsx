import {
  Address,
  MobileNumber,
  EmailId,
} from "@modules/interface/cms-api-data";
import React from "react";
import { LogoContainer } from "../logo";
import SubHeading from "../subHeading";
import { footerContainer, footer, addressDetail } from "./styles";

interface IFooterProps {
  address: Address[];
  mobileNumber: MobileNumber[];
  email: EmailId[];
}

const Footer = ({ address, email, mobileNumber }: IFooterProps) => {
  return (
    <footer className={footerContainer}>
      <div className={footer}>
        <div style={{ marginBottom: "2rem" }}>
          <LogoContainer />
          {/* <SubHeading title="Contact" /> */}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p>
              <b>{address.find((el) => el.type === "paragraph")?.text}</b>
            </p>
            <p className={addressDetail}>
              {address.find((el) => el.type === "list-item")?.text}
            </p>
          </div>
          <div>
            <div>
              <p>
                <b>
                  {mobileNumber.find((el) => el.type === "paragraph")?.text}
                </b>
              </p>
              <p>
                +91 {mobileNumber.find((el) => el.type === "list-item")?.text}
              </p>
            </div>
            <div>
              <p>
                <b>{email.find((el) => el.type === "paragraph")?.text}</b>
              </p>
              <p>{email.find((el) => el.type === "list-item")?.text}</p>
            </div>
          </div>
          <div>
            <p>
              <b> Quick Links</b>
            </p>
            <p style={{ cursor: "pointer" }}>
              <a>
                <u>About us</u>
              </a>
            </p>
            <p style={{ cursor: "pointer" }}>
              <a>
                <u>Pricing</u>
              </a>
            </p>
          </div>
          {/* <div>
            <SubHeading title="Quick Links" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <a>about us</a>
              <a>pricing</a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
