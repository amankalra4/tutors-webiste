import { css } from "@emotion/css";

const heading = css`
    font-size: 2em !important;
    font-family: Arial, Helvetica, sans-serif;
    @media (max-width: 767px) {
        margin-bottom: 2rem !important;
    }
`;

const container = css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    width: fit-content;
    padding: 3rem 40px;
    min-height: 260px;
    grid-column-gap: 200px;
    @media (max-width: 767px) {
        justify-items: center;
        margin: 0;
        padding: 1rem 2rem;
    }
`;

const homePageImageClass = css`
    border-radius: 8px;
    object-fit: cover;
`;

const visionTextClass = css`
    @media (max-width: 740px) {
        text-align: center;
    }
`;

export { container, homePageImageClass, visionTextClass, heading };
