import React, { useEffect, useState } from "react";
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

import { ItemContainer, SideMenuItem, SideMenuItems, SideMenuNav, SidebarWrap } from "./style";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faUser, } from "@fortawesome/free-regular-svg-icons";
import PostUpload from "../PostUpload/PostUpload";
import { useModal } from "../common/CommonLayout";
import { useAllUserApi, useUserApi } from "../../api/userApi";
import { usePostApi } from "../../api/postApi";
type MenuItem = {
    url: string;
    title: string;
    icon: string | IconDefinition;
};
const Sidebar = () => {
    const { open } = useModal();
    const { data } = useUserApi();
    const [isPostUploadOpen, setIsPostUploadOpen] = useState(false);
    const onOpenPostUploadClick = () => setIsPostUploadOpen((prev) => !prev);
    const sidebarMenu: MenuItem[] = [
        {
            url: '/',
            title: 'D',
            icon: '',
        },
        {
            url: '/',
            title: '홈',
            icon: faHouse,
        },
        {
            url: '/search',
            title: '검색',
            icon: faMagnifyingGlass,
        },
        {
            url: '/',
            title: '베스트10',
            icon: faThumbsUp
        },
    ]
    const loggedOutMenu: MenuItem[] = [
        {
            url: '/users/login',
            title: '로그인',
            icon: faUser
        },
        {
            url: '/users/account',
            title: '회원가입',
            icon: faUser
        }
    ];
    const loggedInMenu: MenuItem[] = [
        {
            url: `/users/${data?.user?._id}/profile`,
            title: '프로필',
            icon: faUser,
        },
        {
            url: '',
            title: '로그아웃',
            icon: faRightFromBracket,
        },
        {
            url: '',
            title: 'Post',
            icon: '',
        },
    ]
    return (
        <>
            {
                isPostUploadOpen
                &&
                <PostUpload
                // isPostUploadOpen={isPostUploadOpen}
                // setIsPostUploadOpen={setIsPostUploadOpen}
                />
            }

            <SidebarWrap>
                <SideMenuNav>
                    <SideMenuItems>
                        {sidebarMenu.map((item, idx) => (
                            <ItemContainer key={idx}>
                                <SideMenuItem >
                                    {typeof item.icon !== 'string' && <FontAwesomeIcon icon={item.icon} />}
                                    <Link to={item.url}>{item.title}</Link>
                                </SideMenuItem>
                            </ItemContainer>
                        ))}
                        {
                            data?.loggedIn
                                ?
                                loggedInMenu.map((item, idx) => (
                                    <ItemContainer key={idx}>
                                        <SideMenuItem >
                                            {typeof item.icon !== 'string' && <FontAwesomeIcon icon={item.icon} />}
                                            <Link to={item.url}>{item.title}</Link>
                                        </SideMenuItem>
                                    </ItemContainer>
                                ))
                                :
                                loggedOutMenu.map((item, idx) => (
                                    <ItemContainer key={idx}>
                                        <SideMenuItem>
                                            {typeof item.icon !== 'string' && <FontAwesomeIcon icon={item.icon} />}
                                            <Link to={item.url}>{item.title}</Link>
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
