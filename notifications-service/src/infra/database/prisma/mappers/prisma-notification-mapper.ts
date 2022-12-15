import { Notification } from '@application/entities/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    const { category, content, recipientId, createdAt, readAt, id } =
      notification;

    return {
      id,
      content: content.value,
      category,
      recipientId,
      createdAt,
      readAt,
    };
  }
}
