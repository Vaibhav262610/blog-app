import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";

const { NextResponse } = require("next/server");


const LoadDB = async () => {
    await ConnectDB;
}

LoadDB()

export async function GET(request) {
    console.log("BLOG GET HIT");
    return NextResponse.json({msg:"API WORKING "})

}

export async function POST(request) {
    const formData = await request.formData();
    const timestamp = Date.now();


    const image = formData.get('Image');
    const imageByData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgURL = `/${timestamp}_${image.name}`;

    const blogData = {
        title :`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imgURL}`,
        authorImg:`${formData.get('authorImg')}`,
    }


    await BlogModel.create(blogData)
    console.log("Blog Saved");


    return NextResponse.json({success:true , msg :"Blog Added"})
};

