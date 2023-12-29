import React from 'react'

const DocumentTable = () => {
  return (
    <div className='text-center'>
      <table className="w-3/5 border-collapse mt-8">
      <thead className="mb-4 mt-2">
      <tr className="bg-gray-500 mb-4">
        <th className="py-2 px-4 rounded-tl-lg">#</th>
        <th className="py-2">Type of Document</th>
        <th className="py-2">File</th>
        <th className="py-2 rounded-tr-lg">Attachment</th>
      </tr>
    </thead>
    <tbody className="bg-zinc-300 text-black mt-2">
        <tr className="">
          <td className=" py-2 px-4">1</td>
          <td className=" py-2">Document Type 1</td>
          <td className=" py-2" align="center"><input type="file" accept=".pdf" id="pdfFile"/></td>
          <td className=" py-2"><a href="#">Attachment 1</a></td>
        </tr>
        <tr className="">
          <td className=" py-2 px-4">2</td>
          <td className=" py-2">Document Type 2</td>
          <td className=" py-2" align="center"><input type="file" accept=".pdf" id="pdfFile"/></td>
          <td className=" py-2"><a href="#">Attachment 2</a></td>
        </tr>
        <tr className="">
          <td className=" py-2 px-4">3</td>
          <td className=" py-2">Document Type 3</td>
          <td className=" py-2" align="center"><input type="file" accept=".pdf" id="pdfFile"/></td>
          <td className=" py-2"><a href="#">Attachment 3</a></td>
        </tr>
        <tr className="">
          <td className=" py-2 px-4">4</td>
          <td className=" py-2">Document Type 4</td>
          <td className=" py-2" align="center"><input type="file" accept=".pdf" id="pdfFile"/></td>
          <td className=" py-2"><a href="#">Attachment 4</a></td>
        </tr>
        <tr className="">
          <td className=" py-2 px-4">5</td>
          <td className=" py-2">Document Type 5</td>
          <td className=" py-2" align="center"><input type="file" accept=".pdf" id="pdfFile"/></td>
          <td className=" py-2"><a href="#">Attachment 5</a></td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default DocumentTable
