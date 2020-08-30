import { Request, Response } from "express";

/**
 * videochat  page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
    res.render("videochat", {
        title: "Video Conference App!"
    });
};

