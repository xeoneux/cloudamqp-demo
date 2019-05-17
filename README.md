# CloudAMQP demo

CloudAMQP provides RebbitMQ services on cloud with Max 10 000 queued messages. This demo application consists of producer which push data to rabbitmq queue and a consumer which checks for any new items in queue and process them.

## Steps

1. Signup at https://www.cloudamqp.com/plans.html for free plan
2. Create New Instance
3. From Cloudamqp console copy AMQP URL
4. Set amqpserver in config file to copied AMQP URL
5. set a name for you queue
6. then in terminal

```console
$ npm install
```

7. then

```console
$ node index.js
```

## References

```console
https://www.cloudamqp.com/
https://www.rabbitmq.com/
```
