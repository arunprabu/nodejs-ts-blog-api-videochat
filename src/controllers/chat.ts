import { Request, Response } from "express";

/**
 * chat home page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
    res.render("chat", {
        title: "Chat App!"
    });
};
