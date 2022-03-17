import { css } from "@emotion/css";

const containerHeading = css`
    @media (max-width: 767px) {
        text-align: center;
    }
`;

const container = css`
    padding: 40px;
    background: #fff5ef;
    position: relative;
    > * {
        margin: 2rem 0;
    }
    @media (max-width: 767px) {
        padding: 1rem 2rem;
    }
`;

const contentContainer = css`
    /* position: absolute; */
    /* :nth-child(odd) {
        right: 0;
        top: 300px;
    }
    :nth-child(even) {
        left: 0;
    } */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    @media (max-width: 767px) {
        align-items: flex-start;
    }
`;

const contentHeading = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* max-width: 50%; */
    @media (max-width: 767px) {
        max-width: fit-content;
    }
`;

const seekAndBuildImages = css`
    border-radius: 16px;
    @media (max-width: 767px) {
        border-radius: 16px;
    }
`;

export { seekAndBuildImages, container, contentContainer, contentHeading, containerHeading };
