"use client";

import { FormProvider, useForm } from "react-hook-form";
import InputField from "../form/InputField";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import TypeField from "./TypeField";
import { zodResolver } from "@hookform/resolvers/zod";
import { LandingFilterInput, landingFilterSchema } from "@/lib/validations/filter.validation";
import { MakeModel } from "@/types/type";
import { useTheme } from "next-themes";

export default function HeroFilter({ make_models }: { make_models: MakeModel[] }) {
	"use no memo";
	const form = useForm({
		defaultValues: { type: "all" },
		resolver: zodResolver(landingFilterSchema),
		mode: "all",
	});
	const mode = useTheme();

	const onSubmit = (data: LandingFilterInput) => {
		console.log(data);
	};

	const models = (make_models.find((item) => item.name === form.getValues("make"))?.models || []).map((model) => ({
		id: model.id,
		label: model.name,
		value: model.name,
	}));
	const makes = make_models.map((make) => ({
		id: make.id,
		label: make.name,
		value: make.name,
	}));

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
				<TypeField />

				<div className="grid sm:grid-cols-2 max-md:gap-4 md:grid-cols-4 p-4 md:p-2 md:h-16 items-center rounded-lg drop-shadow md:rounded-full bg-background w-full">
					<InputField
						name="make"
						fieldType="select"
						placeholder="Any Makes"
						options={makes}
						className="md:border-none md:shadow-none md:ring-transparent bg-transparent!"
					/>

					<InputField
						name="model"
						fieldType="select"
						placeholder="Any Models"
						options={models}
						className="md:border-none md:shadow-none md:ring-transparent bg-transparent!"
					/>

					<InputField
						name="price"
						type="number"
						fieldType="input"
						placeholder="Any Price"
						className="md:border-none md:shadow-none md:ring-transparent! max-md:placeholder:text-sm bg-transparent!"
						containerClassName="sm:col-span-2 md:col-span-1"
					/>

					<Button
						variant={mode.theme === "light" ? "default" : "secondary"}
						size={"lg"}
						className="md:rounded-full md:h-full sm:col-span-2 md:col-span-1"
					>
						<Search /> <span>Search Cars</span>
					</Button>
				</div>
			</form>
		</FormProvider>
	);
}
