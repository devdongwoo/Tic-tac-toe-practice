import { useState } from "react"

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName
}) {
  const [change, setChange] = useState(false)
  const [userName, setUserName] = useState(initialName)

  const handleClick = () => {
    setChange((change) => !change)
    if (change) {
      onChangeName(symbol, userName)
    }
  }

  const handleChange = (e) => {
    if (e.target.value) {
      setUserName(e.target.value)
    }
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {change ? (
          <input
            required
            className="player input"
            defaultValue={userName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{userName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{change ? "save" : "edit"}</button>
    </li>
  )
}
