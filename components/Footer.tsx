import React from 'react';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div className='p-10 bg-gray-500 text-gray-200'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            <div className='mb-5'>
              <h4><strong>Nodal Officer</strong></h4>
              Yogesh Gupta,<br />
              Department of Industries,<br />
              Government of Himachal Pradesh,<br />
              Baddi - 173205<br /><br />
              <strong>Phone : </strong><br />
              <strong>Email : </strong>
            </div>
            <div className='mb-5'>
              <h4><strong>Quick Links</strong></h4>
              <ul>
                <Link href="/"><li className="pb-4 pl-2"><i className="fa fa-chevron-right"></i> Home</li></Link>
                <Link href="/"><li className="pb-4 pl-2"><i className="fa fa-chevron-right"></i> Services</li></Link>
                <Link href="/"><li className="pb-4 pl-2"><i className="fa fa-chevron-right"></i> Media</li></Link>
                <Link href="/"><li className="pb-4 pl-2"><i className="fa fa-chevron-right"></i> Contact us</li></Link>
              </ul>
            </div>
            <div className='mb-5'>
              <ul>
                <Link href="/"><li className="pb-4 "><i className="fa fa-chevron-right"></i> Holiday List 2024</li></Link>
                <Link href="/"><li className="pb-4 "><i className="fa fa-chevron-right"></i> Privacy Policy</li></Link>
                <Link href="/"><li className="pb-4 "><i className="fa fa-chevron-right"></i> CopyRights</li></Link>
                <Link href="/"><li className="pb-4 "><i className="fa fa-chevron-right"></i> Terms and Conditions</li></Link>
                <Link href="/"><li className="pb-4 "><i className="fa fa-chevron-right"></i> Feedback</li></Link>
              </ul>
            </div>
            <div className='mb-5'>
              <h4><strong>Office Location</strong></h4>
              WRJ8+6MV, Baddi,<br />
              Himachal Pradesh,<br />
              173205<br /><br />
              <strong>Phone : </strong><br />
              <strong>Email : </strong>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
