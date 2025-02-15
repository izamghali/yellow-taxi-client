'use client'

import { useEffect, useState } from "react";
import FilterFareAmount from "../filter/filter-fare-amount";
import FilterPaymentType from "../filter/filter-payment-type";
import FilterDistance from "../filter/filter-distance";
import FilterDate from "../filter/filter-date";
import { DateRange } from "react-day-picker"
import { addDays } from "date-fns";

export default function FormSidebar() {

    const [ selectedPaymentType, setSelectedPaymentType ] = useState<string[]>([]);
    const [ selectedDistance, setSelectedDistance ] = useState<{ min: number, max: number }>({ min: 0, max: 0 });
    const [ selectedFare, setSelectedFare ] = useState<{ min: number, max: number }>({ min: 0, max: 0 });
    const [ selectedDate, setSelectedDate ] = useState<DateRange | undefined>({
        from: new Date(2014, 0, 20),
        to: addDays(new Date(2014, 0, 20), 20),
    })

    useEffect(() => {
        fetchData();
    }, [ selectedPaymentType, selectedDistance, selectedFare, selectedDate ])

    async function fetchData() {
        
    }

    return (
        <div className="flex flex-col gap-6">
            <FilterDate date={selectedDate} setDate={setSelectedDate} />
            <FilterDistance selectedDistance={selectedDistance} setSelectedDistance={setSelectedDistance} />
            <FilterFareAmount selectedFare={selectedFare} setSelectedFare={setSelectedFare} />
            <FilterPaymentType selectedPaymentType={selectedPaymentType} setSelectedPaymentType={setSelectedPaymentType} />
        </div>
    )
};

