import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
})

export default function Page() {
  return (
    <div className="flex flex-col bg-neutral-50 items-center justify-center h-screen dark">
      <div className="w-full max-w-md bg-neutral-500 rounded-lg shadow-md p-6">
        <h2 className={`${poppins.className} text-2xl font-bold text-gray-200 mb-4`}>Rate an Establishment</h2>
        <form className="flex flex-col">
          <input placeholder="First Name" className="bg-gray-50 text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
          <input placeholder="Last Name" className="bg-gray-50 text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
          <input placeholder="Email" className="bg-gray-50 text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />
          <input placeholder="Establishment" className="bg-gray-50 text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" disabled />
          {/* <select className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
            <option value="product-1">Product 1</option>
            <option value="product-2">Product 2</option>
            <option value="product-3">Product 3</option>
          </select> */}
          <input placeholder="Rating (1-5)" className="bg-gray-50 text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number" />
          <textarea placeholder="Feedback" className="bg-gray-50 text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" name="feedback" defaultValue={""} />
          <button className={`${poppins.className} bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150`} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

