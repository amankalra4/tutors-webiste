import { css } from "@emotion/css";

const headerContainer = css`
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f6f5f5;
`;

const listContainer = css`
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

export { headerContainer, listContainer };
