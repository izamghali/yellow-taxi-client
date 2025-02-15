import CheckboxPaymentType from "./checkbox-payment-type"

const paymentTypes = [
    {
        text: "Credit Card",
        id: "credit-card"
    },
    {
        text: "Cash",
        id: "cash"
    },
    {
        text: "No Charge",
        id: "no-charge"
    },
    {
        text: "Dispute",
        id: "dispute"
    },
    {
        text: "Unknown",
        id: "unknown"
    },
    {
        text: "Voided Trip",
        id: "voided-trip"
    }
]

interface FilterPaymentTypeProps {
    selectedPaymentType: string[];
    setSelectedPaymentType: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function FilterPaymentType({ selectedPaymentType, setSelectedPaymentType }: FilterPaymentTypeProps) {

    return (
        <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm">Payment Type</h3>
            <div>
                <div className="flex flex-col gap-4">
                    {
                        paymentTypes.map((paymentType: typeof paymentTypes[number], index) => (
                            <CheckboxPaymentType key={index} text={paymentType.text} checkboxId={paymentType.id} 
                                isChecked={selectedPaymentType?.includes(paymentType.id) ? true: false} 
                                isSelected={selectedPaymentType} setIsSelected={setSelectedPaymentType}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

