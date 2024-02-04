import React from "react";
import { ListProps } from "../../types/props";

const List: React.FC<ListProps> = (props) => {
    const {
        title,
        items,
        className
    } = props



    return (
        <div className={"rounded-xl shadow divide-y-2 divide-[#c29ba5] " + (className ? className : "")}>
            <div className={"rounded-t-xl text-center font-bold bg-[#292929] py-2 tracking-wider relative flex justify-center"}>
                {title ? title : "Title"}
            </div>
            <div className={"px-8 py-2 rounded-b-xl bg-[#222222]"}>
                {items ? (
                    <ul>
                        {items.map((i, idx) => (
                            <li key={idx}>{i}</li>
                        ))}
                    </ul>
                ) : (
                    <div className={"py-2 flex items-center justify-center"}>
                        <svg className="icon -translate-y-[2px] h-[2rem] w-auto mr-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2487" width="200" height="200"><path d="M831.7 369.4H193.6L64 602v290.3h897.2V602L831.7 369.4zM626.6 604.6c0 62.9-51 113.9-114 113.9s-114-51-114-113.9H117.5l103.8-198h582.5l103.8 198h-281zM502.2 131h39.1v140.6h-39.1zM236.855 200.802l27.647-27.647 99.419 99.418-27.648 27.648zM667.547 272.637l99.418-99.419 27.648 27.648-99.418 99.418z" p-id="2488" fill="#ffffff"></path></svg>
                        <span>No Data</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default List;