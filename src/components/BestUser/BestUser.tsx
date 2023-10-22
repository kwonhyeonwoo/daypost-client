import { BestUserCard, BestUserContainer, SearchButton, Title, UserContainer, UserSearchForm, UserSearchInput } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useAllUserApi } from "../../api/userApi";
const BestUser = () => {
    const { data } = useAllUserApi();
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
                {
                    data?.map((item, idx) => (
                        <UserContainer>
                            <span className='best-user__name'>{item.nickName}</span>
                            <span className='best-user__status__msg'>{item.statusMsg}</span>
                        </UserContainer>
                    ))
                }
            </BestUserCard>
        </BestUserContainer>
    )
}
export default BestUser;