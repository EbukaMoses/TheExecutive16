import { BiEdit } from 'react-icons/bi'
import Button from '../ui/Button'

const Testimony = () => {

  return (
    <><div className="card flex items-center justify-between gap-10">
      <p className="text-Danger text-[12px] md:text-base leading-none">**Please complete your Profile to get listed on the website**</p>
      <Button
        title="Add Testimony"
        path={"/addtestimony"}
        className="bg-Success hover:bg-transparent border-[1px] hover:border-Success hover:text-Success"
        icon={<BiEdit />}
      />{" "}
    </div>
      <hr className="py-5" />



      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

              <th scope="col" className="px-6 py-3">
                Content
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, adipisci. A animi accusamus exercitationem
              </th>

              <td className="px-6 py-4 flex gap-2">
                <Button className="font-medium bg-Warning md:text-[12px] md:font-semibold py-1 px-2" title="Deactivate" path="/" />
                <Button className="font-medium bg-Primary md:text-[12px] md:font-semibold py-1 px-2" title="Edit" path="/addtestimony/2" />
                <Button className="font-medium bg-Danger md:text-[12px] md:font-semibold py-1 px-2" title="Delete" path="/" />
              </td>
            </tr>

          </tbody>
        </table>
      </div>


    </>
  )
}

export default Testimony