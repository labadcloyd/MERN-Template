import { NextResponse } from "next/server";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
// Utils
import { formatZodError } from "@/backend/utils/zod";
// Models
import { TemplateModel } from "@/backend/models";

export const postReq = z.object({
  ownerId: z.string(),
  field1: z.optional(z.string().max(250).default("")),
  field2: z.coerce.number().min(1).max(5),
});
async function POST(req, res) {
  try {
    // Checking Session
    const session = await getServerSession(authOptions);
    if (!session || !session?.user?.id) {
      return NextResponse.json(
        { message: "Unauthorized access" },
        { status: 401 }
      );
    }
    const userID = session?.user?.id;

    // Validating body
    const body = await req.json();
    postReq.parse(body);

    if ("simple insert") {
      const newTemplateData = new TemplateModel({
        id: uuidv4(),
        field1: body.field1,
      });
      await newTemplateData.save();
      return NextResponse.json(newTemplateData);
    }
    if ("find and update or create if doesnt exist") {
      const newTemplateData = await TemplateModel.findOneAndUpdate(
        { ownerId: userID },
        {
          field1: body.field1,
        },
        { new: true }
      );
      return NextResponse.json(newTemplateData);
    }
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      // Format the zod error
      const formattedErrors = formatZodError(error);
      return NextResponse.json({ errors: formattedErrors }, { status: 400 });
    }

    // Handle other types of errors (e.g., database errors)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export { POST };
