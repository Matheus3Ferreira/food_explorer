import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background: ${({theme}) => theme.COLORS. BACKGROUND_800};

padding: 0;

> div {
    width: 100%;
    height: 114px;
    background-color: ${({theme}) => theme.COLORS. BACKGROUND_600};

    margin: 0;

    display: flex;
    align-items: center;

    >svg {
        margin-left: 28px;
        margin-right: 16px;
    }

    > h1 {
        font-size: 21px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    
}
`;