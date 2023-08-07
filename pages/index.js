import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import Header from "@/components/Header"
import ContractCalls from "@/components/ContractCalls"
import { SocialIcon } from "react-social-icons"
import ReactDOM from "react-dom"

export default function Home() {
  return (
    <>
      <Head>
        <title>BaseDev Token</title>
        <meta name="description" content="Crypto Token Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo128.png" />
      </Head>
      <Header />
      <div className="flex min-h-screen flex-col overflow-hidden bg-no-repeat bg-cover bg-center bg-[url('../public/logo_bg.png')]">
        <div className="p-4 lg:mr-auto md:mr-auto sm:mr-auto ">
          <button
            className="p-2  font-semibold bg-[#0af58e] hover:text-white text-[#00010f] rounded-2xl"
            onClick={async () => window.open("https://app.uniswap.org/")}
          >
            Buy on Uniswap
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-3 text-center max-w-4xl bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl">
            <p className="">
              <a
                href="https://etherscan.io/token/"
                className="text-sky-800 hover:text-[#0af58e]  font-semibold leading-7"
              >
                BaseDev DEX
              </a>{" "}
            </p>
            <p>New token on the base blockchain</p>
            <p>Updates Coming Soon!</p>
            <p className="mt-1">
              Contract:{" "}
              <a
                href="https://dexscreener.com/base"
                className="text-sky-800 hover:text-[#0af58e]  font-semibold"
              >
                Dexscreener
              </a>{" "}
            </p>
          </div>
          <div className="m-3 flex flex-row items-center justify-center space-x-4">
            <SocialIcon
              url="https://twitter.com/basedev777"
              network="twitter"
              fgColor="white"
            />
            <SocialIcon
              url="https://t.me/+pnpZsqXIN3w2MTdh"
              network="telegram"
              fgColor="white"
            />
            <SocialIcon url="" network="discord" fgColor="white" />
          </div>
          <div className="p-3 mt-3 mb-3 max-w-3xl bg-stone-200 opacity-90 md:text-base sm:text-base rounded-2xl">
            <a className="" data-theme="light" href="https://twitter.com/">
              Tweets by @
              <span className="text-[#0af58e]  font-semibold">basedev777</span>
            </a>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
            ></script>
          </div>
        </div>
      </div>
      <footer className="text-[8px] text-center">1KEOY</footer>
    </>
  )
}
