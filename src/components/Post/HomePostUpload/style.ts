import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const UploadWrapper = styled.div`
    max-width: 650px;
    width: 100%;
    padding-top:155px;
    border-bottom:1px solid ${(colors.borderColor)};
    border-left:1px solid ${(colors.borderColor)};
    border-right:1px solid ${(colors.borderColor)};
`
export const UploadRowContainer = styled.div`
    display: flex;
    padding-left:20px;
    padding-bottom:30px;
`
export const UploadForm = styled.form`
    width: 80%;
    margin-left:22px;
    .img{
        display: none;
    }
`
export const UploadInput = styled.textarea`
    /* padding-top:10px; */
    width: 80%;
    font-size:18px;
    color:white;
    resize: none;
    border: none;
    outline: none;
    background-color: black;
`
export const FileContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top:10px;
`
export const UploadImgLabel = styled.label`
    width: 100%;
    right:99px;
    svg{
        cursor: pointer;
        color:${(colors.mainColor)};
    }
`
export const UploadBtn = styled.button`
    width: 82px;
    height:35px;
    background-color: ${(colors.btnBackground)};
    color:white;
    font-weight: 600;
    border: none;
    float: right;
    border-radius: 10px;
`