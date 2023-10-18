import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const DateAndNickNameWrap = styled.div`
    span{
        margin-left: 10px;
    }
    .users-profile__nickname{
        font-weight: bold;
        
    }
`
export const Description = styled.div`
    margin:8px 14px;
    p{
        word-wrap: break-word; /* 긴 단어나 텍스트가 박스 바깥으로 넘치지 않게 처리 */
    }
`
export const SvgWrap = styled.div`
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
export const PostsImg = styled.img`
    width: 80%;
    height:339px;
    border-radius:15px;
`