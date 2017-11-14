export class Thread {
  _id: string;
  content: string;
  path: string;
  createdAt: Date;
  isRoot: Boolean;
  parent?: String;
  replyTo?: String;
  indent?: Number;
}
