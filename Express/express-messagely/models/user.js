/** User class for message.ly */

/** User of the site. */
class User {

  /** 
   * Register new user -- returns {username, password, first_name, last_name, phone}
   * 
   * @param {Object} userDetails - The user details.
   * @param {string} userDetails.username - The username.
   * @param {string} userDetails.password - The password.
   * @param {string} userDetails.first_name - The first name.
   * @param {string} userDetails.last_name - The last name.
   * @param {string} userDetails.phone - The phone number.
   * @returns {Promise<Object>} The registered user.
   */
  static async register({ username, password, first_name, last_name, phone }) { }

  /** 
   * Authenticate: is this username/password valid? Returns boolean.
   * 
   * @param {string} username - The username.
   * @param {string} password - The password.
   * @returns {Promise<boolean>} True if valid, false otherwise.
   */
  static async authenticate(username, password) { }

  /** 
   * Update last_login_at for user.
   * 
   * @param {string} username - The username.
   * @returns {Promise<void>}
   */
  static async updateLoginTimestamp(username) { }

  /** 
   * Get basic info on all users.
   * 
   * @returns {Promise<Array<Object>>} List of users with basic info.
   * [{username, first_name, last_name, phone}, ...]
   */
  static async all() { }

  /** 
   * Get user by username.
   * 
   * @param {string} username - The username.
   * @returns {Promise<Object>} The user details.
   * {username, first_name, last_name, phone, join_at, last_login_at}
   */
  static async get(username) { }

  /** 
   * Return messages from this user.
   * 
   * @param {string} username - The username.
   * @returns {Promise<Array<Object>>} List of messages from the user.
   * [{id, to_user, body, sent_at, read_at}]
   * where to_user is {username, first_name, last_name, phone}
   */
  static async messagesFrom(username) { }

  /** 
   * Return messages to this user.
   * 
   * @param {string} username - The username.
   * @returns {Promise<Array<Object>>} List of messages to the user.
   * [{id, from_user, body, sent_at, read_at}]
   * where from_user is {username, first_name, last_name, phone}
   */
  static async messagesTo(username) { }
}

module.exports = User;
