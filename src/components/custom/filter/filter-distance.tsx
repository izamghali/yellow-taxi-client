import { Input } from "@/components/ui/input";

interface FilterDistanceProps {
    selectedDistance: { min: number; max: number; };
    setSelectedDistance: (value: { min: number; max: number }) => void;
}

export default function FilterDistance({ selectedDistance, setSelectedDistance }: FilterDistanceProps) {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm">Distance</h3>
            <div className="flex flex-col gap-2">
                <Input onChange={(e) => setSelectedDistance({ ...selectedDistance, min: parseInt(e.target.value) < 1 || e.target.value === "" ? 0 : parseInt(e.target.value) })} type="number" placeholder="Minimum distance in miles" />
                <Input onChange={(e) => setSelectedDistance({ ...selectedDistance, max: parseInt(e.target.value) < 1 || e.target.value === "" ? 0 : parseInt(e.target.value) })} type="number" placeholder="Maximum distance in miles" />
            </div>
        </div>
    )
};

