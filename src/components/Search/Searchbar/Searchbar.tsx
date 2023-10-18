import React from "react";
import { PostsSearchbar, SearchButton, SearchContainer, SearchForm, SearchInput } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { usePostSearchApi } from "../../../api/post/postSearchApi";

interface IData {
    description: string;

}
interface IProps {
    // searchData: string | [];
    // setSearchData: React.Dispatch<React.SetStateAction<string | []>>;

}

const Searchbar = ({ onSubmit }: any) => {
    const { register, handleSubmit } = useForm<IData>();
    const { isLoading, errorMsg, searchPostData, fetchData } = usePostSearchApi();
    onSubmit(searchPostData)
    const handlePostSearchSubmit = async (data: IData) => {
        onSubmit(searchPostData)
        // await fetchData(data)
    }
    console.log('searchbar', searchPostData)
    return (
        <PostsSearchbar>
            <SearchForm action='/post/search' onSubmit={handleSubmit(handlePostSearchSubmit)}>
                <SearchContainer>
                    <FontAwesomeIcon className='search-svg' icon={faMagnifyingGlass} />
                    <SearchInput
                        type='text'
                        placeholder='Search'
                        {...register('description')}
                    />
                </SearchContainer>
                <SearchButton />
            </SearchForm>
        </PostsSearchbar>
    )
}
export default Searchbar;