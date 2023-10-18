import styled from "styled-components";

export const BestUserContainer = styled.div`
    padding-left:690px;
    position: relative;
    box-sizing: border-box;
`
export const BestUserCard = styled.div`
    width:277px;
    top:110px;
    position: absolute;
    border-radius: 15px;
    padding:14px 22px;
    background-color: rgba(21, 24,29, 1);
   
`
export const Title = styled.h2`
    font-size:25px;
    font-weight: bold;
`
export const UserContainer = styled.div`
    margin-top:22px;
    width: 100%;
   
    &:hover{
        background-color: rgba(255,255,255,0.1);
    }
    span{
        display: block;
        line-height: 29px;;
    }
    .best-user__name{
        font-size:19px;
        font-weight: bold;
    }
    .best-user__status__msg{
        font-size:14px;
        font-weight: 500;
        color:rgba(113, 118,122, 1);
    }
`
export const UserSearchForm = styled.form`
    width: 297px;
    position: absolute;
    top:53px;
`
export const UserSearchInput = styled.input`
    width: 100%;
    height: 19px;
    padding:10px;
    color:white;
    border-radius: 15px;
    border: none;
    background-color:rgba(255,255,255,0.1) ;
`
export const SearchButton = styled.button`
    background-color: rgba(21, 24,29, 1);
    position: absolute;
    top:10px;
    right: 0;
    border: none;
    svg{
        color:white;
    }
`