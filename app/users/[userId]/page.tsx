
// Client Dashboard
export default function Users({params}) {
  return (
    <div className='bg-gray-100 min-h-screen'>
    <h1 className="text-4xl text-center">Welcome to the Home Page {params.userId}</h1>
    </div>
  )
}
