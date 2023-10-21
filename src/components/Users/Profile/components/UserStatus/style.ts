import styled from "styled-components";

export const UserProfileWrap = styled.div`
    display:flex;
    justify-content: space-between;
    padding:0px 20px 0px 20px;
`
export const UserBackImg = styled.div`
    .backImg-has__image{
        width: 100%;
        height:300px;
    }
    .backImg-no__image{
        width:100%;
        height:300px;
        background-color: gray;
    }
`
export const UsreProfileImg = styled.div`
    position: relative;
    border-radius: 50%;
    padding:4px;
    background-color: black;
    top:-60px;
    
    .profile-has__image{
        width:122px;
        height:122px;
        border-radius: 50%;
    }
    
    .profile-no__image{
        width: 122px;
        height:122px;
        border-radius:50%;
        background-color: gray;
    }

`
export const UserInfoEdit = styled.div`
    width:82px;
    height:24px;
    cursor: pointer;
    border:1px solid rgba(42, 51, 58, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-size:17px;
    padding:10px;
    margin-top:11px;
    transition: all .2s ease-in-out;
    &:hover{
        transition: all .2s ease-in-out;
        background-color: rgba(255,255,255,0.3);
    }
`
export const UserStatusWrap = styled.div`
    margin-bottom:30px;
    padding:0px 20px 0px 20px;
    font-size:20px;
`
export const UserNickname = styled.div`
    font-size:22px;
    font-weight: bold;
    margin-bottom:22px;
`
export const UserStatusMsg = styled.div`
    font-size:17px;
    font-weight:500;    
    margin-bottom:14px;
`
export const LocationStatus = styled.div`
    opacity: 0.4;
    font-size:15px;
`
export const WebsiteStatus = styled(LocationStatus)`
    margin-top:11px;
`