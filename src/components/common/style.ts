import styled from "styled-components";
import { colors } from "../../styles/variables";


export const CommonLayoutWrapper = styled.div`
    max-width: 100%;
    height:100vh;
    padding:0px 18px 0px 410px;
`
export const Container = styled.div`
    max-width:650px;
    border-left:1px solid ${colors.borderColor};
    border-right:1px solid ${colors.borderColor};
`
export const Modal = styled.div`
    width:100%;
    height:100%;
    left:0;
    right:0;
    top:0;
    position:fixed;
    z-index: 1;
    background-color:rgba(35, 46,55, .5);
`


export const SmProfileImg = styled.img`
    width: 47px;
    height: 47px;
    border-radius:50%;
`
export const SmNoProfileImg = styled(SmProfileImg).attrs({ as: 'div' })`
    background-color: gray;
`
export const PostListsWrap = styled.div`
    max-width: 650px;
    width: 100%; 
    border-top:1px solid rgba(21, 24,25, 1);
    border-left:1px solid rgba(21, 24,25, 1);
    border-right:1px solid rgba(21, 24,25, 1);
`
export const PostDetailContainer = styled.div`
    margin: 0 auto;
    border-bottom:1px solid rgba(46, 51, 54, 1);
    border-top:1px solid rgba(46, 51, 54, 1);
    padding:20px 10px;
`
export const BasicProfileImg = styled.img`
    width:50px;
    height:50px;
    border-radius: 50%;
`

export const ProfileNoImg = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: gray;
`

// modal style
export const ModalCard = styled.div`
    width:594px;
    height:648px;
    border-radius:15px;
    background-color:black;
    margin:0 auto;
    overflow-y: scroll;
    margin-top:100px;
`
export const ModalForm = styled.form`
    margin-top:22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom:42px;
    input[type='file']{
        display: none;
    }
`
export const ModalInput = styled.input`
    width: 85%;
    padding:20px;
    background-color: black;
    border-radius:10px;
    border:1px solid rgba(255,255,255,0.5);
    color:white;
    font-size:17px;
    margin-bottom:18px;     
`
export const ModalCloseBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:11px;
`
export const ModalSubmitBtn = styled.button`
    width:282px;
    height:44px;
    border:none;
    color:white;
    font-size:20px;
    font-weight: bold;
    border-radius:15px;
    background-color: ${colors.btnBackground};
`