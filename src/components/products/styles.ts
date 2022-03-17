import { css } from "@emotion/css";

const container = css`
    padding: 40px;
`;

const cardContainer = css`
    display: flex;
    gap: 20px;
    justify-content: space-around;
    margin-top: 2rem;
    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
`;

const individualCard = css`
    box-shadow: 5px 0px 15px 3px grey !important;
    transition: all 0.4s ease !important;
    :hover {
        transform: translate3D(0, -1px, 0) scale(1.03) !important;
    }
`;

export { container, cardContainer, individualCard };
