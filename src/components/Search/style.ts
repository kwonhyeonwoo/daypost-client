import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 650px;
    height:100vh;
    border-left: 1px solid rgba(46, 51, 54, 1);
    border-right: 1px solid rgba(46, 51, 54, 1);
    overflow-x: hidden;;
    -ms-overflow-style: none;
    border:1px solid rgba(46, 51, 54, 1);
    padding-top:121px;
`
export const BestHashtgasContainer = styled.div`
    border-bottom: 1px solid rgba(46, 51, 54, 1);
    padding:22px 53px;
    
`
export const HashTags = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 33px;
    .hashtags{
        font-size:20px;
        font-weight: bold;
    }
`