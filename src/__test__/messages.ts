import { Message } from "../types";

const MESSAGES_NUMBER = 5;
function createMessages() {
  const messagesList: Message[] = [];
  for (let i = 0; i < MESSAGES_NUMBER; i += 1) {
    messagesList.push({
      message: `${i}`,
      name: `${2 * i}`,
      date: new Date(),
    });
  }
  return messagesList;
}

export const messages = createMessages();
