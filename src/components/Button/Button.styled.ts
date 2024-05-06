import styled from "styled-components";

export const StyledButton = styled.button<{isLink?: boolean  }>`
    background:  #ff204e;
    color: #fefbf6;
    padding:  .8rem;
    font-size: 1rem;
    border: none;
    border-radius: .3rem;
    line-height: .8rem;
    cursor: pointer;

    &:hover {
        background: #ff204eba;
    }
`