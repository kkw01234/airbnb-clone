const models = require('../models/index');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
module.exports = ()=>{
    passport.serializeUser((user,done)=>{
        done(null,user);
    })
    passport.deserializeUser((user,done)=>{
        done(null,user);
    });
    passport.use(new JwtStrategy({
        jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey : "test"
    },async (jwt_payload, done)=>{
        const user = await models.user.findOne({
            where : 
                {user_id : jwt_payload.user_id}
            });
        if(user) return done(null,user);
        else return done(null,false);
        }
    )
    )
}