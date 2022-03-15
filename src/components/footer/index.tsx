import { Address, MobileNumber, EmailId } from "@modules/interface/cms-api-data";
import Link from "next/link";
import { LogoContainer } from "../logo";
import {
    footerContainer,
    addressDetail,
    addressContainer,
    dataContainer,
    footerCenterContainer,
    mobileContainer,
    emailContainer,
    quickLinksContainer,
    commonLinks
} from "./styles";

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
            <div className={footerCenterContainer}>
                <LogoContainer />
                <div className={dataContainer}>
                    <div className={addressContainer}>
                        <strong>{address.find((el) => el.type === "paragraph")?.text}</strong>
                        <p className={addressDetail}>{address.find((el) => el.type === "list-item")?.text}</p>
                    </div>
                    <div>
                        <div className={mobileContainer}>
                            <strong>{mobileNumber.find((el) => el.type === "paragraph")?.text}</strong>
                            <a href={`tel:${mobileNumberText}`} className={commonLinks}>
                                {mobileNumberText}
                            </a>
                        </div>
                        <div className={emailContainer}>
                            <b>{email.find((el) => el.type === "paragraph")?.text}</b>
                            <a href={`mailto:${emailText}`} className={commonLinks}>
                                {emailText}
                            </a>
                        </div>
                    </div>
                    <div className={quickLinksContainer}>
                        <strong> Quick Links</strong>
                        <Link href="/about-us" passHref>
                            <a className={commonLinks}>About Us</a>
                        </Link>
                        <Link href="/pricing" passHref>
                            <a className={commonLinks}>Pricing</a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
