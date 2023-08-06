import { contractAddresses, abi, abiToken } from "../constants"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { useEffect, useState } from "react"
import { useNotification } from "web3uikit"
import { ethers } from "ethers"

let raffleString, jackpotString, id

export default function ContractCalls() {
  const { Moralis, isWeb3Enabled, chainId, account } = useMoralis()
  id = parseInt(chainId)

  const raffleAddress =
    id in contractAddresses ? contractAddresses[id][0] : null

  const tokenAddress = "0xFe76D47cD946a3fEF19A3991ED2350c5B0B3D6c4"

  //console.log(`chain is ${id}`)
  //console.log(`account is ${account}`)
  //console.log(`raffle address is ${raffleAddress}`)
  //console.log(`token address is ${tokenAddress}`)

  // State hooks
  const [entranceFee, setEntranceFee] = useState("0")
  const [numberOfPlayers, setNumberOfPlayers] = useState("0")
  const [recentWinner, setRecentWinner] = useState("0")
  const [raffleState, setRaffleState] = useState("0")
  const [jackpot, setJackpot] = useState("0")

  const dispatch = useNotification()

  const {
    runContractFunction: enterRaffle,
    data: enterTxResponse,
    isLoading,
    isFetching,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "enterRaffle",
    msgValue: entranceFee,
    params: {},
  })

  /* View Functions */
  const { runContractFunction: balanceOf } = useWeb3Contract({
    abi: abiToken,
    contractAddress: tokenAddress,
    functionName: "balanceOf",
    params: {},
  })

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getEntranceFee",
    params: {},
  })

  const { runContractFunction: getPlayersNumber } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getNumberOfPlayers",
    params: {},
  })

  const { runContractFunction: getRecentWinner } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getRecentWinner",
    params: {},
  })

  const { runContractFunction: getRaffleState } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getRaffleState",
    params: {},
  })

  async function updateUIValues() {
    // Another way we could make a contract call:
    // const options = { abi, contractAddress: raffleAddress }
    // const fee = await Moralis.executeFunction({
    //     functionName: "getEntranceFee",
    //     ...options,
    // })
    const entranceFeeFromCall = (await getEntranceFee()).toString()
    const numPlayersFromCall = (await getPlayersNumber()).toString()
    const recentWinnerFromCall = await getRecentWinner()
    const raffleStateFromCall = await getRaffleState()

    if (raffleStateFromCall == 0) {
      raffleString = "Open"
    } else if (raffleStateFromCall == 1) {
      raffleString = "Closed"
    }
    setRaffleState(raffleStateFromCall)

    jackpotString = (numPlayersFromCall * entranceFeeFromCall) / 1e18
    setJackpot(jackpotString)

    setEntranceFee(entranceFeeFromCall)
    setNumberOfPlayers(numPlayersFromCall)
    setRecentWinner(recentWinnerFromCall)
    setRaffleState(raffleStateFromCall)
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUIValues()
    }
  }, [isWeb3Enabled])

  const handleNewNotification = () => {
    dispatch({
      type: "success",
      message: "Transaction Complete!",
      title: "Transaction Notification",
      position: "topR",
    })
  }

  const handleSuccess = async (tx) => {
    try {
      await tx.wait(1)
      updateUIValues()
      handleNewNotification(tx)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="font-semibold">
      {raffleAddress ? (
        <>
          <div className="">
            <button
              className="p-2 font-kake bg-[#af292c]  hover:bg-[#600708] text-stone-200 rounded-2xl"
              onClick={async () =>
                await enterRaffle({
                  onSuccess: handleSuccess,
                  onError: (error) => console.log(error),
                })
              }
              disabled={isLoading || isFetching}
            >
              {isLoading || isFetching ? (
                <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"></div>
              ) : (
                "Enter Lottery"
              )}
            </button>
            <div className="p-2 mt-2 bg-stone-200 opacity-90 lg:text-sm md:text-sm sm:text-xs text-xs rounded-2xl">
              <p>
                Players:{" "}
                <span className="text-sky-800 font-kake font-semibold">
                  {numberOfPlayers}
                </span>
              </p>
              <p>
                Jackpot:{" "}
                <span className="text-sky-800 font-kake font-semibold">
                  {jackpotString} ETH
                </span>
              </p>
              <p>
                Entrance:{" "}
                <span className="text-sky-800 font-kake font-semibold">
                  {ethers.utils.formatUnits(entranceFee, "ether")} ETH
                </span>
              </p>
              <p>
                Current State:{" "}
                <span className="text-sky-800 font-kake font-semibold">
                  {raffleString}
                </span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className=" text-sky-50">
          Connect to Ethereum Mainnet for Lottery
        </div>
      )}{" "}
    </div>
  )
}
