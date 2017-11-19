export class Thread {
  _id: string;
  _user: ThreadUser;
  content: string;
  path: string;
  createdAt: Date;
  isRoot: Boolean;
  parent?: String;
  replyTo?: String;
  indent?: Number;
}

export class ThreadUser {
  username: string;
}
