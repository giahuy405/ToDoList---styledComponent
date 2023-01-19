import styled from "styled-components";

export const Dropdown = styled.select`
    position: fixed;
    top: 20px;
    right: 30px;
    width: 150px;
    padding: 8px;
    font-weight: 700;
    transition: all .3s;
    font-size: 15px;
    border-radius: 8px;
    cursor: pointer;
    color: ${props=>props.theme.color};
    background-color: ${props => props.theme.bgColor};
    &:hover{
        background-color: ${props=>props.theme.hoverBgColor};
        color:  ${props=>props.theme.hoverColor};
    }
`