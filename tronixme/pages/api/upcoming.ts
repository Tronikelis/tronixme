import { getUpcoming } from "animedao";
import type { NextApiRequest as Request, NextApiResponse as Response } from "next";

import { handleError } from "@utils";

const get = async (req: Request, res: Response) => {
    res.status(200).json(await getUpcoming());
};

export default async function handler(req: Request, res: Response) {
    const { method } = req;

    try {
        switch (method) {
            case "GET":
                await get(req, res);
                break;
            default:
                res.status(404).json("Not found");
        }
    } catch (error) {
        res.status(500).json(handleError(error));
    }
}
