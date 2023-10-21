import { HeaderTitle, HeaderWrap } from "./style";
import { useLocation } from "react-router-dom";

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