import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import {HeaderProps} from "./types/props";
import Furry from "./pages/furry";
import type {HeaderItem} from "./types/props"
import Home from "./pages/Home";
import Media from "./pages/Media";
import About from './pages/About';

import bg1 from "./image/bg/1.png"
import bg2 from "./image/bg/2.png"
import bg3 from "./image/bg/3.png"
import bg4 from "./image/bg/4.png"
import bg5 from "./image/bg/5.png"
import bg6 from "./image/bg/6.png"
import {getVisibilityWatcher} from "web-vitals/dist/modules/lib/getVisibilityWatcher";
import internal from "stream";


const TabItems: HeaderProps["items"] = [
    {
        key: "Home",
        label: "Home",
        children: <Home />
    },
    {
        key: "About",
        label: "About",
        children: <About />
    },
    {
        key: "Furry",
        label: "Furry",
        children: <Furry />
    },
    {
        key: "Media",
        label: "Media",
        children: <Media />
    },

]

function App() {
    const [tabKey, setTabKey] = useState<string | number | null>(null)
    const [zb, setZb] = useState({x:0, y:0})

    let interval: NodeJS.Timer
    const clanTag = "Asadz"
    let index = 0;
    let isIncreasing = true;

    const startTitle = () => {
        interval = setInterval(() => {
            const text = clanTag.slice(0, index)
            document.title = (text.length ? `[${text}]` : "") + "无名小屋"
            if (isIncreasing) {
                index++
                if (index === clanTag.length) {
                    isIncreasing = false
                }
            } else {
                index--
                if (index === 0) {
                    isIncreasing = true
                }
            }
        }, 400)

    }

    const stopTitle = () => {
        clearInterval(interval)
        document.title = "Asadz的小博客~"
    }

    const a = () => {
        if (document.hidden) {
            startTitle()
        } else {
            stopTitle()
        }
    }

    const moveMouse: (e:MouseEvent) => any = (e) => {
        setZb({
            x: e.clientX,
            y: e.clientY
        })
    }

    useEffect(() => {
        if (tabKey === null) {
            let FirstTabKey = TabItems![0].key
            setTabKey(FirstTabKey)
        }
        document.title = "欢迎呀~~"

        window.addEventListener("visibilitychange", a)
        window.addEventListener("mousemove", moveMouse)
        return () => {
            window.removeEventListener("visibilitychange", a)
            window.removeEventListener("mousemove", moveMouse)
        }
    }, [])

    const toggleTabs = (key:HeaderItem | undefined) => {
        console.log(key)
        setTabKey(key!.key)
    }
    // bg-gradient-to-r from-gray-400 from-10% to-gray-950
    return (
        <div className="App">
            <div
                className={"h-screen w-screen flex justify-center items-center bg-transparent z-50"}>
                <div className={"min-h-full min-w-full relative"}>
                    <div className={"bg-cover absolute top-0 bottom-0 right-0 left-0 transition-all duration-300 ease-linear"} style={{backgroundImage: `url(${bg1})`, zIndex: 6, backgroundPositionX: zb.x*.055 - 80, backgroundRepeat: "no-repeat", backgroundSize: "105%"}}></div>
                    <div className={"bg-cover absolute top-0 bottom-0 right-0 left-0 transition-all duration-300 ease-linear"} style={{backgroundImage: `url(${bg2})`, zIndex: 5, backgroundPositionX: zb.x*.060 - 115, backgroundRepeat: "no-repeat", backgroundSize: "105%"}}></div>
                    <div className={"bg-cover absolute top-0 bottom-0 right-0 left-0 transition-all duration-300 ease-linear"} style={{backgroundImage: `url(${bg3})`, zIndex: 4, backgroundPositionX: zb.x*.045 - 115, backgroundRepeat: "no-repeat", backgroundSize: "105%"}}></div>
                    <div className={"bg-cover absolute top-0 bottom-0 right-0 left-0 transition-all duration-300 ease-linear"} style={{backgroundImage: `url(${bg4})`, zIndex: 3, backgroundPositionX: zb.x*.030 - 115, backgroundRepeat: "no-repeat", backgroundSize: "105%"}}></div>
                    <div className={"bg-cover absolute top-0 bottom-0 right-0 left-0 transition-all duration-300 ease-linear"} style={{backgroundImage: `url(${bg5})`, zIndex: 2, backgroundPositionX: zb.x*.035 - 115, backgroundRepeat: "no-repeat", backgroundSize: "105%"}}></div>
                    <div className={"bg-cover absolute top-0 bottom-0 right-0 left-0 transition-all duration-300 ease-linear"} style={{backgroundImage: `url(${bg6})`, zIndex: 1, backgroundPositionX: zb.x*.030 - 115, backgroundRepeat: "no-repeat", backgroundSize: "105%"}}></div>
                </div>

                <div
                    className={"w-[1000px] h-[670px] rounded-lg shadow-2xl bg-black/40 backdrop-blur-2xl flex flex-nowrap p-8 text-white font-sourceCode font-normal flex-col absolute z-50"}>
                    {/*<div className={"w-[98%] h-[98%] min-w-[1000px] min-h-[670px] rounded-lg shadow-2xl bg-black/40 backdrop-blur-2xl flex flex-nowrap p-8 text-white font-sourceCode font-normal flex-col absolute"}>*/}

                    <Header items={TabItems} onChange={toggleTabs}/>

                    <div
                        className={"w-full min-h-[86%] max-h-[90%] bg-black/40 text-white rounded block"}>
                        {TabItems?.map((im =>
                            im.key === tabKey ? (
                            <div className={"h-full"} key={im.key}>{im.children}</div>
                        ) : null))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
