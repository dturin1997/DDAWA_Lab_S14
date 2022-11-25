import instance from "./config";

// CRUD

export const get = async (url) => {
    try {
        return await instance.get(url);
    }catch (error){
        return error;
    }
}

export const post = async (url, body) => {
    try{
        return await instancel.post(url, JSON.stringify(body));
    }catch (error) {
        return error;
    }
}
