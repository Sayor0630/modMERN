import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "./catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redis }from "../utils/redis";

// authenticated user
export const isAuthenticated = CatchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    const access_token = req.cookies.access_token;

    if(!access_token){
        return res.status(400).json({
            success: false,
            message: "Please login to access this resource"
        });
    }

    const decoded = jwt.verify(access_token,process.env.ACCESS_TOKEN as string) as JwtPayload;

    if(!decoded){
        return next(new ErrorHandler("Invalid access token",400));
    }

    const user = await redis.get(decoded.id);

    if (!user) {
        return next(new ErrorHandler("User not found", 400));
    }

    req.user = JSON.parse(user);

    next();

}); 