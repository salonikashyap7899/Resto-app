
import { userSchema } from "@/app/lib/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const payload = await request.json();
    let success = false;
    mongoose.connect('mongodb+srv://isalonikashyap:sonakashyap@cluster0.fyjgfib.mongodb.net/RestoDB?retryWrites=true&w=majority&appName=Cluster0y', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => {
        console.log('MongoDB connected...');
      }).catch(err => {
        console.error('Connection error', err);
      });
    const result = await userSchema.findOne({ email: payload.email, password: payload.password });
    if (result) {
        success = true;
    }
    return NextResponse.json({ result, success })
}