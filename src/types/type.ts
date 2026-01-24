import { Make, Model } from "@/generated/prisma/client";

export type MakeModel = Make & {
	models: Model[];
};
