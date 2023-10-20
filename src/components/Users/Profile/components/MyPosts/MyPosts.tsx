import { PostDetailContainer, PostListsWrap } from "../../../../common/style";
import { UsersInforWrap, UserProfile } from "../../../../Post/PostLists/style";
import PostsInfo from "../../../../Post/PostLists/PostsInfo/PostsInfo";
import { useParams } from "react-router-dom";

interface IPostListsProps {
    data: IApiResponse;

}
interface IAuthor {
    email: string;
    nickName: string;
    userId: string;
    userName: string;
    avatar: string;
    _id: string;
}

interface IPostsData {
    like: number;
    image: string;
    description: string;
    hashtags: string[];
    title: string;
    datetime: string;
    nickName: string;
    createAt: string;
    author: IAuthor;
    user: string;
    _id: string;
}

interface IApiResponse {
    posts: IPostsData[];
}
const MyPosts = ({ data }: IPostListsProps) => {
    const params = useParams();
    const formatDate = (dateStr: string): string => {
        const dateObj = new Date(dateStr);
        return `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
    }
    const authorId = data?.posts.filter(post => post.author._id === params.id);
    return (
        <PostListsWrap>
            {authorId &&
                authorId.map((item) => (
                    <PostDetailContainer>
                        <UsersInforWrap>
                            <UserProfile>
                                {
                                    item.author.avatar
                                        ?
                                        <img className='profile-has__img' src={`http://localhost:4000/${authorId[0].author.avatar}`} alt='profile-img' />
                                        :
                                        <div className='users-profile__img' />
                                }
                            </UserProfile>
                            <PostsInfo
                                _id={item.author._id}
                                id={item._id}
                                nickName={item.author.nickName}
                                createAt={formatDate(item.createAt)}
                                description={item.description}
                                postsImg={item.image}
                                avatar={item.author.avatar}
                            />
                        </UsersInforWrap>
                    </PostDetailContainer>
                ))

            }
        </PostListsWrap >
    )
}
export default MyPosts;