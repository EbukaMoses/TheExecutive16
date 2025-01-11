import { FaUpload } from "react-icons/fa6"
import Button from "../ui/Button"

const Addpost = () => {

    return (
        <><div className="card">
            <h2 className="font-bold mb-5 uppercase text-Black">*Add Post</h2>
            <div className="grid gap-5">
                {/* Post Image  */}
                <div className="flex flex-col w-full">
                    <label htmlFor="" className="text-base whitespace-nowrap">
                        Post Image:
                    </label>
                    <input
                        type="file"
                        placeholder="Post Image"
                        className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
                    />
                </div>
                {/* Post Title  */}
                <div className="flex flex-col w-full">
                    <label htmlFor="" className="text-base whitespace-nowrap">
                        Post Title:
                    </label>
                    <input
                        type="text"
                        placeholder="Post Title"
                        className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
                    />
                </div>

                {/* Category  */}
                <div className="flex flex-col w-full">
                    <label htmlFor="" className="text-base whitespace-nowrap">
                        Category:
                    </label>
                    <select name="" id="" className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none">
                        <option value="">--select--</option>
                        <option value="">Business </option>
                        <option value="">Fashion</option>
                        <option value="">Culture</option>
                    </select>
                </div>

                {/* Description  */}
                <div className="flex flex-col w-full">
                    <label htmlFor="" className="text-base whitespace-nowrap">
                        Description:
                    </label>
                    <textarea name="" id="" rows={10} placeholder="Description" className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none resize-none"></textarea>
                </div>

                <div className="mt-5">
                    <Button
                        title="Make Post"
                        icon={<FaUpload />}
                        className="bg-Success text-white  inline-flex gap-2"
                    />
                </div>
            </div>
        </div></>
    )
}

export default Addpost