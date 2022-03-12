import { css } from "@emotion/css";

const backdrop = css`
  display: flex;
  flex-direction: column;
  width: 95%;
  position: absolute;
  top: 1rem;
`;

const subBackdrop = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  > span {
    cursor: pointer;
  }
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
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export { listContainer, backdrop, subBackdrop };
