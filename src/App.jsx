import { useEffect, useState } from "react"

const getAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice")
  const data = await res.json()
  return data.slip
}

export default function App() {
  const [advice, setAdvice] = useState("")
  const [adviceId, setAdviceId] = useState(0)

  useEffect(() => {
    async function handleAdvice() {
      const obj = await getAdvice()
      setAdviceId(obj.id)
      setAdvice(obj.advice)
    }
    handleAdvice()
  }, [])

  async function handleAdvice() {
    const obj = await getAdvice()
    setAdviceId(obj.id)
    setAdvice(obj.advice)
  }

  return (
    <div className="container">
      <div className="advice">
        <div className="advice-box">
          <h2 className="advice__title">Advice #{adviceId}</h2>
          <p className="advice__text">“{advice}”</p>
          <picture>
            <source
              srcSet="pattern-divider-mobile.svg"
              media="(max-width: 34em)"
            />
            <img
              className="advice__divider"
              src="pattern-divider-desktop.svg"
              alt="divider"
            />
          </picture>
        </div>

        <div className="advice__action-btn" onClick={handleAdvice}>
          <img src="icon-dice.svg" alt="dice icon" />
        </div>
      </div>
    </div>
  )
}
