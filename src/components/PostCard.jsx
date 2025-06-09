import service from "../Appwrite/service";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
    console.log("Featured Image",featuredImage)
    return (
        <Link to={`/post/${$id}`} className="block hover:scale-[1.02] transition-transform duration-200 ease-out">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100 dark:border-orange-300">
                <img
            src={service.getfilePreview(featuredImage) || "https://muvemm.com/wp-content/uploads/2022/01/Travel-Trends-For-2022-Blog-Image-060122-1.jpg"}
            alt={title}
            className="w-full h-52 object-cover"
/>

                <div className="p-4 bg-orange-50">
                    <h2 className="text-xl font-semibold text-orange-800">{title}</h2>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;
