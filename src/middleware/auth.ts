import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import prisma from "../../prisma/db";
require(`dotenv`).config({ path: "../.env" });

export const authorize = (roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const getAuth = req.headers["authorization"];
    if (!getAuth) {
        return res.sendStatus(403)
    }
    const token: string = getAuth.split(" ")[1];
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string,
      async (err, id) => {
        const userId = parseInt(id as string);
        if (err) return res.sendStatus(403);
        const user = await prisma.user.findFirst({
          where: {
            id: userId,
          },
        });

        if (user == null) {
          return res.sendStatus(401);
        }

        if (!roles.includes(user.role)) {
          return res.status(403).json({
            status: false,
            message: `Users with the role do not get access`,
          });
        }

        req.user_id = userId;
        next();
      }
    );
  };
};
