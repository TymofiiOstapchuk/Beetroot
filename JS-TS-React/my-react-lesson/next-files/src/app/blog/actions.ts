"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { toStructuredError, ZodStructuredError } from "zod-structured-error";

const schema = z.object({
  title: z.string().min(3, { message: "Title require min 3 characters" }),
  text: z.string().min(1, { message: "text is required" }),
});

export type EntryType = z.infer<typeof schema>;

export type State = {
  message: string;
  errors?: ZodStructuredError;
};

export async function createEntry(prevState: State, formData: FormData) {
  const id = formData.get("id");

  const entry = {
    title: formData.get("title"),
    text: formData.get("text"),
  };

  const validate = schema.safeParse(entry);

  if (!validate.success) {
    const errors = toStructuredError(validate.error);
    return { ...prevState, message: "validate errors", errors };
  }

  const data = validate.data;

  if (id) {
    await prisma.blog.update({
      where: {
        id: +id,
      },
      data,
    });
    revalidatePath("/blog");
  } else {
    await prisma.blog.create({
      data,
    });

    revalidatePath("/blog");
  }

  redirect("/blog");
}

export async function deleteEntry(prevState: State, formData: FormData) {
  const id = formData.get("id");

  if (!id) {
    return { message: "not found id" };
  }

  try {
    await prisma.blog.delete({
      where: {
        id: +id,
      },
    });
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
    return { message: `cannot find entry with id: ${id}` };
  }

  revalidatePath("/blog");
  redirect("/blog");
}
