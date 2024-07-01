import { PostCard } from "../PostCard";
import "./styles.css";

interface PostsProps {
    posts: {
        cover: string | undefined;
        title: string | undefined;
        body: string | undefined;
        id: number;
    }[];
}

export const Posts = (props: PostsProps) => {
    const { posts } = props;

    return (
        <div className="posts">
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
    );
}