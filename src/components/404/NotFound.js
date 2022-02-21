import { useNavigate } from 'react-router-dom'
import Wizard from '../../assets/404/wizard.png'

function NotFound(props) {
  let navigate = useNavigate()
  return (
      <div className={`dark-bg h-screen flex flex-col items-center justify-center`}>
        <h1 className={`font-face-dalek text-3xl tablet:text-8xl light-text mb-6 text-center`}>Page not found.</h1>
        <h2 className={`font-face-dalek text-xl tablet:text-3xl yellow-text mb-10 pl-4 pr-4 text-center`}>Please check back later, or make sure your url is correct.</h2>
        <img className={`h-64 w-64`} alt={'404-Wizard'} src={Wizard}/>
        <button className={`mt-10 pl-20 pr-20 pt-10 pb-10 font-face-dalek light-text text-2xl outline-none font-light cursor-pointer drop-shadow glow-animation`} onClick={() => navigate(-1)}>Go Back</button>
      </div>
  )
}

export default NotFound