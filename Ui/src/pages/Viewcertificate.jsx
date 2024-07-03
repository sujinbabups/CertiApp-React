import React from 'react'
import { useParams } from 'react-router-dom'

const ViewCertificate = () => {

 


  return (
<>
<div className="container mx-auto p-6 bg-gray-100 shadow-xl rounded-xl">
  <div className="border-4 border-green-500 p-8 bg-white">
    <div className="border-2 border-green-400 p-4 bg-gray-50">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-green-900">Kerala Blockchain Academy</h2>
      </div>
      <div className="mt-8">
        <div className="flex justify-center">
          <div className="w-3/4 text-center">
            <span className="text-2xl font-semibold underline text-green-700">
              Name: TBD
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-center">
          <div className="w-3/4 text-center">
            <span className="text-xl italic text-gray-600">has earned</span>
            <span className="text-2xl font-bold text-green-800 block">Grade: TBD</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-center">
          <div className="w-3/4 text-center">
            <span className="text-xl italic block text-gray-600">while completing the training course entitled</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-center">
          <div className="w-3/4 text-center">
            <span className="text-2xl font-semibold underline block text-green-700">Course: TBD</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <div className="text-left">
            <span className="text-xl font-bold text-green-800">Certificate ID: TBD</span>
          </div>
          <div className="text-right">
            <span className="text-xl text-gray-700">Date of Completion: TBD</span><br/>
            <span className="text-xl text-gray-700">Place: Trivandrum</span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-right">
          <span className="block font-bold text-green-900">(sd/-)</span>
          <span className="block font-bold text-green-900">Director</span>
        </div>
      </div>
    </div>
  </div>
</div>



</>
  )
}
const {id}=useParams()
const certificateLoader=async ()=>{
  const res=await fetch(`/certificate:${id}`)
  const data=await res.json()
  return data;
}

export {ViewCertificate as default,certificateLoader}
