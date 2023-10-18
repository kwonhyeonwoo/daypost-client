import styled from "styled-components";
import { colors } from "../../styles/variables";


export const UploadCard = styled.div`
    max-width:588px;
    margin:0 auto;
    margin-top:50px;
    border-radius:15px;
    background-color: black;
    z-index:1;
    
`
export const ModalCancel = styled.div`
    width:20px;
    height:20px;
    margin-left:auto;
    padding-top:10px;
    padding-right:15px;
    cursor: pointer;
`

export const Col = styled.div`
    display: flex;
    margin-top:14px;
`
export const UserProfileImg = styled.div`
    margin-right:22px;
    padding-left:22px;
    .profile-has__img{
        width:50px;
        height:50px;
        border-radius: 50%;
    }
    .profile-no__img{
        width:50px;
        height:50px;
        border-radius: 50%;
        background-color: gray;
    }
`
export const UserPostUploadForm = styled.form`
`
export const TextArea = styled.textarea`
    width: 500px;
    height:200px;
    background-color: black;
    padding:14px;
    border:none;
    outline: none;
    resize:none;
    font-size:22px;
    color:white;
    ::placeholder{
        font-size:22px;
    }
    
`
export const ImageAndSubmitBtn = styled.div`
    width:90%;
    margin:0 auto;
    border-top:1px solid rgba(21, 24,25, 1);
    padding-top:11px;
    padding-bottom:18px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    .img-file__container{
        .post-image{
            display: none;
        }
    }
    svg{
        color:${colors.mainColor};
        &:hover{
            opacity: 0.7;
        }
    }
`
export const SelectedImgContainer = styled.div`
    padding-bottom:14px;
    text-align: center;
    position: relative;
    .post-img__cancel__btn{
        padding:4px 10px;
        position: absolute;
        top:10px;
        right:100px;
        border-radius: 70%;
        background-color: rgba(0,0,0,0.7);
        &:hover{
            padding:4px 10px;
            border-radius: 70%;
            background-color: rgba(0,0,0,0.2);
        }
    }
`
export const PostImage = styled.img`
    width: 422px;
    height:377px;
    background-size: cover;
    border-radius: 15px;
`
export const UploadButton = styled.button`
    padding:8px;
    border:none;
    border-radius:8px;
    color:white;
    font-weight:bold;
    background-color: ${(colors.btnBackground)};
    &:hover{
    }
`