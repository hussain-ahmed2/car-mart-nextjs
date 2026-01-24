import { FormProvider, useForm } from "react-hook-form";
import InputField from "../form/InputField";
import { make_models } from "@/data/make-models-data";
import { Button } from "../ui/button";
import { Filter, X } from "lucide-react";
import {
  BodyType,
  FuelType,
  TransmissionType,
} from "@/prisma/generated/client";

import { VehicleFilters } from "@/routes/buy";

interface BuyFiltersProps {
  onFilterChange?: (filters: VehicleFilters) => void;
  onClearFilters?: () => void;
}

export default function BuyFilters({
  onFilterChange,
  onClearFilters,
}: BuyFiltersProps) {
  const form = useForm({
    defaultValues: {
      make: "",
      model: "",
      minPrice: "",
      maxPrice: "",
      bodyType: "",
      transmission: "",
      fuelType: "",
      year: "",
    },
  });

  const onSubmit = (data: VehicleFilters) => {
    onFilterChange?.(data);
  };

  const handleClear = () => {
    form.reset();
    onClearFilters?.();
  };

  const selectedMake = form.watch("make");
  const models = (
    make_models.find((item) => item.make === selectedMake)?.models || []
  ).map((model) => ({
    label: model,
    value: model,
  }));
  const makes = make_models.map((make) => ({
    label: make.make,
    value: make.make,
  }));

  const bodyTypeOptions = Object.values(BodyType).map((type) => ({
    label: type.charAt(0) + type.slice(1).toLowerCase(),
    value: type,
  }));

  const fuelTypeOptions = Object.values(FuelType).map((type) => ({
    label: type.charAt(0) + type.slice(1).toLowerCase(),
    value: type,
  }));

  const transmissionOptions = Object.values(TransmissionType).map((type) => ({
    label:
      type.replace("_", " ").charAt(0) +
      type.replace("_", " ").slice(1).toLowerCase(),
    value: type,
  }));

  return (
    <div className="bg-background border rounded-xl p-6 h-fit sticky top-16">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="size-5" />
          <h3 className="font-semibold text-lg">Filters</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClear}
          className="text-muted-foreground hover:text-primary"
        >
          <X className="size-4 mr-1" /> Clear
        </Button>
      </div>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <InputField
            name="make"
            fieldType="select"
            label="Make"
            placeholder="All Makes"
            options={makes}
          />

          <InputField
            name="model"
            fieldType="select"
            label="Model"
            placeholder="All Models"
            options={models}
            containerClassName={
              !selectedMake ? "opacity-50 pointer-events-none" : ""
            }
          />

          <div className="grid grid-cols-2 gap-4">
            <InputField
              name="minPrice"
              type="number"
              label="Min Price"
              placeholder="0"
            />
            <InputField
              name="maxPrice"
              type="number"
              label="Max Price"
              placeholder="Any"
            />
          </div>

          <InputField
            name="bodyType"
            fieldType="select"
            label="Body Type"
            placeholder="All Types"
            options={bodyTypeOptions}
          />

          <InputField
            name="transmission"
            fieldType="select"
            label="Transmission"
            placeholder="All Transmissions"
            options={transmissionOptions}
          />

          <InputField
            name="fuelType"
            fieldType="select"
            label="Fuel Type"
            placeholder="All Fuels"
            options={fuelTypeOptions}
          />

          <InputField
            name="year"
            type="number"
            label="Year"
            placeholder="Any Year"
          />

          <Button type="submit" className="w-full">
            Apply Filters
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
