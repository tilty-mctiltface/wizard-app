import "./ProgressBar.css"

function ProgressBar(props) {
  return (
      <div className="progress progress--active">
        <b className="progress__bar progress__bar--yellow">
    <span className="progress__text">
    </span>
        </b>
      </div>
  )
}

export default ProgressBar