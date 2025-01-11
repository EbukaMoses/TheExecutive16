import { useLocation } from 'react-router-dom';
import Button from '../ui/Button'
import { FaUpload } from 'react-icons/fa6'

const Addtestimony = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname === "/addtestimony" ? (<div className="card">
                <h2 className="font-bold mb-5 uppercase text-Black">*Add Testimony</h2>
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
                            title="Make Testimony"
                            icon={<FaUpload />}
                            className="bg-Success text-white  inline-flex gap-2"
                        />
                    </div>
                </div>
            </div>) : (
            /* Edit Testimony  */ 
                <div className="card">
            <h2 className="font-bold mb-5 uppercase text-Black">*Edit Testimony</h2>
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
                        title="Update Testimony"
                        icon={<FaUpload />}
                        className="bg-Warning text-white  inline-flex gap-2"
                    />
                </div>
            </div>
        </div>)}
            


            
        </>
    )
}

export default Addtestimony