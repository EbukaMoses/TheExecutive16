import { IoClose } from 'react-icons/io5'
import { Mike } from '../../public/images'
import { FaEnvelope, FaLinkedin, FaSkype, FaUserCircle } from 'react-icons/fa'
import { SlBriefcase } from 'react-icons/sl'
import { IoMdLocate } from 'react-icons/io'
import { FaSquareFacebook, FaSquareInstagram, FaSquarePhone, FaSquareXTwitter } from 'react-icons/fa6'

const MemberModal = ({ setModal }: { setModal: (value: boolean) => void }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50  z-50 " >
            <div className="absolute  bg-[#fff] w-[90%] overflow-auto lg:w-[90%] h-[90vh] flex flex-col rounded-lg shadow-lg">
                {/* @notice profile header  */}
                <div className="flex items-center justify-between w-full bg-[#fff] shadow-md p-2 lg:py-4 lg:px-8 mb-8">
                    <h2 className='text-2xl font-bold'>Profile</h2>
                    <span className="text-lg font-bold cursor-pointer  !z-[999]" onClick={() => setModal(false)}><IoClose className="text-2xl text-black font-extrabold" /></span>
                </div>

                <div className="flex flex-col lg:flex-row">
                    {/* @notice picture section  */}
                    <div className="w-full lg:w-[40%] flex flex-col overflow-auto items-center justify-center  border-r-2 border-gray-300 px-4 lg:pr-10">
                        <div className="w-[250px] mb-3 overflow-hidden rounded-3xl">
                            <img src={Mike} alt="" className="w-full object-cover" />
                        </div>
                        <div className="px-10 mt-5 flex flex-col gap-1">
                            <h1 className="flex items-center gap-[10px] text-2xl font-bold">
                                <FaUserCircle />
                                Kalu Izzy
                            </h1>
                            <h4 className="flex items-center gap-[10px] text-lg font-semibold">
                                <SlBriefcase /> Software Developer
                            </h4>
                            <h4 className="flex items-center gap-[10px] text-lg font-semibold">
                                <IoMdLocate />
                                Abuja
                            </h4>
                            <hr className="my-[10px]" />
                            <div className="flex justify-around gap-2 text-xl text-DarkGray">
                                <a href="" className='hover:text-DarkRed'>
                                    <FaSquarePhone />
                                </a>
                                <a href="">
                                    <FaEnvelope />
                                </a>
                                <a href="">
                                    <FaSkype />
                                </a>
                                <a href="/">
                                    <FaSquareFacebook />
                                </a>
                                <a href="/">
                                    <FaSquareInstagram />
                                </a>
                                <a href="/">
                                    <FaSquareXTwitter />
                                </a>
                                <a href="/">
                                    <FaLinkedin />
                                </a>
                            </div>
                            <hr className="my-[5px]" />
                            <div className="flex gap-1 text-[10px] flex-wrap font-semibold p-1">
                                <h5 className="text-base font-bold">Hobby:</h5>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
                                        Traveling
                                    </span>
                                    <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
                                        Reading
                                    </span>
                                    <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
                                        Singing
                                    </span>
                                    <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
                                        Making Friends
                                    </span>
                                    <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
                                        Browsing
                                    </span>
                                    <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
                                        Singing
                                    </span>
                                    <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
                                        Cooking
                                    </span>
                                    <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
                                        Drawing
                                    </span>
                                    <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
                                        Dancing
                                    </span>
                                    <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
                                        Sport
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[60%] px-12">
                        <div className="flex gap-3">
                            <div className='px-4 py-1 bg-DarkRed text-white rounded-lg cursor-pointer'>
                                About
                            </div>
                            <div className='px-4 py-1 bg-DarkRed text-white rounded-lg cursor-pointer'>
                                About
                            </div>
                            <div className='px-4 py-1 bg-DarkRed text-white rounded-lg cursor-pointer'>
                                About
                            </div>
                        </div>
                        <div className=" flex flex-col items-center justify-center">
                            <h2 className="text-lg font-bold">What is a Wallet?</h2>
                            <div className="flex items-center gap-4 mb-10 justify-center">
                                {/* <img src={} className="w-10 h-10" alt="" /> */}
                                <div>
                                    <h4 className="text-md font-bold">A Home for your Digital Assets</h4>
                                    <p>Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 justify-center">
                                {/* <img src={m2} className="w-10 h-10" alt="" /> */}
                                <div>
                                    <h4 className="text-md font-bold">A New Way to Log In</h4>
                                    <p>Instead of creating new accounts and passwords on every website, just connect your wallet.</p>
                                </div>
                            </div>
                        </div>
                        {/* <img src={img} alt="" className="w-[80%]" /> */}
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Get a Wallet
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default MemberModal
