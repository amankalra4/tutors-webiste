import { css } from "@emotion/css";

const upiText = css`
    text-align: center;
    margin: 1rem 0 3rem !important;
    @media (max-width: 767px) {
        padding: 20px;
        margin: 1rem 0;
    }
`;

const mobileDivider = css`
    @media (max-width: 767px) {
        width: 90%;
        padding: 2rem;
        > span {
            position: relative;
            top: 10px;
        }
    }
`;

const accountDetailsContainerMobile = css`
    @media (max-width: 767px) {
        text-align: center;
    }
`;

const logoContainer = css`
    display: flex;
    width: 30%;
    justify-content: space-between;
    margin: 1.5rem 0 0;
    @media (max-width: 920px) {
        width: 60%;
    }
    @media (max-width: 767px) {
        width: unset;
        justify-content: space-evenly;
    }
`;

export { mobileDivider, accountDetailsContainerMobile, logoContainer, upiText };
