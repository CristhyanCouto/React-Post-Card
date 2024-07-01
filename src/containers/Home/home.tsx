import React from "react";

import "./home.css";

import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

interface DataFetchingState {
    posts: { id: number; title: string; body: string, cover: string | undefined }[];
    allPosts: { id: number; title: string; body: string, cover: string | undefined }[];
    page: number;
    postsPerPage: number;
    searchValue: string;
}

class Home extends React.Component<object, DataFetchingState> {
    constructor(props: object) {
        super(props);
        this.state = {
            posts: [],
            allPosts: [],
            page: 0,
            postsPerPage: 6,
            searchValue: '',
        };
    }

    async componentDidMount(){
        await this.loadPosts();
    }

    loadPosts = async () => {
        const { page, postsPerPage } = this.state;
        const postsAndPhotos = await loadPosts();
        this.setState({ 
            posts: postsAndPhotos.slice(page, postsPerPage),
            allPosts: postsAndPhotos,
        });
    }

    loadMorePosts = () => {
        const {
            page,
            postsPerPage,
            allPosts,
            posts,
        } = this.state;

        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts);

        this.setState({ posts, page: nextPage });
    }

    handleChange = (e: { target: { value: string; }; }) =>{
        const {value} = e.target;
        this.setState({ searchValue: value });
    }

    render() {
        const { page, postsPerPage, posts, allPosts,searchValue } = this.state;
        const noMorePosts = page + postsPerPage >= allPosts.length;

        const filteredPosts = searchValue ? allPosts.filter(post => {
            return post.title.toLowerCase().includes(searchValue.toLowerCase());
        }) : posts;

        return (
            <section className="container">
                <div className="search-container">
                    {!!searchValue && (
                        <h1>Search Value: {searchValue}</h1>
                    )}

                    <TextInput 
                    searchValue={searchValue} 
                    handleChange={this.handleChange}
                    />
                </div>

                {filteredPosts.length > 0 
                && (<Posts posts={filteredPosts} />)}

                {filteredPosts.length === 0 
                && (<p>Não existem posts com o termo pesquisado</p>)}

                <div className="button-container">
                    {!searchValue && (
                        <Button 
                        onClick={this.loadMorePosts} 
                        text="Load More Posts"
                        disabled={noMorePosts}
                        />
                    )}
                </div>              
            </section>
        );
    }
}

export default Home;