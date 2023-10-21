import { Link } from "react-router-dom";
import styled from "styled-components";
export const AuthWrapper = styled.div<{ paddingTop?: string }>`
    padding-top:
        ${(props) => props.paddingTop ? props.paddingTop : '30px'};
`
export const AuthCard = styled.div`
    max-width: 660px;
    background-color: white;
    border-radius:15px;
    margin:0 auto;
`
export const ModalCancel = styled.div`
    padding-top:11px;
    padding-right:30px;
    margin-left:auto;
    width:20px;
    height:20px;
   svg{
    color:black;
    &:hover{
        color:rgba(0,0,0,0.5);
    }
   }
`
export const AuthTitle = styled.h3<{ paddingTop: string }>`
    color:black;
    padding-top:${(props) => props.paddingTop};
    text-align:center;
    font-size:25px;
    font-weight:bold;
`
export const AuthForm = styled.form<{ marginTop: string }>`
    display: flex;
    width:100%;
    flex-direction: column;
    align-items: center;
    margin-top:${(props) => props.marginTop};
    input[type='file']{
        display: none;
    };
`
export const AuthInput = styled.input`
    width:333px;
    height:48px;
    margin-bottom:10px;
    padding-left:11px;
    border:none;
    color:black;
    border:1px solid rgba(0,0,0,0.2);
`
export const AuthErrorMsg = styled.span`
    font-weight: bold;
    color:red;
`
export const AuthButton = styled.button`
    width:182px;
    height:55px;
    font-size:17px;
    font-weight:bold;
    border:none;
    background-color: black;
    color:white;
`
export const AuthLink = styled(Link)`
    text-align: center;
    margin-top:11px;
    padding-bottom:10px;
    color:rgba(0,0,0,0.4);
    font-weight: bold;
    text-decoration: underline;
`