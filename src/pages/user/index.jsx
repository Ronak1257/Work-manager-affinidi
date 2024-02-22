import React from 'react'
import { useLocalContent } from "src/lib/hooks/use-local-content";
const User = () => {
    const {email,firstName,lastName,city,postalCode,phoneNumber,country,gender}=useLocalContent();
  return (
    <div className="container mx-auto mt-8 max-w-lg">
      <div className="shadow-md rounded-lg overflow-auto my-6">
        <table className="min-w-max w-full table-auto">
          <tbody>
            <tr className="bg-gray-400 text-black uppercase text-sm leading-normal">
              <th className="py-3 px-6 " colSpan="2">User Profile</th>
            </tr>
            <tr className="bg-sky-100 border-b border-gray-200">
              <td className="py-3 px-6 text-left whitespace-nowrap font-medium">Username</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{firstName}</td>
            </tr>
            <tr className="bg-sky-200 border-b border-gray-200">
              <td className="py-3 px-6 text-left whitespace-nowrap font-medium">Full Name</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{firstName+" "+lastName}</td>
            </tr>
            <tr className="bg-sky-100 border-b border-gray-200">
              <td className="py-3 px-6 text-left whitespace-nowrap font-medium">Email</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{email}</td>
            </tr>
            <tr className="bg-sky-200 border-b border-gray-200">
              <td className="py-3 px-6 text-left whitespace-nowrap font-medium">Phone Number</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{phoneNumber}</td>
            </tr>
            <tr className="bg-sky-100 border-b border-gray-200">
              <td className="py-3 px-6 text-left whitespace-nowrap font-medium">Gender</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{gender}</td>
            </tr>
            <tr className="bg-sky-200 border-b border-gray-200">
              <td className="py-3 px-6 text-left whitespace-nowrap font-medium">City</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{city}</td>
            </tr>
            <tr className="bg-sky-100 border-b border-gray-200">
              <td className="py-3 px-6 text-left whitespace-nowrap font-medium">Country</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{country}</td>
            </tr>
            <tr className="bg-sky-200 border-b border-gray-200">
              <td className="py-3 px-6 text-left whitespace-nowrap font-medium">Postal Code</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{postalCode}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default User