const producer = require("./producer");
const consumer = require("./consumer");
const cron = require("node-cron");

// a producer  sending messages every 5 second
cron.schedule("*/5 * * * * *", () => {
  console.log("sending message every five second");
  producer.sendMessage();
});

// a consumer looking for new message every 1 minute
cron.schedule("0 */1 * * * *", () => {
  console.log("checking new messages");
  consumer.receiveMessage();
});
