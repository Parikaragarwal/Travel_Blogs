import config from "../config/config.js";
import { Client, Account, ID } from "appwrite";

export class Authservice {
    client= new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)

        this.account= new Account(this.client);
    }
    
    async createAccount({email,password,name})
    {
        try {
        const UserAccount= await this.account.create(ID.unique(),email,password,name);
        if(UserAccount)
        {
            return this.login({email,password})
        }
        else
        {
            console.log("No Account");
            return UserAccount
        }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async login({email,password})
    {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        }
        catch (error) {
            console.log("Login Error: ",error);
    }
    }

    async getCurrentUser()
    {
        try {
            const data= await this.account.get();
            if(data)
            {
                return data;
            }
            else{
                console.log("Bhaya login kar lo Pls !!");
            }
        } catch (error) {
            console.log("Account Fetch Error: ",error);
        }
        return null;
    }

    async logout()
    {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log(error);
        }
    }

};

const authservice=new Authservice();

export default authservice