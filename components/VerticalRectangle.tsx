import Image from 'next/image';

export default function VerticalRectangle() {
  return (
    <main>
      <div className="rounded-lg border text-card-foreground shadow-sm w-full md:w-[350px] bg-[#61677A] h-[650.35px]">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Important Notice</h3>
        </div>
        <div className="p-6">
          <p className="text-white">
            We are performing scheduled maintenance this Saturday from 1pm to 3pm PST. During this time, the service will
            be unavailable. We apologize for any inconvenience this may cause.
          </p>
          <div className="mt-4 space-y-2">
            <div className="bg-[#D8D9DA] p-2 rounded">
              <p className="text-sm">Our office will be closed on December 25th in observance of Christmas Day.</p>
            </div>
            <div className="bg-[#D8D9DA] p-2 rounded">
              <p className="text-sm">
                Reminder: Update your password for enhanced security if you haven't done so in the past 6 months.
              </p>
            </div>
            <div className="bg-[#D8D9DA] p-2 rounded">
              <p className="text-sm">
                New feature: You can now download your yearly transaction report directly from your dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
