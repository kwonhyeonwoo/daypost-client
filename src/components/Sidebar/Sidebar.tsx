import React, { useEffect, useState } from "react";
import { ItemContainer, SideMenuItem, SideMenuItems, SideMenuNav, SidebarWrap } from "./style";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faUser, } from "@fortawesome/free-regular-svg-icons";
import PostUpload from "../PostUpload/PostUpload";
import { useModal } from "../common/CommonLayout";
import { useUserApi } from "../../api/userApi";

const Sidebar = () => {
    const { open } = useModal();
    const { data } = useUserApi();
    const [isPostUploadOpen, setIsPostUploadOpen] = useState(false);
    const onOpenPostUploadClick = () => setIsPostUploadOpen((prev) => !prev)
    const sidebarMenu = [
        {
            title: <Link to='/'>D</Link>,
            img: '',
        },
        {
            title: <Link to='/'>홈</Link>,
            img: <FontAwesomeIcon size={'lg'} icon={faHouse} />,
        },
        {
            title: <Link to='/search'>검색</Link>,
            img: <FontAwesomeIcon size={'lg'} icon={faMagnifyingGlass} />,
        },
        {
            title: <Link to='/'>베스트 10</Link>,
            img: <FontAwesomeIcon size={'lg'} icon={faThumbsUp} />,
        },
        // {
        //     title: '프로필',
        //     img: <FontAwesomeIcon size={'lg'} icon={faUser} />,
        //     url: '/users/:id/profile'
        // }
    ]
    const loggedOutMenu = [
        {
            title: <Link to='/users/login'>로그인</Link>,
            img: <FontAwesomeIcon size={'lg'} icon={faUser} />,
        },
        {
            title: <Link to='/users/account'>회원가입</Link>,
            img: <FontAwesomeIcon size={'lg'} icon={faUser} />,
        }
    ];
    const loggedInMenu = [
        {
            title: <Link to={`/users/${data?.user?._id}/profile`}>프로필</Link>,
            img: <FontAwesomeIcon size={'lg'} icon={faUser} />,
        },
        {
            title: <Link to=''>로그아웃</Link>,
            img: <FontAwesomeIcon size={'lg'} icon={faRightFromBracket} />,
        },
        {
            title: <Link to='' className='sidebar-post'>Post</Link>,
            onClick: onOpenPostUploadClick,
            img: '',
        },
    ]
    return (
        <>
            {
                isPostUploadOpen
                &&
                <PostUpload
                    isPostUploadOpen={isPostUploadOpen}
                    setIsPostUploadOpen={setIsPostUploadOpen}
                />
            }

            <SidebarWrap>
                <SideMenuNav>
                    <SideMenuItems>
                        {sidebarMenu.map((item, idx) => (
                            <ItemContainer key={idx}>
                                <SideMenuItem >
                                    {item.img}
                                    {item.title}
                                </SideMenuItem>
                            </ItemContainer>
                        ))}
                        {
                            data?.loggedIn
                                ?
                                loggedInMenu.map((item, idx) => (
                                    <ItemContainer key={idx} onClick={item.onClick}>
                                        <SideMenuItem >
                                            {item.img}
                                            {item.title}
                                        </SideMenuItem>
                                    </ItemContainer>
                                ))
                                :
                                loggedOutMenu.map((item, idx) => (
                                    <ItemContainer key={idx}>
                                        <SideMenuItem>
                                            {item.img}
                                            {item.title}
                                        </SideMenuItem>
                                    </ItemContainer>
                                ))
                        }
                    </SideMenuItems>
                </SideMenuNav>
            </SidebarWrap>
        </>

    )
}
export default Sidebar;