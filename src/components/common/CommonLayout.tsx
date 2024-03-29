import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CommonLayoutWrapper, Container } from "./style";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import BestUser from "../BestUser/BestUser";
const ModalContext = createContext
    <
        {
            open: (data: { title: string, content: string }) => void;
            close: () => void
        }
    >({ open: () => null, close: () => null });

export const useModal = () => useContext(ModalContext);

const Modal = ({ content }: { content?: { content: string } }) => {
    const { close } = useModal();
    return (
        <Backdrop onClick={close}>
            <ModalContainer>
                <ModalCloseContainer>
                    <FontAwesomeIcon
                        size={'2x'}
                        onClick={close}
                        icon={faXmark}
                    />
                    <p>{content?.content}</p>
                </ModalCloseContainer>
            </ModalContainer>

        </Backdrop>
    )
};

const Backdrop = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:rgba(35, 46,55, .5); 
`;

const ModalContainer = styled.div`
    width:650px;
    height: 500px;
    background-color: black;
    border-radius:25px;
    > p {
        color:white;
    }
`;
const ModalCloseContainer = styled.div`
    display:flex;
    padding:30px;
    justify-content: space-between;
    align-content: center;
`

const ModalProvider = ({ children }: PropsWithChildren) => {
    const [postUploadOpen, setPostUploadOpen] = useState<boolean>(false);
    const open = (content: { title: string, content: string }) => {
        setContent(content);
        setPostUploadOpen(true);
    };
    const [commentOpen, setCommentOpen] = useState<boolean>(false);
    const [content, setContent] = useState<{ title: string, content: string }>();
    const close = () => setPostUploadOpen(false)

    return (
        <ModalContext.Provider value={{ open, close }}>
            {children}
            {postUploadOpen && <Modal content={content} />}
        </ModalContext.Provider>
    )
}
const CommonLayout = () => {
    return (
        <>
            <Sidebar />
            <CommonLayoutWrapper>
                <Container>
                    <Header />
                    {/* 우측 인기 회원들 */}
                    <BestUser />
                    <Outlet />
                </Container>
            </CommonLayoutWrapper>
        </>


    )
}
export default CommonLayout;