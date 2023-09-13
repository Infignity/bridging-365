import { Model, Schema, model, models } from "mongoose";


const MessageSchema = new Schema<MessageInterface>({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
});

const Message: Model<MessageInterface> =
  models.Message || model<MessageInterface>("Message", MessageSchema);

export default Message;
