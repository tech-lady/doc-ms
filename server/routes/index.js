// (function() {
// require('./user.js')(app);
import roleRouter from './role.js';
import docRouter from './document.js';
import userRouter from './user.js';
// })();
export default {
  roleRouter,
  docRouter,
  userRouter
}
