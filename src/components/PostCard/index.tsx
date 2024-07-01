import './styles.css';

interface PostCardProps {
    post: {
        cover: string | undefined;
        title: string | undefined;
        body: string | undefined;
        id: number;
    };
}

export const PostCard = (props: PostCardProps) => {
    const {post} = props;
    return (
        <div className="post">
            <img src={post.cover} alt={post.title}></img>
            <div className="post-content">
                <h1>{post.title}</h1>
                <h2>{post.id}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    )
}