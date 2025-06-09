import config from "../config/config";
import { ID,Client,Query,Databases,Storage } from "appwrite";


export class Service {
    client=new Client();
    databases;
    storage;
    constructor()
    {
    this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage=new Storage(this.client);
        
    }

    async createPost({title,content,featuredImage,slug,statusActive,UserId})
    {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
            slug,
        {
            title,
            slug,
            content,
            featuredImage,
            statusActive,
            UserId,
        });
        } catch (error) {
            console.log("Data creation Error: ", error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,statusActive})
    {
        try{
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    statusActive,
                }
            )
        }
        catch(error)
        {
            console.log("Update Error: ",error);
        }
    }

    async deletePost(slug)
    {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Deletion Error: ",error);
            return false;
        }
    }

    async getPost(slug)
    {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Fetching document Error: ",error);
            return false;
        }
    }

    async getPosts()
    {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                [
                    Query.equal("statusActive",true)
                ]
            )
        } catch (error) {
            console.log("Getting Documents Errors: ",error);
            return false;
        }
    }

    async uploadFile(file)
    {
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("File Upload Error: ",error);
            return false;
        }
    }

    async deleteFile(fileId)
    {
        try {
            await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("File deletion Error: ",error);
        }
    }

    getfilePreview(fileId) {
    return this.storage.getFileView(config.appwriteBucketId, fileId);
}


    dowloadFile(fileId)
    {
        return this.storage.getFileDownload(
            config.appwriteBucketId,
            fileId
        );
    }

};

const service = new Service();

export default service;