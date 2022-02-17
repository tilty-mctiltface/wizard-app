import "./Roadmap.css"
import ProgressBar from "./ProgressBar/ProgressBar";

const roadmap = [
  { startedAt: new Date().toDateString(), body: 'NFT Art for minting is completed, including logos, banners, and fine adjustments.', title: 'Art complete', amountDone: 100 },
  { startedAt: new Date().toDateString(), body: 'Landing page for Minting and Voting is done; This does not include web3 functionality, but all the information needed to make financial decisions about the project.', title: 'Landing page ready', amountDone: 100 },
  { startedAt: new Date().toDateString(), body: 'Twitter, Medium, Discord, and Telegram are all active and actively moderated by a community moderator.', title: 'Socials and Landing page live', amountDone: 75 },
  { startedAt: new Date().toDateString(), body: 'Tokenomics for NFTs (including staking/voting, additional liquidity generation via governance token maybe) is completed and ready to be made.', title: 'Tokenomics set', amountDone: 50 },
  { startedAt: new Date().toDateString(), body: 'Solidity Contracts have been written and tested on Velas, and after sucessfull testing, deployed and verified.', title: 'Smart contracts tested and deployed', amountDone: 25 },
  { startedAt: new Date().toDateString(), body: 'Minting on Website is possible and will be activated when the correct date has been hit.', title: 'Website minting active', amountDone: 25 },
  { startedAt: new Date().toDateString(), body: 'DAO investments should start on discord with the help of a discord bot that verifies wallets and votes, or with snapshot.org', title: 'DAO investing starting on discord', amountDone: 0 },
  { startedAt: new Date().toDateString(), body: 'Smart contracts are created to move the investment voting and proposals to the Wizards Tower dApp.', title: 'Proposals moved to website', amountDone: 0 },
]

function conditionalColor(num) {
  if (num >= 99) return 'done'
  if (num>= 75) return 'almost-done'
  if (num >= 50) return 'halfway'
  if (num >= 25) return 'barely-started'
  else return 'fresh'
}

function RoadmapItem(props) {
  return (
      <div className=" p-8 pr-48 pl-48 mt-5 mb-5 roadmap-box">
        <h2 className="text-3xl font-bold mb-2">{props.title}</h2>
        <p className="text-lg mb-2 ml-2">{props.body}</p>
        <div className="flex flex-row">
          <p className="mr-8 font-bold started-at light-text">Started {props.startedAt}</p>
          <p className={'font-bold dark-text completed-info ' + conditionalColor(props.amountDone)}>{props.amountDone}% completed</p>
        </div>
      </div>
  )
}

function Roadmap(props) {
  return (
      <div className="light-text mr-10 ml-10">
        <h1 className="text-7xl font-bold font-face-dalek text-center mb-12">Roadmap</h1>
        <div className="w-full flex flex-row justify-center items-center mb-6">
          <label className="mr-4">Progress:</label>
          <ProgressBar/>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {
            roadmap.map((obj, i) => <RoadmapItem key={i} title={obj.title} body={obj.body} startedAt={obj.startedAt} amountDone={obj.amountDone}/>)
          }
        </div>
      </div>
  )
}

export default Roadmap