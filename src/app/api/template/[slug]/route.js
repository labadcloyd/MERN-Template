import { NextResponse } from "next/server";
import { TemplateModel } from "@/backend/models";

async function GET(req, res) {
  const id = res?.params?.slug;

  if (!id) {
    return NextResponse.json(
      { message: "TemplateModel id is required" },
      { status: 400 }
    );
  }

  const template = await TemplateModel.find({ id: id });

  return NextResponse.json(template, { status: 200 });
}

export { GET };
