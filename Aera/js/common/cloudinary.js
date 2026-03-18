const cloudName = "dunqbmfkd";
const uploadPreset = "Aera_chat_upload";

//using cloudinary we get the upload widget object and that is stored
// in mywidget, window is a global object, where it could be accessed
// anywhere in th app. using window.mywidget, the object is global
window.myWidget = cloudinary.createUploadWidget(
    {
        cloudName: cloudName,
        uploadPreset:uploadPreset,
        sources:["local","camera"],
        multiple:false,
        cropping:false,
        folder:"chatImages",
        maxFileSize:10000000,//10MB
    },
    async (error,result)=>{
        if(!error && result.event === "success"){
            console.log("Image uploaded",result.info.secure_url);
            window.dispatchEvent(new CustomEvent("cloudinary-upload",{
                detail:result.info.secure_url
            }));
        }
    }
);
//customEvent - a way to create your own events in JS
//"cloudinary-upload" name of your custom event
//detail - a property where you pass additional data, here we give the URL
//dispatch - used to trigger an event
//so we are dispatching an event on the window object, so any script
//listening on window for "cloudinary-upload" will get notified
// this helps to decouple our code