export class PostRequest {
  post: PostObject;
  replyTo?: String;
}

class PostObject {
  content: String;
}
