import User from "../models/User.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export default passport.use(
    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET
        },
        async (jwt_payload, done) => {
            try {
                let user = await User.findOne({ email: jwt_payload.email });
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false); // Cambiar a false
                }
            } catch (error) {
                return done(error, false); // Cambiar a false
            }
        }
    )
);
