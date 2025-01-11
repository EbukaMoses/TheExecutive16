import Button from '../ui/Button'
import { BiEdit } from 'react-icons/bi'

const Post = () => {
  return (
    <><div className="card flex items-center justify-between gap-10">
      <p className="text-Danger text-[12px] md:text-base leading-none">**Please complete your Profile to get listed on the website**</p>
      <Button
        title="Add Post"
        path={"/addpost"}
        className="bg-Success hover:bg-transparent border-[1px] hover:border-Success hover:text-Success"
        // onClick={ }
        icon={<BiEdit />}
      />{" "}
    </div>




      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                TITLE
              </th>
              <th scope="col" className="px-6 py-3">
                CATEGORY
              </th>
              <th scope="col" className="px-6 py-3">
                IMAGE
              </th>
              <th scope="col" className="px-6 py-3">
                COMMENT
              </th>
              <th scope="col" className="px-6 py-3">
                VIEW
              </th>
              <th scope="col" className="px-6 py-3">
                DATE
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">
                Silver
              </td>
              <td className="px-6 py-4">
                Laptop
              </td>
              <td className="px-6 py-4">
                Yes
              </td>
              <td className="px-6 py-4">
                Yes
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                <span className='py-1 px-2 border-2 border-Warning rounded-md text-Warning'>Pending</span>
              </td>
              <td className="flex items-center px-6 py-4 gap-2">
                <Button className="font-medium bg-Warning md:text-[12px] md:font-semibold py-1 px-2" title="View" path="/viewpost" />
                <Button className="font-medium bg-Primary md:text-[12px] md:font-semibold py-1 px-2" title="Edit" path="/editpost" />
                <Button className="font-medium bg-Danger md:text-[12px] md:font-semibold py-1 px-2" title="Remove" />
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Post