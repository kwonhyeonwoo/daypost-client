import styled from "styled-components";
import { colors } from "../../../../styles/variables";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const DateAndNickNameWrap = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    span{
        margin-left: 10px;
        display: block;
    }
    .users-profile__nickname{
        font-weight: bold;
    }
    .post-menu__ellipsis{
        position: absolute;
        top:-4px;
        right:30px;
        cursor: pointer;
        &:hover{
            color:${colors.mainColor};
        }
    }
`

export const ActionContainer = styled.div`
    width: 100%;
    max-width: 199px;
    padding:10px 10px 10px 10px;
    position: absolute;
    top:-4px;
    right:28px;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px;
    background-color: black;
    border-radius: 15px;
    color:white;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    .close-btn{
        float: right;
    }
    .delete-container{
        margin-top:25px;
        color:red;
    }
   .container{
        display: flex;
        justify-content: space-between;
        margin-bottom:11px;
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
    margin-top:9px;
`