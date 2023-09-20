import {
  Client,
  custom,
  Issuer,
  Strategy,
  TokenSet,
  UserinfoResponse,
} from "openid-client";
import passport from "passport";
import jwt from "jsonwebtoken";

const configurePassPortStrategy = () => {
  Issuer.discover(process.env.CRIIPTO_DOMAIN as string).then(
    (criiptoIssuer: Issuer<Client>) => {
      const client = new criiptoIssuer.Client({
        client_id: process.env.CRIIPTO_CLIENT_ID as string,
        client_secret: process.env.CRIIPTO_CLIENT_SECRET,
        redirect_uris: [process.env.CRIIPTO_CALLBACK as string],
        post_logout_redirect_uris: [
          process.env.CRIPTO_LOGOUT_REDIRECT as string,
        ],
        token_endpoint_auth_method: "client_secret_post",
      });
      client[custom.clock_tolerance] = 1000;
      passport.use(
        "oidc",
        new Strategy(
          { client },
          (tokenSet: TokenSet, _: UserinfoResponse, done: any) => {
            try {
              const data: any = jwt.decode(tokenSet.id_token as string);

              const user = {
                uid: data.socialno,
                name: data.name,
              };

              return done(null, user);
            } catch (err) {
              done(err);
            }
          },
        ),
      );
    },
  );

  passport.serializeUser(function (user, done) {
    done(null, user);
  });
  passport.deserializeUser(function (user: any, done) {
    done(null, user);
  });
};

export default configurePassPortStrategy;
