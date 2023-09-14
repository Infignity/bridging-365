import { NextRequest } from "next/server";
import Message from "~/models/message";
import { connectToDB } from "~/utils/db";

type ParamType = {
  params: {
    id: string;
  };
};

export async function GET(_: NextRequest, { params }: ParamType) {
  try {
    await connectToDB();

    const prompt = await Message.findById(params.id);
    if (!prompt) {
      return new Response("Message not found", {
        status: 404,
      });
    }
    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (error) {
    const errorM = error as Error;
    return new Response(`Error: ${errorM.message}`, {
      status: 500,
    });
  }
}

export async function DELETE(_: NextRequest, { params }: ParamType) {
  try {
    await connectToDB();
    const promptToDelete = await Message.findByIdAndDelete(params.id);
    if (!promptToDelete) {
      return new Response("Message not found", {
        status: 404,
      });
    }

    return new Response("Deleted", {
      status: 200,
    });
  } catch (error) {
    const errorM = error as Error;
    return new Response(`Error: ${errorM.message}`, {
      status: 500,
    });
  }
}
