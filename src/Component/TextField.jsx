import styled from "styled-components";
import React  from "react";

export const Input = styled.input`
    border: 1px solid ${props => props.theme.color};
    width: 100%;
    padding: 8px 12px;
    border-radius: 6px;
    transition: .4s;
    box-shadow: 4px 3px ${props => props.theme.color};
    &:focus{
        outline: none;
        box-shadow: 0 0 5px ${props=>props.theme.color};
    }
    
`

export const Label = styled.span`
    color: ${props => props.theme.color};
`

export const TextField = ({ label, ...props }) => {
    return (
        <span>
            <Label>
                {label}
            </Label>
            <br />
            <Input {...props}/>
        </span>
    )
}

