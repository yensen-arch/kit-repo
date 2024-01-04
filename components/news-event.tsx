"use client"
import { FaChevronLeft } from 'react-icons/fa';


export default function NewsEvent() {
  return (
    <main className="m-4 space-y-8">
      <div className="rounded-lg border text-card-foreground shadow-sm w-full md:w-[350px] bg-blue-400">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-semibold">News And Events</h3>
            <FaChevronLeft className="text-blue-500" size={40} />
          </div>
          <div className="max-h-[350px] overflow-y-auto">
            <ul className="text-white-300 leading-8 pl-6 list-inside">
              <li><span className="chevron text-red-500">&gt;</span> Exiting News and Events add here...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
              <li><span className="chevron text-red-500">&gt;</span> Another News And Events...</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
