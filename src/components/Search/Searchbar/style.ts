import styled from "styled-components";

export const PostsSearchbar = styled.div`
    width:650px;
    height:55px;
    position:fixed;
    background-color:rgba(0,0,0,0.4);
    border:1px solid rgba(46, 51, 54, 1);
    z-index:1;
`
export const SearchForm = styled.form`
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
`
export const SearchContainer = styled.div`
    width: 100%;
    .search-svg{
        position:relative;
        left:33px;
    }

`
export const SearchInput = styled.input`
    width:80%;
    border:1px solid rgba(255,255,255,0.7);
    background-color: black;
    border-radius: 15px;
    height:33px;
    color:white;
    font-size:17px;
    padding-left:45px;
`
export const SearchButton = styled.button`
    display: none;
`