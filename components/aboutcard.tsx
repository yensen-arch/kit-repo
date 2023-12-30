import Image from 'next/image';

export default function AboutCard() {
  return (
    <main className='w-full md:w-[800px] h-[250px]'>
      <div className="rounded-lg border h-full shadow-sm w-full bg-[#7fdbda]">
        <div className="flex-col space-y-1.5 p-6 flex justify-center border-b">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">About Us</h3>
        </div>
        <div className="p-6">
          <p className="text-lg">
            We are a team of passionate individuals dedicated to providing the best experience for our customers. Our
            mission is to deliver innovative solutions that make a difference.
          </p>
        </div>
      </div>
    </main>
  );
}
