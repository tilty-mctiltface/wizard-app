import Styles from './AboutProject.module.css'

const FAQ = [
  {
    header: 'What is an asset vault?',
    description: 'Some gool info Some gool info Some gool info Some gool info Some gool info Some gool info Some gool info '
  },
  {
    header: 'What happens with my money in these vaults?',
    description: 'Some gool info Some gool info Some gool info Some gool info Some gool info Some gool info Some gool info '
  },
  {
    header: 'What is the velas blockchain?',
    description: 'Some gool info Some gool info Some gool info Some gool info Some gool info Some gool info Some gool info '
  },
  {
    header: 'What is an asset vault?',
    description: 'Some gool info Some gool info Some gool info Some gool info Some gool info Some gool info Some gool info '
  },
  {
    header: 'What happens with my money in these vaults?',
    description: 'Some gool info Some gool info Some gool info Some gool info Some gool info Some gool info Some gool info '
  },
  {
    header: 'What is the velas blockchain?',
    description: 'Some gool info Some gool info Some gool info Some gool info Some gool info Some gool info Some gool info '
  },
]

function FAQSection(props) {
  return (
      <div className={`p-5 ${Styles.FAQHover}`}>
          <h3 className="text-3xl font-bold mb-4 yellow-text font-face-texturina">{props.header}</h3>
          <p className={`accent-text`}>{props.description}</p>
      </div>
  )
}

function AboutProject(props) {
  return (
      <div className={`border-accent rounded-xl mb-10 mt-20 p-5 ${Styles.container}`}>
        <h2 className="text-5xl font-bold accent-text font-face-texturina text-center">FAQ</h2>
        {
          FAQ.map((q, index) => (<FAQSection key={index} header={q.header} description={q.description} />))
        }
      </div>
  )
}

export default AboutProject