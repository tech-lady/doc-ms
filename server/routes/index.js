// (function() {
// require('./user.js')(app);
import roleRouter from './role';
import docRouter from './document';
import userRouter from './user';
// })();
export default {
  roleRouter,
  docRouter,
  userRouter
}
