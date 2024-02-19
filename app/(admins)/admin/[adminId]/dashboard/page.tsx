import AdminCardGroup from "@/components/AdminCardGroup";
import AdminCarousel from "@/components/AdminCarousel";
import AdminImportantNotices from "@/components/AdminImportantNotices";
import AdminAboutCard from "@/components/AdminAboutCard";

//Master adimin Dashboard
export default function AdminDashboard({ params }: { params: any }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-6 pt-24">
        <AdminCardGroup />
      </div>
      <div className="flex p-24">
        <AdminImportantNotices />
        <div className="p-6">
          <div className="">
            <AdminCarousel />
          </div>
          <div className="">
            <AdminAboutCard />
          </div>
        </div>
      </div>
    </div>
  );
}
