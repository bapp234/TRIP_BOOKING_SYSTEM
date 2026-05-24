/**
 * Server start skeleton
 *
 * Exports a `startServer` function which accepts an `app` instance and starts
 * an HTTP server. No assumptions about framework or transport are made here.
 */

module.exports = {
  startServer: (app, { port = process.env.PORT || 3000 } = {}) => {
    if (!app || typeof app.listen !== 'function') {
      throw new Error('A valid app (with listen) must be provided to startServer');
    }
    const server = app.listen(port);
    return server;
  },
};
