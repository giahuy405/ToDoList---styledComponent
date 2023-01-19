import styled from "styled-components";

export const Button = styled.button`
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    border: ${props => props.theme.borderButton};
    transition: .3s;
    padding: 8px;
    border-radius: 6px;
    box-shadow: 4px 3px ${props => props.theme.color};
    &:hover{
        color: ${props => props.theme.hoverColor};
        background-color: ${props => props.theme.hoverBgColor};
        box-shadow: 0 0 ${props => props.theme.color};
    }
`