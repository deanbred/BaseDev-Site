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
        <title>OnlyFrens.tech</title>
        <meta name="description" content="Crypto Token Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_large.png" />
      </Head>
      <Header />
      <div className="flex min-h-screen flex-col overflow-hidden bg-no-repeat bg-contain bg-[url('../public/bg.jpg')]">
        <div className="p-4 lg:mr-auto md:mr-auto sm:mr-auto ">
          <button
            className="p-2 font-kake bg-[#69974f] hover:text-[#b16541] text-[#234afd] rounded-2xl"
            onClick={async () =>
              window.open(
                "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x52e8336322C8fD0f99000e80F8C5EB0acD1C9Bc3"
              )
            }
          >
            Buy on UniSwap
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-24 flex flex-col items-center font-kake text-center max-w-4xl bg-transparent md:text-2xl sm:text-base rounded-2xl">
            <p className="text-slate-900 hover:text-red-700">
              <a
                href="https://etherscan.io/token/0x52e8336322c8fd0f99000e80f8c5eb0acd1c9bc3"
                className=""
              >
                {" "}
                Contract
              </a>{" "}
            </p>
            <p className="text-slate-900 hover:text-green-700">
              <a
                href="https://dexscreener.com/ethereum/0x52e8336322C8fD0f99000e80F8C5EB0acD1C9Bc3"
                className=""
              >
                Chart
              </a>{" "}
            </p>
          </div>
          <div className="m-3 flex flex-row items-center justify-center space-x-4">
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
          </div>
        </div>
        <div className="flex flex-col items-center">
          <audio id="music" controls autoPlay>
            <source src="lemon_song.mp3" type="audio/mp3" />
          </audio>
        </div>

        <div className="flex flex-wrap items-center justify-between">
          <Image src="meme00.jpg" width={400} height={400} alt="meme" />
          <Image src="meme01.jpg" width={400} height={400} alt="meme" />
          <Image src="meme02.jpg" width={400} height={400} alt="meme" />
          <Image src="meme03.jpg" width={400} height={400} alt="meme" />
          <Image src="meme04.jpg" width={400} height={400} alt="meme" />
          <Image src="meme05.jpg" width={400} height={400} alt="meme" />
          <Image src="meme06.jpg" width={400} height={400} alt="meme" />
        </div>
        <div className="p-3 mt-2 m-auto text-center max-w-3xl font-kake bg-stone-200 opacity-90 md:text-base sm:text-base rounded-2xl">
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
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
      </div>
    </>
  )
}
