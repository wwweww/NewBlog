import React from "react";
import {SideBarProps} from "../../types/props";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const SideBar: React.FC<SideBarProps> = ({
                                             items = [],
                                             className,
                                             defaultActiveKey,
                                             onChange = (e) => {
                                                 console.log(e)
                                             }
                                         }) => {
    return (
        <div className={className}>
            <div className={"side flex-1"}>
                <div className={"avatar px-2 py-4"}>
                    <div className={"relative"}>
                        <img className={"size-7 rounded-full"} src="https://q1.qlogo.cn/g?b=qq&nk=2646787260&s=640"
                             alt="Asadz"/>
                        <div className={"absolute right-0 bottom-0"}>
                            <svg className="icon size-3 bg-black rounded-full p-[.6px]" viewBox="0 0 1024 1024"
                                 version="1.1" xmlns="http://www.w3.org/2000/svg" width="200"
                                 height="200">
                                <path
                                    d="M146.285714 301.129143L302.592 146.285714l627.346286 632.905143-156.233143 154.916572L146.285714 301.129143z"
                                    fill="#ED6B7E"></path>
                                <path
                                    d="M299.739429 247.881143l-52.370286 51.931428 526.336 530.870858 52.370286-51.931429L299.739429 247.954286zM146.285714 301.714286l624.64 630.052571 156.233143-154.916571-624.64-630.052572L146.285714 301.714286z"
                                    fill="#ED6B7E"></path>
                                <path
                                    d="M512 1024c-282.331429 0-512-229.668571-512-512s229.668571-512 512-512 512 229.668571 512 512-229.668571 512-512 512zM512 119.661714A392.777143 392.777143 0 0 0 119.661714 512 392.777143 392.777143 0 0 0 512 904.338286 392.777143 392.777143 0 0 0 904.338286 512 392.777143 392.777143 0 0 0 512 119.661714z"
                                    fill="#ED6B7E"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className={"bar text-center"}>
                    <ul>
                        {items.map((i, idx) => (
                            <li key={idx} onClick={()=>{
                                if (i.handle !== undefined) {
                                    i.handle()
                                }
                            }}>{<FontAwesomeIcon
                                className="text-[#b5b5b5] bg-gray-50/10 p-2 rounded-lg transition-all duration-500 hover:text-indigo-500 hover:bg-gray-50/15 hover:rounded-xl active:text-indigo-600 active:bg-gray-100/10 size-5 mb-1"
                                size="lg" icon={i.icon} />}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div>

            </div>
        </div>

    )
}

export default SideBar;