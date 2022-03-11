import { css } from "@emotion/css";
import { logo } from "@src/modules/constants";
import Image from "next/image";

const heading = "Learn with Elite";

const logoContainer = css`
    display: flex;
    align-items: center;
    > h1 {
        font-size: 18px;
        margin-left: 10px;
    }
    img {
        border-radius: 50%;
    }
`;

export const LogoContainer = () => (
    <div className={logoContainer}>
        <Image src={logo} alt="home" width={80} height={80} />
        <h1>{heading}</h1>
    </div>
);
