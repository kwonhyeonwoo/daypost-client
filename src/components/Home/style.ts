import styled from "styled-components";
import { colors } from "../../styles/variables";


export const Wrapper = styled.div<{ paddingTop: string }>`
    padding-top:${(props) => props.paddingTop};
`

export const Container = styled.div`
   max-width: 650px;
    width: 100%; /* 전체 너비를 차지하게 합니다 */
    height:100vh;
    border-left: 1px solid ${(colors.borderColor)};
    border-right: 1px solid ${(colors.borderColor)};
    overflow-x: hidden;
    -ms-overflow-style: none;
`