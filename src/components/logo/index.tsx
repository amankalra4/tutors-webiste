import { css } from "@emotion/css";
import { logo } from "@src/modules/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import { headerImageText } from "@modules/constants/index";

const logoContainer = css`
    display: flex;
    align-items: center;
    > h1 {
        font-size: 18px;
        margin-left: 10px;
    }
    img {
        border-radius: 50%;
        cursor: pointer;
    }
    @media (max-width: 767px) {
        justify-content: space-between;
    }
`;

export const LogoContainer = () => {
    const { push } = useRouter();
    return (
        <div className={logoContainer}>
            <Image src={logo} alt="home" width={80} height={80} onClick={() => push("/")} />
            <h1>{headerImageText}</h1>
        </div>
    );
};
