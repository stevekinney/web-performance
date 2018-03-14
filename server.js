const serve = require('serve');

const server = serve(__dirname, {
  port: 1337,
  ignore: ['node_modules']
});
