import React from "react";
import { Col, PostDescriptionWrap, Row } from "./style";

interface IProps {
    nickName: string;
    avatar: string;
    description?: string;
}

const PostDescription = ({ nickName, avatar, description }: IProps) => {
    return (
        <PostDescriptionWrap>
            <Row>
                <img
                    className='user-avatar'
                    alt='profileimg'
                    src={`http://localhost:4000/${avatar}`}
                />
                <Col>
                    <span className='user-nickName'>{nickName}</span>
                    <div>{description}</div>
                </Col>
            </Row>
        </PostDescriptionWrap>
    )
}

export default PostDescription;