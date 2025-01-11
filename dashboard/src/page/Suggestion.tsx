import Button from '../ui/Button';
import { FaUpload } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';

const Suggestion = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/suggestion" ? (<div className="card">
        <h2 className="font-bold mb-5 uppercase text-Black">{location.pathname === "/suggestion" ? (<span>* Add Suggestion</span>) : (<span>*Update Suggestion</span>)}</h2>
        <div className="grid gap-5">

          {/* Description  */}
          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-base whitespace-nowrap">
              Description:
            </label>
            <textarea name="" id="" rows={10} placeholder="Description" className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none resize-none"></textarea>
          </div>

          <div className="mt-5">
            <Button
              title="Make Suggestion"
              icon={<FaUpload />}
              className="bg-Success text-white  inline-flex gap-2"
            />
          </div>
        </div>
      </div>) : (
        /* Edit Suggestion  */
        <div className="card">
          <h2 className="font-bold mb-5 uppercase text-Black">*Edit Suggestion</h2>
          <div className="grid gap-5">

            {/* Description  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Description:
              </label>
              <textarea name="" id="" rows={10} placeholder="Description" className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none resize-none"></textarea>
            </div>

            <div className="mt-5">
              <Button
                title="Update Suggestion"
                icon={<FaUpload />}
                className="bg-Warning text-white  inline-flex gap-2"
              />
            </div>
          </div>
        </div>)}
    </>
  )
}

export default Suggestion