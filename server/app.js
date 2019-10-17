var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/* passport*/
const passport =require('passport');
const passportConfig = require('./passport/passport');

/*sequelize Model*/
const models = require('./models/index');
// graphql
const {GraphQLServer} = require('graphql-yoga');
const resolvers = require('./resolvers/user-resolvers');
const {fileLoader,mergeResolvers,mergeTypes} =require('merge-graphql-schemas');

models.sequelize.sync().then(()=>{
  console.log("DB Start");
}).catch(err=>{
  console.error(err);
});


const context = req =>({
  ...req
});
const typeArray = fileLoader(path.join(__dirname,"graphql/*.graphql"));
const resolverArray = fileLoader(path.join(__dirname,"resolvers/*.js"));

console.log(typeArray);

const server = new GraphQLServer({
  typeDefs : mergeTypes(typeArray),
  resolvers : mergeResolvers(resolverArray),
  context
});
passportConfig();
server.express.use(passport.initialize());
server.express.use(function(req,res,next){
  passport.authenticate('jwt',{session:false},(err,user,infor)=>{
    if(user) req.user = user;
    next();
  })(req,res,next);
 
});
const options = {
  port : 3333,
  endpoint : '/api',
  playground : '/play',
  cors:{
    credentials : true,
    origin : ["http://localhost:3000"]
  }
}

server.start(options,()=>console.log("Graphql Server start"));


