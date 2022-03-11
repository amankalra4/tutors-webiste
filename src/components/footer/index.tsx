import { Address, MobileNumber, EmailId } from "@modules/interface/cms-api-data";
import React from "react";
import { LogoContainer } from "../logo";
import SubHeading from "../subHeading";
import { footerContainer } from "./styles";

interface IFooterProps {
    address: Address[];
    mobileNumber: MobileNumber[];
    email: EmailId[];
}

const Footer = ({ address, email, mobileNumber }: IFooterProps) => {
    return (
        <footer className={footerContainer}>
            <LogoContainer />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <SubHeading title="Contact" />
                    <div style={{ display: "flex" }}>
                        <div>
                            <p>{address.find((el) => el.type === "paragraph")?.text}</p>
                            <p>{address.find((el) => el.type === "list-item")?.text}</p>
                        </div>
                        <div>
                            <p>{mobileNumber.find((el) => el.type === "paragraph")?.text}</p>
                            <p>{mobileNumber.find((el) => el.type === "list-item")?.text}</p>
                        </div>
                        <div>
                            <p>{email.find((el) => el.type === "paragraph")?.text}</p>
                            <p>{email.find((el) => el.type === "list-item")?.text}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <SubHeading title="Quick Links" />
                    <div>
                        <a>about us</a>
                        <a>pricing</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
