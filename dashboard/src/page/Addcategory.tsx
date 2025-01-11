import { useLocation } from 'react-router-dom';
import Button from '../ui/Button'
import { FaUpload } from 'react-icons/fa6'

const Addcategory = () => {
    const location = useLocation();

    return (
        <>

            <div className="card">
                <h2 className="font-bold mb-5 uppercase text-Black">{location.pathname === "/postcategory" ? (<span>* Add Post Category</span>) : (<span>*Update Post Category</span>)}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        {location.pathname === "/postcategory" ? (
                            /* Add Category Name */
                            <div>
                                <div className="flex flex-col w-full">
                                    <label htmlFor="" className="text-base whitespace-nowrap">
                                        Category Name:
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Category Name"
                                        className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
                                    />


                                    <div className="mt-5">
                                        <Button
                                            title="Add Category"
                                            icon={<FaUpload />}
                                            className="bg-Success text-white  inline-flex gap-2"
                                        />
                                    </div>
                                </div>
                            </div>) : (

                            /* Update Category Name  */
                            <div><div className="flex flex-col w-full">
                                <label htmlFor="" className="text-base whitespace-nowrap">
                                    Update Category Name:
                                </label>
                                <input
                                    type="text"
                                    placeholder="Update Category Name"
                                    className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
                                />
                            </div>

                                <div className="mt-5">
                                    <Button
                                        title="Update Category"
                                        icon={<FaUpload />}
                                        className="bg-Warning text-white  inline-flex gap-2"
                                    />
                                </div>
                            </div>)}




                    </div>
                    <div>Table to list categories</div>
                </div>
            </div>
        </>
    )

}

export default Addcategory