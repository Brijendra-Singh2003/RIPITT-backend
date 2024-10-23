import { NextRequest } from "next/server";
import Event from "@/model/event.model";
import { tryCatch } from "../tryCatch";

export const POST = tryCatch(async (req: NextRequest) => {
  const { description, title, image_url, link, startDate } = await req.json();
  console.log({ description, title, image_url, link, startDate });

  if (!description || !title || !startDate)
    return { success: false, message: "missing required feilds" };

  const data = await Event.create({
    description,
    title,
    image_url,
    link,
    startDate: new Date(startDate),
  });

  return { success: true, data };
});

export const DELETE = tryCatch(async (req: NextRequest) => {
  const { id } = await req.json();
  if (id) await Event.deleteOne({ _id: id });
  return { success: true };
});

export const PUT = tryCatch(async (req: NextRequest) => {
  const { id, description, title, image_url, link, startDate } = await req.json();

  const data = await Event.updateOne(
    { _id: id },
    {
      description,
      title,
      image_url,
      link,
      startDate: startDate ? new Date(startDate) : undefined,
    }
  );

  return { success: true, data };
});

export const GET = tryCatch(async (req: NextRequest) => {
  const id = req.nextUrl.searchParams.get("id");
  let data;

  if (id) {
    data = await Event.findById(id);
  } else {
    data = await Event.find().sort({ startDate: 1 });
  }

  return { success: true, data };
});
