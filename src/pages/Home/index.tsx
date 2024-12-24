import React, {useEffect, useState} from "react";
import List from "../../components/List";
import ZP from "../../image/1706725834900.jpg"

const Home: React.FC = () => {
    const fsUrl = "https://api.xygeng.cn/one"
    const [fs, setFs] = useState<string>("")
    const [fp, setFp] = useState<string>()

    const setData = async () => {
        let isValidData = false

        while (!isValidData) {
            const rp = await fetch(fsUrl)
            const result = await rp.json()
            let tempFs: string = result["data"]["content"]
            let tempFp = result["data"]["origin"]

            if (tempFs!.length <= 40) {
                isValidData = true
                console.log(result)
                setFs(tempFs)
                setFp(tempFp)
            } else {
                // await new Promise(resolve => setTimeout(resolve, 500))
            }
        }
    }

    useEffect(() => {
        setData()
    }, [])

    const handleSfClick = () => {
        setData()
    }

    return (
        <div className={"p-3 h-full w-full flex"}>
            <div className={""}>
                <div
                    className={"rounded-xl shadow bg-gradient-to-br from-60% from-[#292929] to-[#222222] py-2 pl-3 pr-10 mx-3 my-4 leading-4"}>
                    <p className={"text-[.7rem] opacity-90"}>你好，很高兴认识你😀</p>
                    <p className={"text-2xl"}>我是 Asadz</p>
                    <p className={"text-[.7rem] opacity-90"}>是一名 cs专业、大学在读学生</p>
                </div>

                <div className={"rounded-xl shadow mx-3 divide-y-2 divide-[#c29ba5]"}>
                    <List title={"Skill"} items={[
                        "Python",
                        "Golang",
                        "MySql",
                        "React",
                        "tailwind"
                    ]}/>
                </div>

                <div className={"rounded-xl shadow mx-3 divide-y-2 divide-[#c29ba5] my-4"}>
                    <List title={"Plan"} items={[
                        "CSAPP",
                        "CLRS",
                        "Apologize2sdVOIT"
                        // "Rust"
                    ]}/>
                </div>
            </div>

            <div className={"flex-1 p-2"}>
                <div className={"w-full rounded-lg shadow-lg max-h-[37%] overflow-y-hidden relative mt-2"}>
                    <img className={"max-h-full z-0 -translate-y-16"} src={ZP} alt="img"/>
                    <div
                        className={"absolute top-0 bottom-0 left-0 right-0 bg-black/20 backdrop-blur-[0] flex flex-col-reverse py-3 px-4"}>
                        <span className={"text-white"}>这是哪里</span>
                    </div>
                </div>

                <div className={"flex h-[33%] w-full relative my-3 rounded-xl shadow-lg trapezoid-main"}>
                    <div
                        className={"absolute h-full left-0 w-[66%] bg-[#222222] trapezoid-left rounded-l-xl p-3 leading-6 hover:scale-105 transition duration-500 ease-in-out"}>
                        <p>熟悉Gin + Gorm后端开发</p>
                        <p>还会一点爬虫</p>
                        <p>重度VIM依赖症患者</p>
                        <p>目前正在学习前端技术</p>
                    </div>

                    <div
                        className={"absolute h-full right-0 w-[66%] bg-[#1d1d1d] trapezoid-right rounded-r-xl p-3 flex flex-col-reverse float-end hover:scale-105 transition duration-500 ease-in-out"}>
                        <div className={"absolute right-3"}>
                            <p>荒诞存在主义者</p>
                            <p>加缪的忠实信徒</p>
                        </div>
                    </div>
                </div>

                <div onClick={handleSfClick} className={"bg-[#222222] rounded-xl shadow-lg text-center p-2"}>
                    <p>{fs}</p>
                    <p>{fp}</p>
                </div>

            </div>
        </div>
    )
}

export default Home