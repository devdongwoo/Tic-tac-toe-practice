export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((cur) => {
        return (
          <li key={`${cur.square.row}${cur.square.col}`}>
            {cur.player} selected {cur.square.row}
          </li>
        )
      })}
    </ol>
  )
}
