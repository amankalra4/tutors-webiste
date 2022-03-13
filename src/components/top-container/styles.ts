import { css } from "@emotion/css";
import { backgroundHomeImage } from "@modules/constants/index";

const container = css`
    display: grid;
    grid-template-columns: 0.25fr 1fr;
    width: 70%;
    padding: 3rem 0 2rem;
    margin: 3rem auto;
    min-height: 260px;
    grid-column-gap: 200px;
`;

const homePageImageClass = css`
    border-radius: 8px;
`;

const visionTextClass = css`
    h1 {
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export { container, homePageImageClass, visionTextClass };
