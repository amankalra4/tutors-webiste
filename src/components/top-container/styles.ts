import { css } from "@emotion/css";
import { backgroundHomeImage } from "@modules/constants/index";

const container = css`
    display: grid;
    grid-template-columns: 0.25fr 1fr;
    width: 70%;
    padding: 2rem 0;
    margin: 3rem auto;
    min-height: 260px;
    grid-column-gap: 200px;
    background-image: url(${backgroundHomeImage});
    background-position: -5% 11%;
    background-size: 532px 455px;
    background-repeat: no-repeat;
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
