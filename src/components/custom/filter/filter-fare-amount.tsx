import { Input } from "@/components/ui/input";

interface FilterFareAmountProps {
    selectedFare: { min: number, max: number };
    setSelectedFare: React.Dispatch<React.SetStateAction<{ min: number, max: number }>>;
}

export default function FilterFareAmount({ selectedFare, setSelectedFare }: FilterFareAmountProps) {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm">Fare Amount</h3>
            <div className="flex flex-col gap-2">
                <div className="flex items-center bg-white rounded-md border">
                    <div className="px-3">$</div>
                    <Input onChange={(e) => setSelectedFare({ ...selectedFare, min: parseInt(e.target.value) < 1 || e.target.value === "" ? 0 : parseInt(e.target.value) }) } type="number" className="bg-transparent border-0 rounded-l-none" placeholder="Minimum fare amount" />
                </div>
                <div className="flex items-center bg-white rounded-md border">
                    <div className="px-3">$</div>
                    <Input onChange={(e) => setSelectedFare({ ...selectedFare, max: parseInt(e.target.value) < 1 || e.target.value === "" ? 0 : parseInt(e.target.value) })} type="number" className="bg-transparent border-0 rounded-l-none" placeholder="Maximum fare amount" />
                </div>
            </div>
        </div>
    )
};

