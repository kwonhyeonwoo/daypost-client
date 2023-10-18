import styled from "styled-components";

export const CommentWrapper = styled.div`
    height: 240px;
    padding:0px 8px;
    margin-top:51px;
    overflow-y: auto;
`
export const CommentContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom:13px;
    span , div{
        margin-left:11px;
    }
    .user-nickName{
        font-weight: bold;
        font-size:18px;
        display: block;
    }
    .user-description{
       
    }
`
export const Row = styled.div`
    .user-avatar{
        width:60px;
        height:60px;
        border-radius:50%;
    }
    .user-nickName{
        font-weight:bold;
    }
`
export const Col = styled.div`
    margin-left:13px;
    line-height: 24px;;
`
export const UserProfile = styled.div`
    width:30px;
    height:30px;
    border-radius:50%;
    background-color: gray;
`
export const Description = styled.div`

`