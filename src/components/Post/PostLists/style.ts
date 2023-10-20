import styled from "styled-components";
import { colors } from "../../../styles/variables";


export const PostListsWrap = styled.div<{ paddingTop?: string }>`
    padding-top:${(props) => props.paddingTop};
`
export const PostContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    border-bottom:1px solid rgba(46, 51, 54, 1); ;
    padding:20px 10px;
`
export const UsersInforWrap = styled.div`
    width: 100%;
`
export const UserProfile = styled.div`
    padding-left: 14px;
    display: flex;
`
export const UsersNicknameWrap = styled.div`
    span{
        margin-left: 10px;
    }
    .users-profile__nickname{
        font-weight: bold;
        
    }

`
export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const PostsDescription = styled.div`
    margin:8px 14px;
    p{
        word-wrap: break-word; 
    }
`
export const PostsImage = styled.div`
    width:80%;
    height:339px;
    border-radius:15px;
    background-color:gray;
`

export const CommentWrap = styled.div`
    margin-top:12px;
    display: flex;
    padding-left:12px;
    .heart{
        width: 35px;
        margin:0px 22px 0px 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span{
            color:white;
        }
    }
    svg{
        cursor: pointer;
      
    }
`