import React from "react";
import { HeaderTitle, HeaderWrap } from "./style";
import { useLocation, useParams } from "react-router-dom";
interface IProp {
    title: string;
}
const Header = () => {
    const location = useLocation();
    return (
        <HeaderWrap>
            <HeaderTitle>
                홈
            </HeaderTitle>
        </HeaderWrap>
    )
}
export default Header;