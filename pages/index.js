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
                "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x1c823F81e0230cd8762c63e24D953735E0F8d67c"
              )
            }
          >
            Buy on UniSwap
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-64 flex flex-col items-center">
            <audio id="music" controls autoPlay>
              <source src="lemon_song.mp3" type="audio/mp3" />
            </audio>
          </div>
          <div className="p-1 mt-64 font-kake text-center max-w-4xl bg-transparent md:text-2xl sm:text-base rounded-2xl">
            <p className="mt-1">
              Contract:{" "}
              <a
                href="https://basescan.org/address/0x1c823f81e0230cd8762c63e24d953735e0f8d67c"
                className="text-[#234afd] hover:text-[#b16541]"
              >
                0x1c823F81e0230cd8762c63e24D953735E0F8d67c
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

        <div className="flex flex-wrap items-center justify-between">
          <Image src="meme00.jpg" width={400} height={400} alt="meme" />
          <Image src="meme01.jpg" width={400} height={400} alt="meme" />
          <Image src="meme02.jpg" width={400} height={400} alt="meme" />
          <Image src="meme03.jpg" width={400} height={400} alt="meme" />
          <Image src="meme04.jpg" width={400} height={400} alt="meme" />
          <Image src="meme05.jpg" width={400} height={400} alt="meme" />
          <Image src="meme06.jpg" width={400} height={400} alt="meme" />
          <Image src="meme07.jpg" width={400} height={400} alt="meme" />
          <Image src="meme08.jpg" width={400} height={400} alt="meme" />
          <Image src="meme09.jpg" width={400} height={400} alt="meme" />
          <Image src="meme10.jpg" width={400} height={400} alt="meme" />
          <Image src="meme11.jpg" width={400} height={400} alt="meme" />
          <Image src="meme12.jpg" width={400} height={400} alt="meme" />
          <Image src="meme13.jpg" width={400} height={400} alt="meme" />
          <Image src="meme14.jpg" width={400} height={400} alt="meme" />
          <Image src="meme15.jpg" width={400} height={400} alt="meme" />
          <Image src="meme16.jpg" width={400} height={400} alt="meme" />
          <Image src="meme17.jpg" width={400} height={400} alt="meme" />
        </div>
        <div className="p-3 m-6 text-center max-w-3xl font-kake bg-stone-200 opacity-90 md:text-base sm:text-base rounded-2xl">
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
