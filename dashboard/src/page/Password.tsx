import { FaLock } from "react-icons/fa6";
import Button from "../ui/Button";

const Password = () => {
  return <div className="card">
    <h2 className="font-bold mb-5 uppercase text-Black">*Change Password</h2>
    <div className="grid grid-cols-1 md:grid-cols-1 gap-5">

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full">
          <label htmlFor="" className="text-base whitespace-nowrap">
            Old Password:
          </label>
          <input
            type="text"
            placeholder="Old Password"
            className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="" className="text-base whitespace-nowrap">
            New Password:
          </label>
          <input
            type="text"
            placeholder="New Password"
            className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
          />
        </div>

      </div>

      <div className="mt-5">
        <Button
          title="Change Password"
          icon={<FaLock />}
          className="bg-Warning text-white  inline-flex gap-2"
        />
      </div>
    </div>
  </div>;
};

export default Password;
