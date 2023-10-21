import styled from "styled-components";
import { colors } from "../../styles/variables";


export const CommonLayoutWrapper = styled.div`
    max-width: 100%;
    height:100vh;
    padding:0px 18px 0px 410px;
`
export const Container = styled.div`
    max-width:650px;
    height: 100vh;
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
export const AuthErrorMsg = styled.span`
    padding-top:10px;
    padding-bottom:3px;
    font-weight: bold;
    color:red;
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
    border-bottom:1px solid rgba(46, 51, 54, 1); ;
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