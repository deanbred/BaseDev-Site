import Image from "next/image"
import styles from "@/styles/Home.module.css"
import ContractCalls from "@/components/ContractCalls"
import ReactDOM from "react-dom"
import BurgerMenu from "react-burger-menu"
import Head from "next/head"
import Header from "@/components/Header"
import { SocialIcon } from "react-social-icons"
import { PhotoAlbum } from "react-photo-album"

import React, { Component } from "react"
import { pushRotate as Menu } from "react-burger-menu"

const images = [
  { src: "/images/meme00.jpg" },
  { src: "/images/meme01.jpg" },
  { src: "/images/meme02.jpg" },
  { src: "/images/meme03.jpg" },
  { src: "/images/meme04.jpg" },
  { src: "/images/meme05.jpg" },
  { src: "/images/meme06.jpg" },
]

var style = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "36px",
    left: "36px",
    top: "100px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "flex",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}

export default function Home() {
  return (
    <>
      <Head>
        <title>OnlyFrens</title>
        <meta name="description" content="Crypto Token Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_large.png" />
      </Head>
      <Header />

      <div id="outer-container" className="font-kake">
        <Menu
          styles={style}
          left
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        >
          <a
            id="contract"
            className="menu-item text-[#69974f] hover:text-[#b16541]"
            href="https://etherscan.io/token/0x5Cdbd3288740BE2E83D8421a18d163c4eB022966"
          >
            Contract
          </a>

          <a
            id="chart"
            className="menu-item text-[#69974f] hover:text-[#b16541]"
            href="https://dexscreener.com/ethereum/0x5Cdbd3288740BE2E83D8421a18d163c4eB022966"
          >
            Live Chart
          </a>

          <a
            id="twitter"
            className="menu-item text-[#69974f] hover:text-[#b16541]"
            href="https://twitter.com/Only_Frens_"
          >
            Twitter
          </a>

          <a
            id="tg"
            className="menu-item text-[#69974f] hover:text-[#b16541]"
            href="https://t.me/"
          >
            Telegram
          </a>
        </Menu>
        <main id="page-wrap">
          <div className="flex min-h-screen flex-col overflow-hidden bg-no-repeat bg-contain bg-[url('../public/5G.jpg')]">
            <div className="p-3 mt-32 m-auto text-center max-w-3xl font-kake bg-stone-200 opacity-70 md:text-base sm:text-base rounded-2xl">
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>

            <div className="mt-64 m-auto">
              <audio id="music" controls autoPlay>
                <source src="lemon_song.mp3" type="audio/mp3" />
              </audio>

              <div className="p-1 mt-2 m-auto text-center max-w-3xl font-kake bg-stone-200 opacity-80 md:text-base sm:text-base rounded-2xl">
                <div className="flex flex-row items-center justify-center space-x-6">
                  <SocialIcon
                    url="https://twitter.com/Only_Frens_"
                    network="twitter"
                    fgColor="white"
                  />
                  <SocialIcon
                    url="https://t.me/+a8vnELON19hkYzJh"
                    network="telegram"
                    fgColor="white"
                  />
                  <SocialIcon
                    url="https://discord.com/"
                    network="discord"
                    fgColor="white"
                  />
                </div>
              </div>
            </div>

            <div className="p-3 mt-2 m-auto text-center max-w-3xl font-kake bg-stone-200 opacity-70 md:text-base sm:text-base rounded-2xl">
              <a
                className=""
                data-theme="light"
                href="https://twitter.com/Only_Frens_"
              >
                Tweets by
                <span className="text-[#234afd] hover:text-[#b16541]">
                  {" "}
                  @Only_Frens_
                </span>
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
              ></script>
            </div>

            <div className="">
              <PhotoAlbum
                renderRowContainer={({ rowContainerProps, children }) => (
                  <div {...rowContainerProps}>{children}</div>
                )}
                layout="masonry"
                photos={images}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
