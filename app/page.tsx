import VerticalRectangle from '@/components/VerticalRectangle'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import LoginForm from '@/components/LoginForm'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import AboutCard from '@/components/aboutcard'

export default function Home() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <main className='container mx-auto p-4 justify-center items-center flex flex-col gap-5'>
        {/* First Row */}
        <div className="flex flex-col gap-5 mx-auto lg:flex-row mb-8">
          <div className="flex flex-col-reverse lg:flex-row">
            <VerticalRectangle />
            <div className="flex flex-col gap-5 lg:ml-10 mb-5">
              <Carousel />
              <AboutCard />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col gap-5 mx-auto lg:flex-row mb-8">
          <VerticalRectangle />
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
