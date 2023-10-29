import React, { useEffect, useState } from "react";
import { PostsSearchbar, SearchButton, SearchContainer, SearchForm, SearchInput } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { usePostSearchApi } from "../../../api/postApi";
import { PostData } from "../../../types/post";
import Search from "../../../pages/Search";

interface IData {
    description: string;

}
interface Props {
    setSearch: React.Dispatch<React.SetStateAction<PostData[]>>;
}

const Searchbar = ({ setSearch }: Props) => {
    const { register, handleSubmit } = useForm<IData>();
    const [searchData, setSearchData] = useState<PostData[]>([]);
    const { isErrorMsg, isLoading, fetchData } = usePostSearchApi();
    const handleSearch = async (searchData: IData) => {
        const posts = await fetchData(searchData);
        setSearch(posts);
    };
    return (
        <PostsSearchbar>
            <SearchForm onSubmit={handleSubmit(handleSearch)} >
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