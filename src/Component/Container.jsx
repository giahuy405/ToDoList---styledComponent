import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 700px;
    border-radius: 7px;
    margin: 0 auto;
    padding: 25px;
    margin-top: 20px;
    margin-bottom: 40px;
    border:  ${props=>props.borderButton};
    background-color: ${props=>props.theme.bgColor};
    color: ${props=>props.theme.color};
    box-shadow: 10px 10px ${props=>props.theme.color};
`
