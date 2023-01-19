import styled from "styled-components";

export const Table = styled.table`
    color: ${props=>props.theme.color};
    width: 100%;
    border-spacing: 2px;
    border-color: ${props=>props.theme.borderButton};
`


export const Td = styled.td`
   padding: 0.75rem;
   vertical-align: middle;
   border: 1px solid ${props=>props.theme.color};
`
export const Tr = styled.tr`
    display: table-row;
    border: 1px solid ${props=>props.theme.color};
`

export const Th = styled.th`
    padding: 0.75rem;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    vertical-align: middle;
    border-top: 1px solid ${props => props.theme.color};
    border-bottom: 1px solid ${props => props.theme.color};
`