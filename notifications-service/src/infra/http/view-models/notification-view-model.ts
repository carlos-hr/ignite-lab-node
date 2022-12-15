import { Notification } from '@application/entities/notification';

export class NotificationViewModel {
  static toHTTP(notification: Notification) {
    const { category, content, id, recipientId } = notification;

    return {
      id,
      content: content.value,
      category,
      recipientId,
    };
  }
}
