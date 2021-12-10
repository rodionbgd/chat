export type Message = {
  name: string;
  message: string;
  date: Date;
};

export type Avatar = Record<string, string>;
export type State = {
  messagesList: Message[];
  name: string;
  avatars: Avatar;
  lastMessage: Message;
};
