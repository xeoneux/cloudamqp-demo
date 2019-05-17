const amqp = require("amqplib/callback_api");
const config = require("./config");
const sendMessage = async () => {
  amqp.connect(config.amqpserver, function(err, connection) {
    connection.createChannel(function(err, channel) {
      let time = new Date();
      let message = "New Message at " + time.toISOString();
      channel.assertQueue(config.queue, { durable: false });
      channel.sendToQueue(config.queue, Buffer.from(message));
    });
  });
};

module.exports = {
  sendMessage
};
