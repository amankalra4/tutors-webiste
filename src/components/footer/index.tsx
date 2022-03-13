import { Address, MobileNumber, EmailId } from "@modules/interface/cms-api-data";
import Link from "next/link";
import { LogoContainer } from "../logo";
import { footerContainer, footer, addressDetail } from "./styles";

interface IFooterProps {
    address: Address[];
    mobileNumber: MobileNumber[];
    email: EmailId[];
}

const Footer = ({ address, email, mobileNumber }: IFooterProps) => {
    const mobileNumberText = mobileNumber.find((el) => el.type === "list-item")?.text;
    const emailText = email.find((el) => el.type === "list-item")?.text;
    return (
        <footer className={footerContainer}>
            <div className={footer}>
                <div style={{ marginBottom: "2rem" }}>
                    <LogoContainer />
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <p>
                            <b>{address.find((el) => el.type === "paragraph")?.text}</b>
                        </p>
                        <p className={addressDetail}>{address.find((el) => el.type === "list-item")?.text}</p>
                    </div>
                    <div>
                        <div>
                            <p>
                                <strong>{mobileNumber.find((el) => el.type === "paragraph")?.text}</strong>
                            </p>
                            <a href={`tel:${mobileNumberText}`} style={{ textDecoration: "none", color: "#323232" }}>
                                {mobileNumberText}
                            </a>
                        </div>
                        <div>
                            <p>
                                <b>{email.find((el) => el.type === "paragraph")?.text}</b>
                            </p>
                            <a href={`mailto:${emailText}`} style={{ textDecoration: "none", color: "#323232" }}>
                                {emailText}
                            </a>
                        </div>
                    </div>
                    <div>
                        <p>
                            <strong> Quick Links</strong>
                        </p>
                        <p style={{ cursor: "pointer" }}>
                            <Link href="/about-us" passHref>
                                <p>
                                    <u>About Us</u>
                                </p>
                            </Link>
                        </p>
                        <p style={{ cursor: "pointer" }}>
                            <Link href="/about-us" passHref>
                                <p>
                                    <u>Pricing</u>
                                </p>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
