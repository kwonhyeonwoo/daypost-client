import Searchbar from "../Search/Searchbar/Searchbar";
import { HeaderTitle, HeaderWrap } from "./style";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    return (
        <HeaderWrap>
            <HeaderTitle>

            </HeaderTitle>
        </HeaderWrap>
    )
}
export default Header;