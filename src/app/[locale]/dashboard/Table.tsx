import React from 'react'

const Table = () => {
  const customers = [
    { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
    { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
    { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
    { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
    { name: "Jerome Bell", company: "Google", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Active" },
    { name: "Kathryn Murphy", company: "Microsoft", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao", status: "Active" },
    { name: "Jacob Jones", company: "Yahoo", phone: "(208) 555-0112", email: "jacob@yahoo.com", country: "Brazil", status: "Active" },
    { name: "Kristin Watson", company: "Facebook", phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Inactive" },
  ];
  return (
    <div> <section className="mt-10">
          <h3 className="text-xl font-bold mb-4">All Customers</h3>
          <div className="bg-white shadow rounded-lg">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Customer Name</th>
                  <th className="px-4 py-2 text-left">Company</th>
                  <th className="px-4 py-2 text-left">Phone Number</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Country</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{customer.name}</td>
                    <td className="px-4 py-2">{customer.company}</td>
                    <td className="px-4 py-2">{customer.phone}</td>
                    <td className="px-4 py-2">{customer.email}</td>
                    <td className="px-4 py-2">{customer.country}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded-full text-white text-sm ${
                          customer.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section></div>
  )
}

export default Table