import { useState } from "react";
import { usePostApi, usePostSearchApi } from "../api/postApi";
import Searchbar from "../components/Search/Searchbar/Searchbar";
import { BestHashtgasContainer, Container, HashTags } from "../components/Search/style";
import { PostData } from "../types/post";
import PostLists from "../components/Post/PostLists/PostLists";

const Search = () => {
    const [search, setSearch] = useState<PostData[]>([]);
    return (
        <>
            <Searchbar setSearch={setSearch} />
            <Container>
                <BestHashtgasContainer>
                    <HashTags>
                        <span className='hashtags'>롯데월드</span>
                        <span className='hashtags'>롯데월드</span>
                        <span className='hashtags'>롯데월드</span>
                        <span className='hashtags'>롯데월드</span>
                        <span className='hashtags'>롯데월드</span>
                        <span className='hashtags'>롯데월드</span>
                    </HashTags>
                </BestHashtgasContainer>
                {search && <PostLists posts={search} />}
            </Container>
        </>
    )
}
export default Search;

