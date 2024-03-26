export default function Header({ children, contents }) {
  return (
    <header>
      {contents}
      {children}
    </header>
  )
}
