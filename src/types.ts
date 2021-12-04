export type Message = {
  name: string;
  message: string;
  date: Date;
};

export type State = {
  messagesList: Message[];
  name: string;
  avatars: Record<string, string>;
  lastMessage: Message;
};
