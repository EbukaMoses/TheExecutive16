import User from '/images/User.jpg';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Member = () => {
  return (
    <div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase  dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-700 hover:bg-gray-30 dark:hover:bg-gray-300">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" >
                <Link to="/member/2" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"> <img className="w-10 h-10 rounded-full" src={User} alt="Jese image" />
                  <div className="ps-3">
                    <div className="text-base font-semibold">Neil Sims</div>
                    <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                  </div>
                </Link>
              </th>
              <td className="px-6 py-4">
                React Developer
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  {/* <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online */}
                  <span className='py-1 px-2 border-2 border-Warning rounded-md text-Warning' title="Pending">Pending</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-2 items-center">
                  <Button className="font-medium bg-Success md:text-[12px] md:font-semibold py-1 px-2" title="View" path="/" />
                  <Button className="font-medium bg-Primary md:text-[12px] md:font-semibold py-1 px-2" title="Edit" path="/memberedit/2" />
                  <Button className="font-medium bg-Warning md:text-[12px] md:font-semibold py-1 px-2" title="Deactivate" path="/" />
                  <Button className="font-medium bg-Danger md:text-[12px] md:font-semibold py-1 px-2" title="Delete" path="/" /></div>
              </td>
            </tr>
          </tbody>
        </table>
        <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4" aria-label="Table navigation">
          <span className="text-sm font-normal text-Black  mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 ">1-10</span> of <span className="font-semibold ">1000</span></span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
              <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  )
}

export default Member