import DocumentTable from "@/components/DocumentTable";

// User Documents Page
export default function Documents({ params }: { params: any }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <h1 className="text-4xl text-center">
        Welcome to the Documets Page {params.userId}
      </h1> */}
      <div className="flex justify-center items-center">
        <DocumentTable />
      </div>
    </div>
  );
}
