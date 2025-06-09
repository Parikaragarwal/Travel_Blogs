import React,{useState,useEffect} from 'react';
import Container from '../container/container';
import { PostForm } from '../components';
import service from '../Appwrite/service';
import { useNavigate,useParams } from 'react-router-dom';

const Editpost = () => {
    const [post,setPost]=useState(null)
    const {slug}=useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        service.getPost(slug).then((post)=>{
        if(slug)
        {
            setPost(post)
        }
        else{
            navigate('/')
        }
        })
    },[slug,navigate])
return post ? (
    <div className="py-10 px-4 bg-[#fdfaf6] dark:bg-[#0a0f1a] min-h-screen">
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
) : (
    <div className="flex items-center justify-center min-h-screen bg-[#f2f6ff] dark:bg-[#0c162c] px-4">
        <div className="bg-white dark:bg-[#101c3d] text-[#ff5e3a] dark:text-[#ffb087] p-6 rounded-2xl shadow-xl text-center space-y-4 max-w-md w-full">
            <h2 className="text-2xl font-bold">😢 Post Not Found</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
                Looks like this post decided to take a vacation too.
            </p>
            <button
                onClick={() => navigate('/')}
                className="bg-[#ff5e3a] text-white dark:bg-[#ff7f50] px-4 py-2 rounded-lg w-full hover:bg-orange-600 transition"
            >
                Back to Home
            </button>
        </div>
    </div>
);

};

export default Editpost;