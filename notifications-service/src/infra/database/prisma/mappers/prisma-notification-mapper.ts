import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    const {
      category,
      content,
      recipientId,
      canceledAt,
      createdAt,
      readAt,
      id,
    } = notification;

    return {
      id,
      content: content.value,
      category,
      recipientId,
      createdAt,
      readAt,
      canceledAt,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    const {
      canceledAt,
      category,
      content,
      createdAt,
      id,
      readAt,
      recipientId,
    } = raw;

    return new Notification(
      {
        canceledAt,
        category,
        content: new Content(content),
        createdAt,
        readAt,
        recipientId,
      },
      id,
    );
  }
}
