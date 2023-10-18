import styled from "styled-components";
import { colors } from "../../styles/variables";

export const SidebarWrap = styled.div`
    padding:10px 40px 0px 218px;
    position:fixed;
`

export const SideMenuNav = styled.nav`
    
`
export const SideMenuItems = styled.ul``

export const SideMenuItem = styled.li`
    width:141px;
    font-size:23px;
    font-weight: bold;
    margin:0px 0px 50px 11px;
    padding:10px;
    border-radius:15px;
    svg{
        margin-right:20px;
    }
    .sidebar-post{
        display: block;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 35px;
        border-radius: 15px;
        background-color: ${(colors.mainColor)};
    }
    &:hover{
        transition:all 0.2s ease-in-out;
        background-color: rgba(255,255,255,0.1);
    }
`
export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
`
