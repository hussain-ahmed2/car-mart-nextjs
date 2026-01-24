import { Vehicle } from "@/prisma/generated/client";
import VehicleCard from "./VehicleCard";
import { Link } from "@tanstack/react-router";

interface BuyVehicleGridProps {
  vehicles: Vehicle[];
  isLoading?: boolean;
}

export default function BuyVehicleGrid({
  vehicles,
  isLoading,
}: BuyVehicleGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-[400px] rounded-xl bg-muted animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (vehicles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="bg-muted rounded-full p-4 mb-4">
          <svg
            className="size-10 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="Drawing 9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">No vehicles found</h3>
        <p className="text-muted-foreground">
          Try adjusting your filters to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {vehicles.map((vehicle) => (
        <Link
          key={vehicle.id}
          to="/vehicles/$slug"
          params={{ slug: vehicle.slug }}
          className="transition-transform hover:-translate-y-1"
        >
          <VehicleCard vehicle={vehicle as any} />
        </Link>
      ))}
    </div>
  );
}
