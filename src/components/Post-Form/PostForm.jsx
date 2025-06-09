import React,{useCallback,useEffect} from "react"
import { useForm } from "react-hook-form"
import {Button,Input,Select,RTE} from "../index"
import service from "../../Appwrite/service"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"


export default function PostForm({post})
{
    const navigate=useNavigate();
    const userData = useSelector(state => state.auth.userData)
    if(!userData)
        {
            console.log("Please log in");
        }
    if(userData)
    {
        console.log(userData);
    }
    const submit = async (data)=>{
        if (!userData) {
        console.error("User not logged in!");
        return;
    }
        let file=null;
        if(data.image && data.image[0])
        {
            file= await service.uploadFile(data.image[0]);
        }
        if(post)
        {
            if(file)
            {
                await service.deleteFile(post.featuredImage)
            }
            const updatedPost= await service.updatePost(post.$id,{
                ...data,
                featuredImage: file? file.$id : post.featuredImage
            })
            if(updatedPost)
            {
                navigate(`/post/${updatedPost.$id}`)
            }
        }
        else
        {
        if(file)
        {
        const newPost = await service.createPost({
            ...data,
            featuredImage: file? file.$id: undefined,
            UserId:userData.userData.$id,
        })
        if(newPost)
        {
            navigate(`/post/${newPost.$id}`)
        }
        }
        }
    }

    const {register,handleSubmit,watch,setValue,control,getValues}=useForm({
        defaultValues:{
            title: post?.title ||  "",
            slug: post?.slug || "",
            content: post?.content.slug || "",
            status: post?.status.slug || "",
        },
    })

    const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
        return value
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "_") // Replace anything not a-z or 0-9 with underscore
            .replace(/^_+|_+$/g, "");    // Trim leading/trailing underscores
    }
    return "";
}, []);

    useEffect(()=>{
        const subscription = watch((value,{name})=>{
            if(name==="title")
            {
            setValue('slug',slugTransform(value.title,{shouldValidate:true}))
            }
        })
        return ()=>{
            subscription.unsubscribe()
        }
    },[watch,slugTransform,setValue])

    return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className="md:w-2/3 w-full bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 space-y-4">
            <Input
                label="Title :"
                placeholder="Title"
                {...register("title", { required: true })}
            />
            <Input
                label="Slug :"
                placeholder="Slug"
                {...register("slug", { required: true })}
                onInput={(e) => {
                    setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                }}
                readOnly
            />
            <RTE
                label="Content :"
                name="content"
                control={control}
                defaultValue={getValues("content")}
            />
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 w-full bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 space-y-4">
            <Input
                label="Featured Image :"
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !post })}
            />
            {post && (
                <div className="w-full">
                    <img
                        src={service.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-lg object-cover max-h-48 w-full"
                    />
                </div>
            )}
            <Select
                options={["active", "inactive"]}
                label="Status"
                {...register("status", { required: true })}
            />
            <Button
                type="submit"
                bgColor={post ? "bg-green-500" : undefined}
                className="w-full"
            >
                {post ? "Update" : "Submit"}
            </Button>
        </div>
    </form>
);
}