import { v2 as cloudinary } from "cloudinary";
//import { API_KEY, API_SECRET, CLOUD_NAME } from "../config.js";

cloudinary.config({
  cloud_name: "dsfscypwv",
  api_key: "641645262887677",
  api_secret: "YrNIZDQzP2fHthHuyLMsRaQMncY",
});

const corsOptions = {
  origin: "*", 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
  //  folder: "AlfaSA",
  folder: "pruebaAlfaSA",
  });
};


export const uploadProspecto = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
  //  folder: "AlfaSA",
  folder: "prospectoAlfaSA",
  });

};
  export const uploadControl = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
    //  folder: "AlfaSA",
    folder: "controlAlfaSA",
    });
};
/*export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};*/
