import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: 'social',
      content: new Content('You received a friendship request'),
      recipientId: 'example-recipient',
    });

    expect(notification).toBeTruthy();
  });
});
