import { z } from "zod";

import { codeSchema } from "@/lib/schemas";

export const verifySchema = z.object({
  token: codeSchema,
});

export const VerifyDefaultValues: VerifySchema = {
  token: "",
};

export type VerifySchema = z.infer<typeof verifySchema>;
