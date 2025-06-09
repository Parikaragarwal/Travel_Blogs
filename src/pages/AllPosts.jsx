import React, { useState, useEffect } from 'react';
import Container from '../container/container';
import { PostCard, Header } from '../components';
import service from '../Appwrite/service';
import { Input } from '../components'; // assuming Input is styled

const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        service.getPosts()
            .then((postsData) => {
                if (postsData && postsData.documents) {
                    setPosts(postsData.documents);
                    setFilteredPosts(postsData.documents);
                }
            })
            .catch((err) => {
                console.error('Error fetching posts:', err);
            });
    }, []);
console.log("Posts Array: ", posts)
    useEffect(() => {
        const query = searchQuery.trim().toLowerCase();
        if (query === '') {
            setFilteredPosts(posts);
        } else {
            const filtered = posts.filter(post =>
                post.title.toLowerCase().includes(query)
            );
            setFilteredPosts(filtered);
        }
    }, [searchQuery, posts]);

    return (
        <div className="pt-2 min-h-screen bg-orange-200 px-4 sm:px-6 lg:px-12">
            <Header />
            <Container>
                <div className="my-6 flex justify-center">
                    <Input
                        placeholder="Search posts by title..."
                        className="w-full max-w-xl mx-auto"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <PostCard
        key={post.$id}
        $id={post.$id}
        title={post.title}
        featuredImage={post.featuredImage}
    />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-500 font-semibold">
                            No matching posts found.
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default AllPosts;
