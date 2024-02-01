import React from "react";

import PN from "../../image/69afc834de7bb4ff.png"
import PNs from "../../image/590338b85bc1e7a931039bcc7c3ddbe3.png"
import PNIcon from "../../image/a0a7be437780aa641437c1bae9f5fd56_720.png"

const Furry: React.FC = () => {
    return (
        <div className={"flex max-h-full justify-around"}>
            <div
                className={"shrink-0 basis-1/4 rounded flex flex-col items-center border-r border-gray-500/45 overflow-y-scroll overflow-x-hidden nav p-3"}>
                <div
                    className={"group w-full h-[4em] rounded-xl shadow shadow-gray-600 border-sky-300/50 bg-sky-200/20 flex flex-row-reverse relative my-1"}>
                    <img src={PNIcon}
                         className={"w-auto h-full rounded-r-xl bg-indigo-500 right-0 pl-[1px] z-10"} alt={"PN"}/>
                    <div className={"absolute bg-indigo-500 h-[100%] rounded-r-xl transition-all duration-500 w-3 group-hover:w-[100%] group-hover:rounded-l-xl z-0"} />
                    <div className={"flex-1 z-10 flex justify-center items-center"}>
                        朴诺
                    </div>
                </div>

            </div>


            <div
                className={"shrink-0 flex-1 w-2/3 px-8 py-10 flex flex-col items-center overflow-y-scroll nav mix-blend-lighten bg-gray-400/10 rounded-r"}>
                <img className={"my-3 rounded-xl shadow-xl shadow-gray-900"} src={PN} alt="朴诺"/>
                <div className={"text-justify divide-y divide-slate-500 w-[100%]"}>
                    <div>
                        <h1 className={"text-center"}>细节</h1>
                        <div className={"flex justify-around px-8 py-2"}>
                            <div className={"flex-1 basis-1/2"}>
                                眼睛处的花纹
                                <img className={"w-40 rounded shadow shadow-gray-900"} src={PNs} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className={"text-center"}>介绍</h1>
                        <div className={"indent-8"}>
                            ...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Furry;