import { Client, Databases, ID, Storage} from "appwrite";

class Database {

    client = new Client()
        .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
        .setProject(import.meta.env.VITE_APPWRITE_PROJECTID);

    databases = new Databases(this.client);

    storage = new Storage(this.client);

    async createEvent(eventToCreate){
        try{
            const response = await this.databases.createDocument(
                import.meta.env.VITE_APPWRITE_DATABASEID,
                import.meta.env.VITE_APPWRITE_EVENTS_COLLECTIONID,
                ID.unique(),
                eventToCreate
            );
            return response.documents;
        }catch(e){
            console.log("Error occured while creating a new event : ", e);
        }
    }

    async getAllEvents(){
        try{
            const response = await this.databases.listDocuments(
                String(import.meta.env.VITE_APPWRITE_DATABASEID),
                String(import.meta.env.VITE_APPWRITE_EVENTS_COLLECTIONID),
            )
            return response.documents;
        }catch(e){
            console.log("Error occured while fetching all events data : ", e);
        }
    }

    async updateEvent(id, data){
        try { 
            const res = await this.databases.updateDocument(
                String(import.meta.env.VITE_APPWRITE_DATABASEID),
                String(import.meta.env.VITE_APPWRITE_EVENTS_COLLECTIONID),
                id,
                data
            )
            return res
        }catch(error){
            console.log("Error occured while updating event : ", error);
        }
    }

    async deleteEvent(id){
        try { 
            const res = await this.databases.deleteDocument(
                String(import.meta.env.VITE_APPWRITE_DATABASEID),
                String(import.meta.env.VITE_APPWRITE_EVENTS_COLLECTIONID),
                id
            )
            return res
        }catch(error){
            console.log("Error occured while deleting event : ", e);
        }
    }

    async uploadFile(file){
        try{
            const uploadedFile = await this.storage.createFile(
                import.meta.env.VITE_APPWRITE_BUCKETID,
                ID.unique(),
                file
            )
            return uploadedFile;
        }catch(e){
            console.log("Error occured while uploading file : ", e);
        }
    }

    async deleteFile(id){
        try{
            const res = await this.storage.deleteFile(
                import.meta.env.VITE_APPWRITE_BUCKETID,
                id
            )
            return red;
        }catch(e){
            console.log("Error occured while uploading file : ", e);
        }
    }
}

const DBService = new Database();

export { DBService };