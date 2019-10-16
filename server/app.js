var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const passport =require('passport');
const passportConfig = require('./passport/passport');

const controller = require('./controller/controller');
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


// var app = express();

// view engine setup
// app.set('views', path.join(__dirname, '../client/views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../client/public')));

const context = req =>{
  req : req.request
}
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
// app.use('/', controller);


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
