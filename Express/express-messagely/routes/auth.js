/**
 * POST /login - login: {username, password} => {token}
 * 
 * Make sure to update their last-login!
 */
app.post('/login', async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const token = await User.authenticate(username, password);
      if (token) {
        await User.updateLoginTimestamp(username);
        return res.json({ token });
      } else {
        throw new Error("Invalid username/password");
      }
    } catch (err) {
      return next(err);
    }
  });
  
  /**
   * POST /register - register user: registers, logs in, and returns token.
   * 
   * {username, password, first_name, last_name, phone} => {token}
   * 
   * Make sure to update their last-login!
   */
  app.post('/register', async (req, res, next) => {
    try {
      const { username, password, first_name, last_name, phone } = req.body;
      const user = await User.register({ username, password, first_name, last_name, phone });
      const token = await User.authenticate(username, password);
      if (token) {
        await User.updateLoginTimestamp(username);
        return res.json({ token });
      } else {
        throw new Error("Registration failed");
      }
    } catch (err) {
      return next(err);
    }
  });
  