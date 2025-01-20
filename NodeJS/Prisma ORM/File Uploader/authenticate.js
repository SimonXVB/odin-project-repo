const prisamdb = require("./prismaqueries");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await prisamdb.findUser(username);
  
        if (!user) {
          return done(null, false);
        }

        if (user.password !== password) {
          return done(null, false);
        }

        return done(null, user);

      } catch(err) {
        return done(err);
      }
    })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisamdb.findUserById(id);
    done(null, user);
  } catch(err) {
    done(err);
  }
});