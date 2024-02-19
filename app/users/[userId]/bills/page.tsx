import ClientBillPayment from "@/components/ClientBillPayment";

// Client Bill Payement
export default function ClientBills({ params }: { params: any }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <ClientBillPayment />
    </div>
  );
}
