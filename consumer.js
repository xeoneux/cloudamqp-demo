const amqp = require("amqplib/callback_api");
const config = require("./config");

const receiveMessage = async () => {
  amqp.connect(config.amqpserver, function(err, connection) {
    connection.createChannel(function(err, channel) {
      channel.assertQueue(config.queue, { durable: false });
      channel.consume(
        config.queue,
        function(msg) {
          console.log(" [x] Received %s", msg.content.toString());
        },
        { noAck: true }
      );
    });
  });
};

module.exports = {
  receiveMessage
};
