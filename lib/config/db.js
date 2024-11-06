import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://great-stack:asusrog262610@cluster0.5rdu7.mongodb.net/next-blogger');
    console.log("DB Connected");
    
}