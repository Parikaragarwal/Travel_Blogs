import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../Appwrite/service";
import { Button } from "../components";
import Container from "../container/container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
                setLoading(false);
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    if (loading) {
        return (
            <div className="py-20 text-center text-blue-500 font-semibold text-xl animate-pulse">
                Loading your adventure...
            </div>
        );
    }

    if (!post) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6">
                <div className="text-3xl font-bold text-orange-500">🚧 Whoops! Lost on this trail?</div>
                <p className="text-blue-600 text-lg">Looks like the post you’re looking for doesn’t exist or has been removed.</p>
                <Link to="/">
                    <Button bgColor="bg-orange-500 hover:bg-blue-500" className="text-white text-lg px-6 py-2 rounded-full transition">Take Me Home</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="py-8">
            <Container>
                <div className="mb-4">
                    <Link to="/all-posts">
                        <Button bgColor="bg-orange-400 hover:bg-blue-400" className="rounded-full text-white px-4 py-2">
                            ← Explore More
                        </Button>
                    </Link>
                </div>

                <motion.div
                    className="w-full flex justify-center mb-4 relative border rounded-xl p-2 shadow-md"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={service.getfilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl object-cover max-h-[400px] w-full"
                    />
                    <div className="absolute bottom-2 right-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full opacity-80">
                        By: {post.userId?post.userId:"Unknown"}
                    </div>
                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">Edit</Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>Delete</Button>
                        </div>
                    )}
                </motion.div>

                <div className="w-full mb-6">
                    <h1 className="text-3xl font-bold text-orange-600 mb-2 p-2 leading-snug">
                        {post.title}
                    </h1>
                </div>

                <motion.div
                    className="text-lg leading-relaxed text-blue-900 p-4 space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {parse(post.content)}
                </motion.div>
            </Container>
        </div>
    );
}
