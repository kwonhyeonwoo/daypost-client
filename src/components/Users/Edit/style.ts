import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const UserEditCard = styled.div`
    width:594px;
    height:648px;
    border-radius:15px;
    background-color:black;
    margin:0 auto;
    overflow-y: scroll;
    margin-top:100px;
`
export const EditCardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:11px;
`
export const EditTitle = styled.h3`
    font-size:17px;
    font-weight:bold;
`
export const SaveButton = styled.button`
    width:355px;
    height:44px;
    font-size:18px;
    cursor: pointer;
    background-color: ${colors.btnBackground};
    border-radius:15px;
    color:white;
    border:none;
    font-weight:bold;
    transition: all .2s ease-in-out;
    &:hover{
        transition: all .2s ease-in-out;
        background-color: rgba(29, 156, 239,0.8);
        color:rgba(255,255,255,0.8);
    }
`

export const BackImg = styled.div<{ selectedBackImage: string }>`
    width: 100%;
    position: relative;
    .undefined-avatar{
        width:100%;
        height: 234px;
        background-color:${(props) => props.selectedBackImage ? props.selectedBackImage : ''};
    }
    img{
        width:100%;
        height: 234px;
    }
    .userBackImg{
        width:99%;
        height:182px;
        border:1px solid red;
        
    }
    svg{
        position: absolute;
        top: 50%;       
        left: 50%;     
        transform: translate(-50%, -50%);  
        opacity: 0.6;
        cursor: pointer;
        &:hover{
            color: rgba(255,255,255,0.8);
        }
    }
   
`

export const UserEditForm = styled.form`
    margin-top:22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom:42px;
   
`
export const UserProfileImg = styled.div<{ selectedImage: string }>`
    position:relative;
    top:-63px;
    left:-203px;
    background-position:center center;
    background-size: cover;
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;
    .undefined-avatar{
        width:114px;
        height: 114px;
        border-radius:50%;
        background-color:${(props) => props.selectedImage ? props.selectedImage : 'gray'}
    }
    img{
        width:114px;
        height: 114px;
        border-radius:50%;
    }
    label{
        position: absolute;
    }
`
export const UserFile = styled.input`
    display: none;
`
export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const UserEditInput = styled.input`
    width: 85%;
    padding:20px;
    background-color: black;
    border-radius:10px;
    border:1px solid rgba(255,255,255,0.5);
    color:white;
    font-size:17px;
    margin-bottom:18px;
`