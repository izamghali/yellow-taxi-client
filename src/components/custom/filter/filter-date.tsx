import { DateRangePicker } from "@/components/ui/date-range-picker";
import { DateRange } from "react-day-picker";

interface FilterDateProps {
    date: DateRange | undefined;
    setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}

export default function FilterDate({ date, setDate }: FilterDateProps) {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm">Time Range</h3>
            <DateRangePicker date={date} setDate={setDate}/>
        </div>
    )
};

