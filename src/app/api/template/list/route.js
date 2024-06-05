import { NextResponse } from "next/server";
import { TemplateModel } from "@/backend/models";

async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const size = searchParams.get("size");

  const params = {};

  try {
    const [items, count] = await Promise.all([
      TemplateModel.find({ ...params }, "id field1 field2 field3 field4", {
        lean: true,
        skip: (page || 0) * (size || 20),
        limit: size || 20,
      }).exec(),
      TemplateModel.countDocuments({ ...params }).exec(),
    ]);

    return NextResponse.json({
      items: items,
      total: count,
      size: Number(size),
      page: Number(page),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "An error occured" }, { status: 500 });
  }
}

export { GET };
