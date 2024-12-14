import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Slider = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: inline-block;
    margin: 22px 0 42px;
`
const Pagination = styled.div`

span {
    display: inline-block;
    width: 7px;
    height: 7px;

    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.50);
    
    & + span {
        margin-left: 5px;
    }
    
    &.active {
        background-color: ${theme.colors.accent};
        width: 20px;
    }
}

`

export const S = {
    Pagination,
    Name,
    Text,
    Slide,
    Slider
}