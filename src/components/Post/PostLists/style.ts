import styled from "styled-components";
import { colors } from "../../../styles/variables";


// 높이, 넓이 등 감싸는 wrap
export const PostListsWrap = styled.div<{ paddingTop?: string }>`
    padding-top:${(props) => props.paddingTop};
`

// 게시물 내용 container 
export const PostContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    border-bottom:1px solid rgba(46, 51, 54, 1); ;
    padding:20px 10px;
`

// 프로필 사진 감싸는 박스
export const UsersInforWrap = styled.div`
    width: 100%;
`

// 유저 프로필 사진
export const UserProfile = styled.div`
    padding-left: 14px;
    display: flex;
`

// 닉네임, 게시물 날짜 
export const UsersNicknameWrap = styled.div`
    span{
        margin-left: 10px;
    }
    .users-profile__nickname{
        font-weight: bold;
        
    }

`

// Row box
export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
// 게시물 텍스트 내용 
export const PostsDescription = styled.div`
    margin:8px 14px;
    p{
        word-wrap: break-word; /* 긴 단어나 텍스트가 박스 바깥으로 넘치지 않게 처리 */
    }
`
// 게시물 사진
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