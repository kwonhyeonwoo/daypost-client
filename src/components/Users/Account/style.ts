import styled from "styled-components";

export const FileLabel = styled.label`
    color:black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:11px;
    position: relative;
    .user-profile__img, .profile-no__img{
        width:70px;
        height:70px;
        border-radius: 50%;
    }
    .profile-no__img{
        background-color: gray;
    }
    .file-button{
       position:absolute;
       color:white;
       transition: all 0.2s ease-in-out;
       &:hover{
            transition: all 0.2s ease-in-out;
            opacity: 0.5;
       }
    }
`


