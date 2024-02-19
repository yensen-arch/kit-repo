import ImportantNotice from "../components/ImportantNotice";
import NewsEvent from "../components/NewsAndEvents";
import LoginForm from "@/components/LoginForm";
import Carousel from "@/components/Carousel";
import AboutCard from "@/components/AboutCard";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <Navbar /> */}
      <main className="container mx-auto p-4 justify-center items-center flex flex-col gap-5">
        {/* First Row */}
        <div className="flex flex-col gap-5 mx-auto lg:flex-row mb-8">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="flex flex-col-reverse lg:flex-column">
              <ImportantNotice />
              <NewsEvent />
            </div>
            <div className="flex flex-col gap-5 lg:ml-10 mb-5">
              <Carousel />
              <AboutCard />
              <LoginForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
