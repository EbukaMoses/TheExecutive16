// import { useState } from 'react'
import Button from '../ui/Button'
import { BiEdit } from 'react-icons/bi'
import { FaUpload } from 'react-icons/fa6';

const Business = () => {
  // const [business, setBusiness] = useState(false);

  return (
    <>
      <div className="card flex items-center justify-between mb-5 gap-10">
        <p className="text-Danger text-[12px] md:text-base leading-none">**Please complete your Profile to get listed on the website**</p>
        <Button
          title="Edit Business"
          path={"/business"}
          className="bg-Primary hover:bg-transparent border-[1px] hover:border-Primary hover:text-Primary"
          icon={<BiEdit />}
        />
      </div>
      <div className="">
        <div className="card">
          {/* Personal Info  */}
          <div>
            <h2 className="font-bold mb-5 uppercase">
              *About Your Business
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
              {/* Business Logo  */}
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-base whitespace-nowrap">
                  Business Logo:
                </label>
                <input
                  type="file"
                  className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
                />
              </div>

              {/* Business Flyer  */}
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-base whitespace-nowrap">
                  Business Flyer:
                </label>
                <input
                  type="file"
                  className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
                />
              </div>
              {/* Business Name  */}
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-base whitespace-nowrap">
                  Business Name:
                </label>
                <input
                  type="text"
                  placeholder="e.g Gigonest Technology Services"
                  className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
                />
              </div>

              {/* Business Address  */}
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-base whitespace-nowrap">
                  Business Address:
                </label>
                <input
                  type="text"
                  placeholder="e.g 22 Sarah Street Lekki, Lagos Nigeria"
                  className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
                />
              </div>

              {/* Business Email  */}
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-base whitespace-nowrap">
                  Business Email:
                </label>
                <input
                  type="text"
                  placeholder="e.g gigonest@gmail.com"
                  className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
                />
              </div>

              {/* Business Contact Call  */}
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-base whitespace-nowrap">
                  Business Contact Call:
                </label>
                <input
                  type="text"
                  placeholder="e.g 07059324932"
                  className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
                />
              </div>

              {/* Business Contact WhatsApp  */}
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-base whitespace-nowrap">
                  Business Contact WhatsApp:
                </label>
                <input
                  type="text"
                  placeholder="e.g 07038689968"
                  className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
                />
              </div>

              {/* Twitter  */}
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-base whitespace-nowrap">
                  Twitter:
                </label>
                <input
                  type="text"
                  placeholder="e.g gigonest"
                  className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
                />
              </div>

              {/* Facebook  */}
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-base whitespace-nowrap">
                  Facebook:
                </label>
                <input
                  type="text"
                  placeholder="e.g gigonest"
                  className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
                />
              </div>

              {/* Instagram  */}
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-base whitespace-nowrap">
                  Instagram:
                </label>
                <input
                  type="text"
                  placeholder="e.g gigonest"
                  className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
                />
              </div>

            </div>

            {/* Business Description  */}
            <div className="flex flex-col mt-5 w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Business Description:
              </label>
              <textarea name="" rows={10} placeholder='Business Description' className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none resize-none"></textarea>
            </div>
            <div className="mt-5">
              <Button
                title="Update Business"
                icon={<FaUpload />}
                className="bg-Warning
                text-white  inline-flex gap-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Business