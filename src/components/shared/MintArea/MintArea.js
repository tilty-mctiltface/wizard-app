import "./MintArea.css"

function MintArea(props) {
  return (
      <div className="flex flex-row flex-wrap tablet:flex-no-wrap justify-between p-4 tablet:p-12 info-container items-center dark-text mt-24 mb-24 font-face-texturina">
        <div>
          <h1 className="text-4xl font-bold">Buy a Wizard</h1>
        </div>
        <div className="">
          <h3 className="text-2xl font-bold">Price per Wizard: 850 VLX</h3>
          <h3 className="text-xl font-bold">Max mint per wallet: 20 Wizards</h3>
          <p className="mt-2 text-sm">Note that 100 Wizards are being withheld from the sale.</p>
          <p className="text-sm">They will be used for giveaways, partnerships and future events.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">0 / 5000 minted</h3>
          <button className="mint-btn">Mint a Wizard</button>
        </div>
      </div>
  )
}

export default MintArea