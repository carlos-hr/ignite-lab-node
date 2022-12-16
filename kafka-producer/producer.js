import { Kafka } from "kafkajs";
import { randomUUID } from "node:crypto";
import * as dotenv from "dotenv";

dotenv.config();

async function bootstrap() {
  const kafka = new Kafka({
    clientId: "kafka-producer",
    brokers: [process.env.KAFKA_BROKER],
    sasl: {
      mechanism: "scram-sha-256",
      username: process.env.KAFKA_USERNAME,
      password: process.env.KAFKA_PASSWORD,
    },
    ssl: true,
  });

  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: "notifications.send-notification",
    messages: [
      {
        value: JSON.stringify({
          content: "New friendship request",
          category: "social",
          recipientId: randomUUID(),
        }),
      },
    ],
  });

  await producer.disconnect();
}

bootstrap();
