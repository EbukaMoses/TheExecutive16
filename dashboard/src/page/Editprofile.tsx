import {
  
  FaUpload,
} from "react-icons/fa6";
import Button from "../ui/Button";

const Editprofile = () => {
  const hobby = [
    "music",
    "movie",
    "travel",
    "making friends",
    "browsing",
    "sleeping",
    "swiming",
    "reading",
    "drawing",
    "writing",
    "sport",
    "gym",
  ];


  return (
    <div>
      <div className="card flex flex-col">
        {/* Personal Info  */}
        <div>
          <h2 className="font-bold mb-5 uppercase">*Personal Info.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5">
            {/* First Name  */}
            <div className="flex flex-1 flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                First Name:
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              />
            </div>

            {/* Last Name  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Last Name:
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              />
            </div>

            {/* E-mail  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                E-mail:
              </label>
              <input
                type="text"
                placeholder="E-mail"
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              />
            </div>

            {/* Phone  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Phone:
              </label>
              <input
                type="text"
                placeholder="Phone"
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              />
            </div>

            {/* Gender  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Gender:
              </label>
              <select
                name=""
                id=""
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              >
                <option value="">--select--</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>

            {/* Date of Birth  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Date of Birth:
              </label>
              <input
                type="date"
                placeholder="Date of Birth"
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              />
            </div>

            {/* Status  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Status:
              </label>
              <input
                type="text"
                placeholder="e.g Single/Married/Disvorced"
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              />
            </div>

            {/* State of Origin  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                State of Origin:
              </label>
              <input
                type="text"
                placeholder="e.g Anambra State"
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              />
            </div>

            {/* Profile Picture  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Profile Picture:
              </label>
              <input
                type="file"
                placeholder="Profile Picture"
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              />
            </div>
          </div>
        </div>

        <hr className="w-full my-5" />

        {/* Occupation  */}
        <div>
          <h2 className="font-bold mb-5 uppercase">*Occupation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-5">
            {/* Proffession  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Profession:
              </label>
              <select
                name=""
                id=""
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              >
                <option value="">--select--</option>
                <option value="">Business</option>
                <option value="">Civil Servant</option>
                <option value="">Others</option>
              </select>
            </div>

            {/* Position  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Position:
              </label>
              <input
                type="text"
                placeholder="e.g CEO/HR/Sales Assistant/ Marketer"
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              />
            </div>

          </div>
        </div>

        <hr className="w-full my-5" />

        {/* Secondary School Attended  */}
        <div>
          <h2 className="font-bold mb-5 uppercase">
            *Secondary School Attended
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-5">
            {/* School Name  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                School Name:
              </label>
              <input
                type="text"
                placeholder="e.g Saint Mary's High School Ifitedunu, Anambra State"
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              />
            </div>

            {/* Year of Grad.  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Year of Grad.:
              </label>
              <input
                type="text"
                placeholder="e.g 2007"
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              />
            </div>


          </div>
        </div>

        <hr className="w-full my-5" />

        {/* Hobby & Social Media Handles  */}
        <div>
          <h2 className="font-bold mb-5 uppercase">
            *Hobby & Social Media Handles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-5">
            {/* Hobby  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Hobby:
              </label>
              <select
                name=""
                id=""
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              >
                <option value="">--select--</option>
                {hobby.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Linkedin  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Linkedin:
              </label>
              <input
                type="text"
                placeholder="e.g bukan_moses"
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
                placeholder="e.g bukan_moses"
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
                placeholder="e.g bukan_moses"
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
                placeholder="e.g bukan_moses"
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              />
            </div>
            {/* Snapchat  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Snapchat:
              </label>
              <input
                type="text"
                placeholder="e.g bukan_moses"
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              />
            </div>
          </div>
        </div>

        <hr className="w-full my-5" />

        {/* Residential Address  */}
        <div>
          <h2 className="font-bold mb-5 uppercase">*Residential Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-5">
            {/* Address  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Address:
              </label>
              <input
                type="text"
                placeholder="e.g 2/3 Olatilewa Street Lawanson"
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              />
            </div>

            {/* City  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                City:
              </label>
              <input
                type="text"
                placeholder="e.g Surulere"
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              />
            </div>

            {/* State  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                State:
              </label>
              <select
                name=""
                id=""
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              >
                <option value="">--select--</option>
                <option value="">Lagos</option>
              </select>
            </div>
            {/* Country  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Country:
              </label>
              <select
                name=""
                id=""
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none"
              >
                <option value="">--select--</option>
                <option value="">Nigeria</option>
              </select>
            </div>
          </div>
        </div>

        <hr className="w-full my-5" />

        {/* About Yourself  */}
        <div>
          <h2 className="font-bold mb-5 uppercase">*About Yourself</h2>
          <div className="grid ">
            {/* Bio  */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-base whitespace-nowrap">
                Bio:
              </label>
              <textarea
                name=""
                rows={10}
                placeholder="Your Bio"
                className="w-full border-[1.7px] p-1 rounded-md border-gray-400 outline-none resize-none"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Button
            title="Update Bio"
            icon={<FaUpload />}
           
            className="bg-Warning text-white  inline-flex gap-2"
          />
        </div>

        {/* <div className="flex flex-col">eeeee</div> */}
      </div>
    </div>
  );
};

export default Editprofile;
