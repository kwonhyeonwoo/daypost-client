import styled from "styled-components";
import { colors } from "../../styles/variables";


export const Wrapper = styled.div<{ paddingTop: string }>`
    padding-top:${(props) => props.paddingTop};
`
export const Container = styled.div`
   max-width: 650px;
    width: 100%; 
    height:100vh;
    overflow-x: hidden;
    -ms-overflow-style: none;
`