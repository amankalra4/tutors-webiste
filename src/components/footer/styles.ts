import { css } from "@emotion/css";

const footerContainer = css`
    background: #f6f5f5;
    padding: 40px;
`;

const addressDetail = css`
    line-height: 1.5rem;
`;

const addressContainer = css`
    max-width: 40ch;
    @media (max-width: 767px) {
        width: 100%;
    }
`;

const dataContainer = css`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    padding: 20px 0;
    gap: 40px;
    align-items: flex-start;
    @media (max-width: 767px) {
        flex-direction: column;
        gap: 20px;
        margin: 20px 0 0;
    }
`;

const footerCenterContainer = css`
    width: 80%;
    margin: 0 auto;
    @media (max-width: 767px) {
        width: unset;
    }
`;

const mobileContainer = css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
`;

const emailContainer = css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const quickLinksContainer = css`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const commonLinks = css`
    text-decoration: none;
    color: #323232;
`;

export {
    footerContainer,
    addressDetail,
    addressContainer,
    dataContainer,
    footerCenterContainer,
    mobileContainer,
    emailContainer,
    quickLinksContainer,
    commonLinks
};
