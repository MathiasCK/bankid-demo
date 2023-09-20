import express, { Request, Response } from "express";
import { checkIsAuthenticated } from "../utils";
import { NextFunction } from "connect";
import passport from "passport";

const router = express.Router();

router.get("/", (_: Request, res: Response) => {
  res.render("login.ejs");
});

router.get("/auth", (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  // BankID needs acr_values
  passport.authenticate("oidc", { acr_values: req.query.loginmethod })(
    req,
    res,
    next,
  );
});

router.get("/success", checkIsAuthenticated, (req: Request, res: Response) => {
  // @ts-ignore
  res.render("success.ejs", { name: req.user.name });
});

router.get("/logout", (req: Request, res: Response) => {
  req.logOut(error => {
    if (error) {
      return res.render("error.ejs", { error });
    }

    res.redirect("/");
  });
});

router.get(
  "/auth/callback",
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("oidc", {
      successRedirect: "/success",
      failureRedirect: "/error",
    })(req, res, next);
  },
);

export default router;
