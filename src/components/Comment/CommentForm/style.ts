import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const FormContainer = styled.div`
    padding-bottom:30px;
`
export const CommentSubmit = styled.form`
    display: flex;
    justify-content: center;
`
export const CommentInput = styled.input`
    width: 85%;
    padding:10px 20px;
    border:1px solid ${(colors.borderColor)};
    background-color: black; 
    border-radius:15px; 
    color: white;
`
export const CommentBtn = styled.button`
    border:none;
    position: absolute;
    right:75px;
    top:10px;
    background-color: black;
    color:white;
    cursor: pointer;
`