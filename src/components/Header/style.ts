import styled from "styled-components";
import { colors } from "../../styles/variables";

export const HeaderWrap = styled.header`
    width: 650px;
    height: 77px;
    position: fixed;
    box-sizing: border-box;
    border-bottom:1px solid ${colors.borderColor};
`
export const HeaderTitle = styled.div`
    padding:20px 0px 0px 30px;
    font-weight: bold;
    font-size:22px;
`