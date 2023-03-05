import { Schema, model } from "mongoose";
import { Party } from "../interfaces/party.interface";

const PartySchema = new Schema<Party>(
    {
        day:{
            type: String,
            required: true,
        },
        location:{
            type: String,
            required: true,
        },
        users:{
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    }
);

export default model("parties", PartySchema);