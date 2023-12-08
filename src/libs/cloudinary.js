import { v2 as cloudinary } from "cloudinary";
/* import multer from'multer';
import { CloudinaryStorage } from'multer-storage-cloudinary'; */

//import { API_KEY, API_SECRET, CLOUD_NAME } from "../config.js";

cloudinary.config({
  cloud_name: "dsfscypwv",
  api_key: "641645262887677",
  api_secret: "YrNIZDQzP2fHthHuyLMsRaQMncY",
});

/* const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'carpeta-de-almacenamiento-en-cloudinary',
    allowed_formats: ['jpg', 'png'],
    // Ajusta el límite de tamaño aquí (en bytes)
    maxFileSize: 10 * 1024 * 1024,
  },
});

const upload = multer({ storage: storage }); */

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
export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};

/* export const deleteImage = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId)
} */

/*carga de imagenes del banner personalizado y empresa */

 export const uploadBannerEmpresa = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
    //  folder: "AlfaSA",
    folder: "bannerempAlfaSA",
    allowed_formats: ['jpeg', 'jpg', 'png', 'mp4'],
    });
};


export const uploadBannerAlfa = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
  //  folder: "AlfaSA",
  folder: "bannerAlfaSA",
  allowed_formats: ['jpeg', 'jpg', 'png', 'mp4'],
  });
};

export const uploadEmpresaAlfa = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
  //  folder: "AlfaSA",
  folder: "empresaAlfaSA",
  allowed_formats: ['jpeg', 'jpg', 'png', 'mp4'],
  });
};