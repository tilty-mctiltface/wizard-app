import Wizard1 from "../../../assets/1.png"
import Wizard2 from "../../../assets/2.png"
import Wizard3 from "../../../assets/3.png"
import Wizard4 from "../../../assets/4.png"
import Wizard5 from "../../../assets/5.png"
import Wizard6 from "../../../assets/6.png"
import Wizard7 from "../../../assets/7.png"
import Wizard8 from "../../../assets/8.png"
import Wizard9 from "../../../assets/9.png"
import "./Information.css"

function WizardImg(props) {
  return (
      <img alt={props.alt} src={props.src} className="h-56 w-56 rounded-xl wizard-shadow"/>
  )
}

function Information(props) {
  return (
      <div className="grid grid-cols-2 gap-4 light-text">
        <div className="mr-6">
          <h2 className="text-3xl mb-8 font-bold">Welcome to the Wizard's Tower</h2>
          <p className="text-xl mb-8">
            Some Information about the Wizards and
            what they unlock yadaya lorem ipsum dolor sit amet you know how the spiel goes. Just had some nice
            orange juice poggers bro.
            Some Information about the Wizards and
            what they unlock yadaya lorem ipsum dolor sit amet you know how the spiel goes. Just had some nice
            orange juice poggers bro.
          </p>
          <p className="text-xl ">
            Some Information about the Wizards and
            what they unlock yadaya lorem ipsum dolor sit amet you know how the spiel goes. Just had some nice
            orange juice poggers bro.
            Some Information about the Wizards and
            what they unlock yadaya lorem ipsum dolor sit amet you know how the spiel goes. Just had some nice
            orange juice poggers bro.
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <WizardImg alt="broken 1" src={Wizard1}/>
          <WizardImg alt="broken 2" src={Wizard2}/>
          <WizardImg alt="broken 3" src={Wizard3}/>
          <WizardImg alt="broken 4" src={Wizard4}/>
          <WizardImg alt="broken 5" src={Wizard5}/>
          <WizardImg alt="broken 6" src={Wizard6}/>
          {/*<WizardImg alt="broken 7" src={Wizard7}/>*/}
          {/*<WizardImg alt="broken 8" src={Wizard8}/>*/}
          {/*<WizardImg alt="broken 9" src={Wizard9}/>*/}
        </div>
      </div>
  )
}

export default Information