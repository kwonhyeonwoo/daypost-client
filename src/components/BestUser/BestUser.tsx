import React from "react";
import { BestUserCard, BestUserContainer, SearchButton, Title, UserContainer, UserSearchForm, UserSearchInput } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const BestUser = () => {
    return (
        <BestUserContainer>
            <UserSearchForm>
                <UserSearchInput />
                <SearchButton>
                    <FontAwesomeIcon className='search-svg' icon={faMagnifyingGlass} />

                </SearchButton>
            </UserSearchForm>
            <BestUserCard>
                <Title>Best Friends</Title>
                <UserContainer>
                    <span className='best-user__name'>권현우</span>
                    <span className='best-user__status__msg'>상태매세지</span>
                </UserContainer>
                <UserContainer>
                    <span className='best-user__name'>권현우</span>
                    <span className='best-user__status__msg'>상태매세지</span>
                </UserContainer>
                <UserContainer>
                    <span className='best-user__name'>권현우</span>
                    <span className='best-user__status__msg'>상태매세지</span>
                </UserContainer>
                <UserContainer>
                    <span className='best-user__name'>권현우</span>
                    <span className='best-user__status__msg'>상태매세지</span>
                </UserContainer>
            </BestUserCard>
        </BestUserContainer>
    )
}
export default BestUser;