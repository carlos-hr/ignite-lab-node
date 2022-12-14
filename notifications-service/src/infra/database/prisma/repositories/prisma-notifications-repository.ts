import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../application/entities/notification';
import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const { category, content, recipientId, createdAt, readAt, id } =
      notification;

    await this.prismaService.notification.create({
      data: {
        id,
        content: content.value,
        category,
        recipientId,
        createdAt,
        readAt,
      },
    });
  }
}
