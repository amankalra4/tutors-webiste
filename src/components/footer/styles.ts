import { css } from "@emotion/css";

const footerContainer = css`
    background: #f6f5f5;
    display: flex;
    justify-content: center;
`;

const footer = css`
    max-width: 70rem;
    width: 70rem;
    padding: 2.8rem 0px 2.2rem;
    @media (max-width: 480px) {
        padding: 4.8rem 1rem 14.2rem;
    }
    @media (max-width: 768px) {
        max-width: 45rem;
        width: 45rem;
        padding: 4.8rem 1rem 2.2rem;
    }
`;

const addressDetail = css`
    width: 206px;
    line-height: 1.5rem;
    @media (max-width: 768px) {
        width: 200px;
    }
`;

export { footerContainer, footer, addressDetail };
