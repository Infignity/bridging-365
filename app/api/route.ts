import { NextRequest } from "next/server";
import Message from "~/models/message";
import { connectToDB } from "~/utils/db";

export async function POST(request: NextRequest) {
  const { name, phone, email, message }: MessageInterface =
    await request.json();

  try {
    await connectToDB();
    const messageObject = new Message({
      name,
      phone,
      email,
      message,
    });

    await messageObject.save();

    return new Response(JSON.stringify(messageObject), {
      status: 200,
    });
  } catch (error) {
    const errorM = error as Error;
    return new Response(`Error: ${errorM.message}`, {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    await connectToDB();
    const messages = await Message.find({});
    return new Response(JSON.stringify(messages), {
      status: 200,
      statusText: "Success",
    });
  } catch (error) {
    const errorM = error as Error;
    return new Response(JSON.stringify(errorM.message), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
