'use client'
import React from "react"
import { Checkbox } from "../../ui/checkbox"
import { Label } from "@/components/ui/label"

interface CheckboxPaymentTypeProps {
    checkboxId: string
    text: string
    className?: string
    isChecked: boolean
    isSelected: string[]
    setIsSelected: React.Dispatch<React.SetStateAction<string[]>>
}

export default function CheckboxPaymentType({ checkboxId, text, className, isChecked, isSelected, setIsSelected }: CheckboxPaymentTypeProps) {

    function handleCheckbox(e: React.MouseEvent<HTMLButtonElement>, setState: React.Dispatch<React.SetStateAction<string[]>>) {
        const target = e.target as HTMLButtonElement;
        const checked = target.ariaChecked; 
        const value = target.id; 
      
        if (checked && !isSelected.includes(value)) {
            setState((prev) => [...prev, value]);
        } else {
            setState((prev) => prev.filter((item) => item !== value));
        }
    }

    return (
        <div 
         className={`${className} flex items-center space-x-2 cursor-pointer`}>
            <Checkbox id={checkboxId} checked={isChecked} onClick={(e) => handleCheckbox(e, setIsSelected)}/>
            <Label htmlFor={checkboxId}  
                className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-full"
            >
                {text}
            </Label>
        </div>
    )
};

