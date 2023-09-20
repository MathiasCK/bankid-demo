import { Request, Response } from "express";
import { NextFunction } from "connect";

export const checkIsAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/");
};
