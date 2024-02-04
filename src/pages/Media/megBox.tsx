import React from "react";

interface MegBoxProps {
    meg: string,
    senderQQ: string,
    className?: string | undefined
}

const MegBox: React.FC<MegBoxProps> = (props) => {
    const {
        meg,
        senderQQ,
        className
    } = props
    return (
        <div className={"flex p-2 "+className}>
            <div className={"mx-2"}>
                <img className={"size-7 rounded-full"} src={`https://q1.qlogo.cn/g?b=qq&nk=${senderQQ}&s=640`} alt=""/>
            </div>
            <div className={"rounded-xl p-2 bg-[#262626] text-[.5em]"}>
                {meg}
            </div>
        </div>
    )
}

export default MegBox;