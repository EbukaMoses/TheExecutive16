import { RiCameraSwitchFill, RiUserCommunityFill } from "react-icons/ri";
import Container from "./Container";
import { AiFillEdit } from "react-icons/ai";

const AboutUsBox = () => {
    const initiatives = [
        {
            title: "Community",
            icon: <RiUserCommunityFill />,
            description: "Building a strong network of alumni to support each other professionally and personally.",
        },
        {
            title: "Education",
            icon: <AiFillEdit />,
            description: "Supporting educational initiatives and scholarships for current students at our alma mater.",
        },
        {
            title: "Development",
            icon: <RiCameraSwitchFill />,
            description: "Contributing to the development and improvement of facilities at Unizik.",
        },
    ];

    return (
        <div className="bg-DarkRed">
            <Container className="flex flex-col lg:flex-row gap-10 ">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {initiatives.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white border-2 border-white rounded-xl p-6 text-center shadow-md hover:shadow-md transition"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-red-300 text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl">
                                    {item.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">
                                {item.title}
                            </h3>
                            <p className="text-black">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AboutUsBox;