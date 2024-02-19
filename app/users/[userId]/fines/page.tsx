import PayFine from "@/components/PayFine";
// User Fine Page
export default function ClientBills({params}: {params: any}) {
    return (
      <div className='bg-gray-100 min-h-screen'>
      {/* <h1 className="text-4xl text-center">Welcome to the Fine Page {params.userId}</h1> */}
        <PayFine userId={params.userId as string}/> 
      </div>
    )
  }
  