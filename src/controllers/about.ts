import { Request, Response } from "express";

/**
 * About page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
    res.render("about", {
        title: "This is the base About us template. you can work on this"
    });
};
