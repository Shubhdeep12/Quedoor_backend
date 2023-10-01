import { Response } from "express";
import response from "../../shared/utils/response";
import { AuthRequest } from "../../shared/entities/auth.entity";
// import Post from "../models/posts";
import createError from "../../shared/utils/httpError";

// export const getPosts = async (req: AuthRequest, res: Response, next: Function) => {
//   const userId = req.query.userId;
//   const userInfoId = req.user?.id;
//   const query =
//     userId !== "undefined"
//       ? `SELECT p.*, u.id AS userId, name, profileImg FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE p.userId = ? ORDER BY p.createdAt DESC`
//       : `SELECT p.*, u.id AS userId, name, profileImg FROM posts AS p JOIN users AS u ON (u.id = p.userId)
//     LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId = ? OR p.userId = ?
//     ORDER BY p.createdAt DESC
//     `;

//   const values = userId !== "undefined" ? [userId] : [userInfoId, userInfoId];

  

//   db.query(query, values, (err, data) => {
//     if (err) return createError(500, err);
//     return response({ res, data, message: "Posts fetched successfully" });
//   });
// };

// export const addPost = (req: AuthRequest, res: Response) => {
//   const userId = req.user?.id;
//   const query =
//     "INSERT INTO posts (`desc`, `img`, `createdAt`, `userId`) VALUES (?)";

//   const values = [
//     req.body.desc,
//     req.body.img,
//     moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
//     userId,
//   ];
//   db.query(query, [values], (err, data) => {
//     if (err) return createError(500, err);
//     return response({ res, data, message: "Post added successfully" });
//   });
// };


