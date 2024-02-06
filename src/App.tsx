import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import {HeaderProps} from "./types/props";
import Furry from "./pages/furry";
import type {HeaderItem} from "./types/props"
import Home from "./pages/Home";
import Media from "./pages/Media";
import About from './pages/About';


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

    useEffect(() => {
        if (tabKey === null) {
            let FirstTabKey = TabItems![0].key
            setTabKey(FirstTabKey)
        }
    }, [])

    const toggleTabs = (key:HeaderItem | undefined) => {
        console.log(key)
        setTabKey(key!.key)
    }

    return (
        <div className="App">
            <div
                className={"h-screen w-screen flex justify-center items-center bg-gradient-to-r from-gray-400 from-10% to-gray-950"}>
                <div
                    className={"w-[1000px] h-[670px] rounded-lg shadow-2xl bg-black/40 backdrop-blur-2xl flex flex-nowrap p-8 text-white font-sourceCode font-normal flex-col absolute"}>
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
