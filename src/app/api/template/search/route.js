import { NextResponse } from "next/server";
import { TemplateModel } from "@/backend/models";

async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const searchterm = searchParams.get("searchterm");

  if (searchterm === undefined || searchterm === null) {
    return NextResponse.json(
      { message: "searchterm requried" },
      { status: 400 }
    );
  }

  try {
    const [items, count] = await Promise.all([
      TemplateModel.find(
        { $text: { $search: searchterm } },
        "id field1 field2 field3 field4"
      )
        .limit(15)
        .exec(),
      TemplateModel.countDocuments({ $text: { $search: searchterm } }).exec(),
    ]);

    return NextResponse.json({
      items: items,
      total: count,
      size: 15,
      page: 0,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "An error occured" }, { status: 500 });
  }
}

export { GET };
