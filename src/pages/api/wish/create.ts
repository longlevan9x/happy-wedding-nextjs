import client from "@/libs/mongodb";
import type {NextApiRequest, NextApiResponse} from "next";
import {DB_COLLECTION_PREFIX} from "@/constant/constant";

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>,
) {
    try {
        if (req.method === 'POST') {
            const body = req.body;

            if (!body) {
                return res.status(401).json({message: "body is required"});
            }

            const dateCreated = new Date().toISOString();

            const {name, emailOrPhone, wish} = await JSON.parse(body);
            const db = client.db("sample_mflix");
            await db.collection(DB_COLLECTION_PREFIX + "wishes").insertOne({name, emailOrPhone, wish, dateCreated});
            return res.status(201).json({message: "Message sent successfully"})
        } else {
            return res.status(202).json({message: req.method + " Message sent successfully"})
        }
    } catch (err) {
        console.error(err);
        return res.status(400).json({message: "Failed to send message "})
    }
}
