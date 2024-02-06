import React from "react";
const About: React.FC =  () => {
    return (
        <div className="h-full w-full flex justify-center items-center relative">
            <div className="absolute top-0 w-2/5 text-center my-3 py-2 rounded-full bg-[#292929]">
                关于我
            </div>
            <div className="group bg-gradient-to-r from-[#292929] to-transparent rounded-2xl px-4 py-2 from-10% transition-all duration-700 hover:to-[#292929]">
                <div className="transition-all duration-700 group-hover:to-white bg-gradient-to-r from-10% from-white to-transparent text-transparent bg-clip-text">
                    我没有太多的故事 只有和你的一段往事
                </div>
            </div>
        </div>
    )
}

export default About