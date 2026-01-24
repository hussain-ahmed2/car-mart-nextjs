import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { HTMLInputTypeAttribute } from "react";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { cn } from "@/lib/utils";

interface InputFieldProps {
	name: string;
	type?: HTMLInputTypeAttribute;
	label?: string;
	placeholder?: string;
	fieldType?: "input" | "textarea" | "select";
	rows?: number;
	options?: { value: string; label: string; id: string }[];
	className?: string;
	containerClassName?: string;
}

export default function InputField({
	name,
	type,
	label,
	placeholder,
	fieldType,
	rows = 4,
	options = [],
	className = "",
	containerClassName = "",
}: InputFieldProps) {
	const {
		register,
		formState: { errors },
		watch,
		setValue,
	} = useFormContext();

	const error = errors[name];
	const value = watch(name);

	return (
		<div className={cn("flex flex-col", containerClassName)}>
			{label && (
				<Label htmlFor={name} className="mb-1">
					{label}
				</Label>
			)}
			{fieldType === "select" ? (
				<Select value={value} onValueChange={(value) => setValue(name, value)}>
					<SelectTrigger className={cn("w-full", className)} aria-invalid={!!error} id={name}>
						<SelectValue placeholder={placeholder} />
					</SelectTrigger>
					<SelectContent align="start" position="popper" className="w-full">
						{options.map((option) => (
							<SelectItem key={option.id} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			) : fieldType === "textarea" ? (
				<Textarea aria-invalid={!!error} id={name} placeholder={placeholder} {...register(name)} rows={rows} />
			) : (
				<Input
					className={cn("w-full", className)}
					aria-invalid={!!error}
					id={name}
					type={type}
					placeholder={placeholder}
					{...register(name)}
				/>
			)}
			{error && <p className="text-xs text-red-600 mt-1">{error.message?.toString()}</p>}
		</div>
	);
}
