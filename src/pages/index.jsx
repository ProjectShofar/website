import Lottie from "lottie-react"
import homeAni1 from '../assets/lotties/1.json';
import homeAni2 from '../assets/lotties/2.json';
import homeAni3 from '../assets/lotties/3.json';
import homeAni4 from '../assets/lotties/4.json';
import ShofarAppLottie from '../assets/lotties/shofarapp.json';
import TokeaPlatformLottie from '../assets/lotties/tokeaplatform.json';
import { AnimatedGridPattern } from "../components/magicui/animated-grid-pattern";
import { IoArrowForward, IoCaretForwardCircle } from "react-icons/io5";

export default function Index() {
    return (
        <>
            <div className="container w-full mx-auto h-[700px] grid md:flex justify-center items-center relative border-x border-black/10 px-8 overflow-hidden">
                <div className="flex-2 z-[1000]">
                    <div className="text-5xl mb-5">打破屏障，</div>
                    <div className='text-5xl'>让自由的声音无处不在。</div>
                    <div className='mt-6 opacity-50'>
                        Shofar 不是VPN，通过 Shofar 可以构建全新一代的VPN。<br />
                        透过 Shofar 帮助身边的人加速访问全球互联网，获取新闻、资讯。
                    </div>
                    {/* <div className='cursor-pointer bg-blue-800 px-4 py-2 text-white mt-8 inline-flex'>从这里开始学习构建</div>
                    <div className='mt-8'>获取由 Shofar 构建的免费VPN</div> */}
                </div>
                <div className='h-full flex-1 z-[100] relative opacity-30 md:opacity-100'>
                    <AnimatedGridPattern
                        numSquares={30}
                        maxOpacity={0.1}
                        duration={3}
                        repeatDelay={1}
                        className='[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 mt-30' />
                    <Lottie className="absolute bottom-[100px] right-[0px] h-[150px]" animationData={homeAni1} loop={true} />
                    <Lottie className="absolute top-[150px] h-[150px] right-[-40px] bottom-[-30px]" animationData={homeAni2} loop={true} />
                    <Lottie className="absolute bottom-[100px] left-[-50px] h-[240px]" animationData={homeAni3} loop={true} />
                    <Lottie className="absolute top-[30px] left-[50px] h-[200px]" animationData={homeAni4} loop={true} />
                </div>
            </div>
            <div id='what-is-shofar' className="w-full bg-blue-50 overflow-hidden relative z-[200]">
                <div className="container mx-auto h-full text-black relative  border-x border-black/10 px-8">
                    <img className='w-full absolute bottom-[-170px] right-0 opacity-30' src='./images/bg-hole.svg' />
                    <div className='md:flex h-full justify-start py-20'>
                        <div className="flex-1">
                            <span className='text-3xl'>什么是号角计划？</span><br />
                            <div className='mt-4'>
                                “号角”源于希伯来语 Shofar<br /><br />
                                <div className='flex items-center gap-4 my-4'>
                                    <IoCaretForwardCircle className='text-blue-800' />
                                    <div>
                                        <div className='text-blue-800 font-bold'>出处</div>
                                        <div>约书亚记 6:5、以赛亚书 58:1</div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 my-4'>
                                    <IoCaretForwardCircle className='text-blue-800' />
                                    <div>
                                        <div className='text-blue-800 font-bold'>背景</div>
                                        <div>古以色列用号角传达重要信息、呼唤警醒或庆祝胜利。</div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 my-4'>
                                    <IoCaretForwardCircle className='text-blue-800' />
                                    <div>
                                        <div className='text-blue-800 font-bold'>含义</div>
                                        <div>象征 声音的传播、信息的宣告和觉醒。</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 mt-10">
                                号角计划的灵感来源于“号角”（Shofar）的象征意义，它代表着觉醒、自由与希望。正如古老的号角声唤醒人们、传递信念，我们希望通过这一计划，打破信息封锁，为网络审查地区的人们带来信息自由的曙光。
                                <br /><br />
                                在当今世界，许多地区因审查和封锁，人们被剥夺了获取真实资讯和表达思想的权利。我们深知，信息自由是基本人权，获取真实、全面的信息是每个人应有的权利。为此，号角计划致力于开发安全、稳定且高效的工具，帮助用户绕过网络封锁，匿名且自由地访问全球资讯。
                                <br /><br />
                                我们特别注重隐私保护，确保用户的浏览行为不被追踪或监控。通过提供安全的网络环境，我们希望每个人，无论身处何地，都能平等地获取知识、自由表达思想，打破信息不对称，促进自由交流和思想传播。
                                <br /><br />
                                号角（Shofar）不仅是声音的传递，更是自由的象征。我们希望通过号角计划，让真相的声音穿越阻碍，让希望的回响激励更多人追求自由与知识。
                                <br /><br />
                                信息自由将带来更开放、更包容的世界。号角计划将不断优化技术、扩大覆盖范围，让更多人听到自由的呼唤，并为他们带去信息自由的希望与力量。
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full overflow-hidden relative">
                <div className="container mx-auto h-full text-black relative py-20 border-x border-black/10 px-8">
                    <div className='text-3xl'>正在进行</div>
                    <div className='mt-2'>
                        了解我们正在做的事情
                    </div>
                    <div className="flex mt-8 grid grid-cols-1 md:grid-cols-2">
                        <div id='shofar-app' className="flex-1 p-10 border border-b-0 md:border-b-1 md:border-r-0 border-black/10">
                            <Lottie className="h-[200px]" animationData={ShofarAppLottie} loop={true} />
                            <div className='text-xl text-blue-800'>ShofarAPP</div>
                            <div className="text-left opacity-70 text-sm mt-4">
                                ShofarAPP 是一款基于 Sing-box 的完全开源翻墙工具，旨在让网络自由变得更加简单、安全、可信。Shofar 在希伯来语中意为号角，象征着信息的传播与自由。ShofarAPP 继承了 Sing-box 强大的代理功能，同时优化了用户体验，使得翻墙操作更加便捷，即使是小白用户也能轻松上手。ShofarAPP 的核心理念是 开源透明 和 信任至上，所有代码均公开，用户可自由查看、审计或自行编译，确保无后门、无恶意代码。无论是科学上网、隐私保护，还是突破网络封锁，ShofarAPP 都致力于为用户提供稳定、高效的解决方案，让每个人都能自由访问互联网。
                            </div>
                            <div onClick={() => window.location.href = 'https://github.com/projectshofar/shofarapp'} className='cursor-pointer px-4 py-2 mt-8 inline-flex border border-blue-800 text-blue-800 flex items-center gap-2'>获取源代码<IoArrowForward /></div>
                        </div>
                        <div id='tokea-platform' className="flex-1 p-10 border border-black/10">
                            <Lottie className="h-[200px]" animationData={TokeaPlatformLottie} loop={true} />
                            <div className='text-xl text-blue-800'>TokeaPlatform</div>
                            <div className="text-left opacity-70 text-sm mt-4">
                                TokeaPlatform，意为 “掌号者”，象征着 执掌号角，传播自由。它是一个 去中心化 VPN 搭建平台，让用户能够 轻松创建、管理并分享自己的 VPN 网络，摆脱传统 VPN 服务的限制，真正掌控自己的网络自由。提供一键部署、设备互联、跨平台兼容的功能，让用户无需复杂配置，即可建立专属的小团体VPN网络，实现安全、私密的通讯。无论是朋友间共享安全上网，还是团队搭建私密通讯网络，TokeaPlatform 都能提供稳定、高速、去中心化的连接，确保数据隐私不被第三方干涉，助力每个人自由、安全地探索互联网世界。
                            </div>
                            <div onClick={() => window.location.href = 'https://github.com/projectshofar/tokea'} className='cursor-pointer px-4 py-2 mt-8 inline-flex border border-blue-800 text-blue-800 flex items-center gap-2'>获取源代码<IoArrowForward /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full border-t border-black/10'>
                <div className="py-4 px-8 items-center justify-between border-b border-black/10 container mx-auto border-x border-black/10 text-sm flex">
                    <div >Shofar<br />2025 © 保留所有权利</div>
                    <div className="md:flex items-center gap-5 cursor-pointer mt-4">
                        <div onClick={() => window.location.href = 'https://github.com/projectshofar'}>Github</div>
                        <div>隐私政策</div>
                        <div>服务条款</div>
                        <div>数据收集政策</div>
                    </div>
                </div>
            </div>
        </>
    )
}