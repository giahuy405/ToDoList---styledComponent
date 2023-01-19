import styled from "styled-components";


export const Link = ({ className, children, ...resprops }) => {
    <a className={className} {...resprops}>
        {children}
    </a>
}
 