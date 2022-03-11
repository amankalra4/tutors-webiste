import { css } from "@emotion/css";

const headerContainer = css`
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const logoContainer = css`
    display: flex;
    align-items: center;
    > h1 {
        font-size: 18px;
        margin-left: 10px;
    }
`;

export { headerContainer, listContainer, logoContainer };
