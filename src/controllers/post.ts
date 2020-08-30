import { Request, Response } from "express";
import { Post } from "../models/Post";

/**
 * posts api endpoint.
 * @route GET /
 */
export const getPosts = (req: Request, res: Response) => {
	Post.find((err: any, users: any) => {
		if (err) {
			res.send(err);
		} else {
			res.send(users);
		}
	});
};
export const createPost = (req: Request, res: Response) => {
	console.log(req.body);
	const postDao = new Post(req.body);
	postDao.save( (err, data) => {
		console.log(data);
		if (err) {
			res.send(err);
		} else {
			res.send(data);
		}
	});
};

