import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMicrophone, faMusic, faPhoneFlip, faScissors, faUser, faVideo} from '@fortawesome/free-solid-svg-icons'
import {faFaceSmile, faFolder, faImage} from "@fortawesome/free-regular-svg-icons"
import React, {useEffect, useState} from "react";
import CP from "./ContactPerson";
import MegBox from "./megBox";
import Sidebar from "./sidebar";
import {sideBarItem} from "../../types/props";
import {faBilibili, faDiscord, faGithub, faInstagram, faSteam} from "@fortawesome/free-brands-svg-icons";

type friendsType = {
    name: string,
    qq: string | number,
    msg?: string
}

const friends: friendsType[] = [
    {
        name: "𝓐𝓼𝓪𝓭𝔃",
        qq: "2646787260",
    },
    {
        name: "小牧",
        qq: "2384870275",
        msg: "可靠"
    },
    {
        name: "端",
        qq: "1807752373",
        msg: "俺滴图图呢！"
    },{
        name: "清酒既载",
        qq: "2551402667",
        msg: "可爱想x"
    },
    {
        name: "Little Black",
        qq: "1015792092"
    },
    {
        name: "古希腊掌管睡觉的神",
        qq: "1326389419",
        msg: "[图片]"
    },
]

const barList: sideBarItem[] = [
    {
        key: "Github",
        handle: () => {window.open("https://www.github.com/wwweww")},
        icon: faGithub
    },
    {
        key: "Discord",
        handle: () => {window.open("https://discord.com/users/607461975798186013")},
        icon: faDiscord
    },
    {
        key: "IG",
        handle: () => {window.open("https://www.instagram.com/thexc264/")},
        icon: faInstagram
    },
    {
        key: "Steam",
        handle: () => {window.open("https://steamcommunity.com/profiles/76561198453057253/")},
        icon: faSteam
    },
    {
        key: "BiliBili",
        handle: ()=> {window.open("https://space.bilibili.com/32420065")},
        icon: faBilibili
    },
    {
        key: "Music",
        handle: () => {window.open("https://music.163.com/#/user/home?id=376278606")},
        icon: faMusic
    },
]


const Media: React.FC = () => {
    const [zb, setZb] = useState({x: 0, y: 0})

    const moveMouse: (e: MouseEvent) => any = (e) => {
        // console.log(e.clientX)
        // console.log(e.clientY)
        setZb({
            x: e.clientX - (window.innerWidth - 1000) / 2,
            y: e.clientY - (window.innerHeight - 640) / 2
        })
    }

    useEffect((() => {
        window.addEventListener("mousemove", moveMouse)
        return () => {
            window.removeEventListener("mousemove", moveMouse)
        }
    }), [])


    return (
        <div className={"flex h-full "}>
            {/*test*/}
            <div className={"fixed z-50 select-none"} style={{
                top: zb.y,
                left: zb.x,
                transform: "translate(-50%, -50%)"
            }}>
            </div>


            {/*侧边栏*/}
            <div className={"flex flex-col bg-black/80 rounded-l h-full"}>
                <Sidebar items={barList}/>
            </div>

            <div className={"relative h-full"}>
                <header className={"flex bg-[#1b1b1b]/80 pt-4 pb-3 px-4 absolute top-0"}>
                    <input className={"bg-[#282828]/80 shadow rounded w-44 focus:outline-none text-sm px-1"} type="text"
                           alt={"搜索"}/>

                    <button className={"ml-2 size-6 bg-[#282828]/80 shadow rounded p-1.5 hover:bg-[#393939]"}>
                        <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" width="NaN" height="NaN">
                            <path d="M455.111111 170.666667h113.777778v682.666666H455.111111z" fill="#797979"></path>
                            <path d="M853.333333 455.111111v113.777778H170.666667V455.111111z" fill="#797979"></path>
                        </svg>
                    </button>
                </header>

                <div className={"h-full bg-[#282828] w-60 pt-[3.2em] overflow-y-scroll nav"}>
                    <ul className={"m-0 p-0"}>
                        {friends.map((friend, idx) => {
                            return (
                                <li key={idx}>
                                    <CP name={friend.name} qq={friend.qq} isSelector={idx === 0}
                                        msg={friend.msg}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>


            <div className={"flex-1 bg-[#111111] divide-y divide-white/10 flex-col justify-around"}>
                <div className={"h-[3.2em] pt-4 pb-3 pl-5 flex"}>
                    <div className={"flex-1"}>
                        𝓐𝓼𝓪𝓭𝔃
                    </div>

                    <div className={"svg mx-2 flex justify-center items-center -translate-y-1"}>
                        <FontAwesomeIcon className="mr-3" icon={faPhoneFlip} size="lg" color="#b5b5b5"/>
                        <FontAwesomeIcon className="mr-3" icon={faVideo} size="lg" color="#b5b5b5"/>
                    </div>
                </div>

                <div className={"h-72"}>
                    <MegBox meg={"想要我的联系方式的话QQ就只有2646787260一个啦"} senderQQ={"2646787260"}/>
                    <MegBox meg={"其他的话...还有个Github！ 叫 wwweww 直接搜索就好了，嘿嘿"} senderQQ={"2646787260"}/>
                </div>

                <div className={"h-24"}>
                    <div className={"h-8 py-2 px-4"}>
                        <FontAwesomeIcon className="mr-4 hover:text-indigo-500" icon={faFaceSmile} size="lg"
                                         color="#b5b5b5"/>
                        <FontAwesomeIcon className="mr-4 -rotate-90 hover:text-indigo-500" icon={faScissors} size="lg"
                                         color="#b5b5b5"/>
                        <FontAwesomeIcon className="mr-4 hover:text-indigo-500" icon={faFolder} size="lg"
                                         color="#b5b5b5"/>
                        <FontAwesomeIcon className="mr-4 hover:text-indigo-500" icon={faImage} size="lg"
                                         color="#b5b5b5"/>
                        <FontAwesomeIcon className="hover:text-indigo-500" icon={faMicrophone} size="lg"
                                         color="#b5b5b5"/>
                    </div>

                    <div className={"w-full h-full px-4 py-1"}>
                        <input
                            className={"bg-transparent focus:outline-none block align-top"}
                            type="text"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Media;