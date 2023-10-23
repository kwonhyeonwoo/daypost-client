import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const PostimageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export const PostImage = styled.img`
    width: 78%;
    height:228px;
    border-radius:15px;
`
export const PostDescription = styled.textarea`
    width: 85%;
    height: 200px;
    background-color: black;
    border-radius:15px;
    resize:none;
    margin:30px 0px;
`
export const PostEditLabel = styled.label`
    width:85%;
    float:left;
    svg{
        color:${colors.mainColor};
        margin-bottom:11px;
    }
`