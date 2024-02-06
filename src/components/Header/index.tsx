import React, {useState} from "react";
import {HeaderItem, HeaderProps} from "../../types/props";


const Header: React.FC<HeaderProps> = ({
                                           items = [],
                                           className = "",
                                           defaultActiveKey = null,
                                           onChange = function (key: HeaderItem) {
                                               console.log(key)
                                           }
                                       }) => {
    const [showTabs, setShowTabs] = useState<boolean>(false);
    const [activeKey, setActiveKey] = useState<string | number |null>(defaultActiveKey)

    return (
        <header className={"flex justify-around mb-8 " + className}>
            <div className={"text-2xl border-2 rounded py-2 px-9"}>
                Logo
            </div>

            <div className={"bg-black/40 rounded-lg min-w-[400px] flex z-0 justify-around" + (showTabs ? " px-8" : " px-32")}
                 onClick={() => {
                     setShowTabs(!showTabs)
                 }}
            >
                <div className={"h-[100%] flex justify-center items-center relative"}
                     style={{
                         display: showTabs ? "none" : "flex"
                     }}>
                    <div className={"border-b-2 border-indigo-500 absolute top-0 bottom-0 left-0 right-0"}/>
                    Welcome back
                </div>

                {showTabs ? items.map((item) => {
                    if (activeKey === null) {
                        setActiveKey(item.key)
                    }
                    return (
                        <div
                            key={item.key}
                            className={"z-10 transition ease-in-out delay-100 flex justify-center items-center relative hover:font-bold hover:shadow-orange-50 duration-300"}
                            onClick={() => {
                                onChange(item)
                            }}
                        >
                            <div className={"transition ease-in-out delay-100 duration-300 border-b-2 border-white absolute top-0 bottom-0 left-0 right-0 hover:border-b-4 hover:border-green-400"}/>
                            {item.label}
                        </div>
                    )
                }) : null}
            </div>

            <div className={"bg-black/40 rounded-lg text-[13px] flex justify-around"}>
                <div
                    className={"w-[48px] rounded-l-lg h-[100%] bg-[url(https://avatars.githubusercontent.com/u/39620657?v=4)] bg-cover"}
                >
                </div>

                <div className={"my-auto mx-3"}>
                    <p>
                        wwweww
                    </p>
                    <p className={"text-gray-400"}>
                        Offline
                    </p>
                </div>

                <div className={"h-[100%] flex items-center"}>
                    <svg className="icon max-h-[40px] max-w-[30px] ml-8 mr-2 fill-white" viewBox="0 0 1024 1024"
                         version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1151" id="mx_n_1706469779971"
                         width="200" height="200">
                        <path
                            d="M517.83 880.41c-80.34 0-171.46-3.33-238-28-73-27.07-110-77.6-110-150.18 0-24.55 7.21-49.92 21.42-75.4 12.15-21.77 29.47-43.73 51.49-65.27 21.5-21 68.17-61.52 139.16-96.38a22.5 22.5 0 0 1 19.84 40.39c-90 44.21-186.91 124.61-186.91 196.66 0 28 6.8 50.25 20.79 68.08 13.17 16.8 32.76 29.85 59.89 39.91 59.91 22.21 146 25.21 222.39 25.21s162.48-3 222.39-25.21c27.13-10.06 46.72-23.11 59.89-39.91 14-17.83 20.79-40.1 20.79-68.08 0-72-96.89-152.45-186.91-196.66a22.5 22.5 0 1 1 19.83-40.39c30.47 15 89.07 47.38 139.16 96.38 22 21.54 39.35 43.5 51.5 65.27 14.21 25.48 21.42 50.85 21.42 75.4 0 72.58-37 123.11-110 150.18-66.69 24.67-157.8 28-238.14 28z"
                            fill="#ffffff" p-id="1152"></path>
                        <path
                            d="M517.83 552.83c-47.7 0-92.4-20.69-125.86-58.25-32.8-36.83-50.87-85.58-50.87-137.41s18.07-100.58 50.9-137.42c33.46-37.56 78.16-58.25 125.86-58.25s92.4 20.69 125.86 58.25c32.8 36.84 50.87 85.64 50.87 137.42s-18.07 100.58-50.87 137.41c-33.49 37.56-78.19 58.25-125.89 58.25z m0-346.33c-72.63 0-131.73 67.59-131.73 150.67s59.1 150.66 131.73 150.66 131.73-67.59 131.73-150.66-59.1-150.67-131.73-150.67z"
                            fill="#ffffff" p-id="1153"></path>
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Header