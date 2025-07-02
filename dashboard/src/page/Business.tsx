import { useState } from 'react'
import Button from '../ui/Button'
import { BiEdit } from 'react-icons/bi'
import { FaLinkedin, FaRegEnvelope, FaRegUser, FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter, FaUpload } from 'react-icons/fa6';
import { IoMdLocate } from 'react-icons/io';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { BizFlyer } from "../../../frontend/public/images";


const Business = () => {
  const [business, setBusiness] = useState(true);

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
          {business ? (
            <div className="flex flex-col lg:flex-row gap-12">
              <img src={BizFlyer} alt="" className="w-[450px]" />
              <div className="market-info ">

                <div className="market-name">
                  <div className="flex justify-between items-start">
                    <h1 className="text-3xl md:text-4xl lg:text-[320%] font-[800]">Business name</h1>
                    {/* edit button  */}
                    <Button
                      title="Edit Business"
                      path={"/business"}
                      className="bg-Primary hover:bg-transparent border-[1px] hover:border-Primary hover:text-Primary"
                      icon={<BiEdit className='text-white' />}
                    />
                  </div>
                  <h4 className="text-md md:text-xl lg:text-[120%] mb-2 font-bold">
                    What the Business is into
                  </h4>
                  <span className="flex items-center text-md lg:text-lg gap-1 font-semibold">
                    <FaRegUser /> Ebuka Moses
                  </span>
                </div>


                <div className="contact">
                  <ul className="flex flex-col">
                    <li className="list-none">
                      <a
                        href=""
                        className="flex items-center text-md lg:text-lg gap-1 font-semibold"
                      >
                        <MdOutlinePhoneAndroid />
                        07038689968
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="flex items-center text-md lg:text-lg gap-1 font-semibold"
                      >
                        <FaRegEnvelope />
                        executive16@gmail.com
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="flex items-center text-md lg:text-lg gap-1 font-semibold"
                      >
                        <IoMdLocate />
                        Abuja
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex my-3 gap-3">
                  <a href="/" className="text-2xl">
                    <FaSquareFacebook />
                  </a>
                  <a href="/" className="text-2xl">
                    <FaSquareInstagram />
                  </a>
                  <a href="/" className="text-2xl">
                    <FaSquareXTwitter />
                  </a>
                  <a href="/" className="text-2xl">
                    <FaLinkedin />
                  </a>
                </div>
                <hr />
                <div className="mt-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                    qui velit, enim accusantium ratione vitae provident tenetur
                    perspiciatis saepe magni aperiam doloremque, at blanditiis libero
                    sint ab animi! Quia exercitationem a quam reiciendis modi beatae
                    eum eveniet, assumenda sed corrupti natus cupiditate laborum
                    neque? Sequi maiores, temporibus exercitationem quia labore cum
                    minus reprehenderit facilis quo rerum adipisci quisquam pariatur
                    quae quasi corrupti est tempore cumque reiciendis eligendi magni
                    fugit, quas nobis. Sapiente autem et omnis. Natus, blanditiis
                    aliquam, quod dolor provident esse quidem, quae ex vero veniam
                    nisi optio. Esse possimus deserunt praesentium necessitatibus
                    molestias voluptas quia fugit ea quod!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form>
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
            </form>)}
        </div>
      </div>
    </>
  )
}

export default Business