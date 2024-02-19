import CardGroup from "@/components/CardGroup";
import ImportantNotice from "@/components/ImportantNotice";
import Carousel from "@/components/Carousel";
import AboutCard from "@/components/AboutCard";
// Client Dashboard
export default function Users({ params }: { params: any }) {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center flex-col">
      {/* <h1 className="text-4xl text-center">Welcome to the Home Page {params.userId}</h1> */}
      <div>
        <CardGroup />
      </div>
      <div className="flex flex-col gap-5 mx-auto lg:flex-row mb-8 pt-10">
        <div className="flex lg:flex-row">
          <div className="flex lg:flex-column">
            <ImportantNotice />
          </div>
          <div className="flex flex-col gap-5 lg:ml-10 mb-5 ">
            <Carousel />
            <AboutCard />
          </div>
        </div>
      </div>
    </div>
  );
}
