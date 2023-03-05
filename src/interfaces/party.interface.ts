import { ObjectId } from "mongoose";

export interface Party {
    day: string;
    location: string;
    users: ObjectId;
}