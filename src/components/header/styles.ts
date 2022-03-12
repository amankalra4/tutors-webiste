import { css } from "@emotion/css";

const headerContainer = css`
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f6f5f5;
`;

// const mobile = css`
//   display: none;
//   @media (max-width: 768px) {
//     display: block;
//     padding: 0px 1.5rem;
//   }
// `;

// const largeScreen = css`
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

const itemsContainer = css`
    display: flex;
    justify-content: space-evenly;
    li {
        list-style: none;
        margin-left: 20px;
        cursor: pointer;
        :hover {
            color: gray;
        }
    }
`;

export { headerContainer, itemsContainer };
