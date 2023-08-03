import List from "./components/List"

const App = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar sticky-top navbar-light bg-dark">
          <h1 className="navbar-brand text-light">Rick And Morty</h1>
        </nav>
        <h2>Characters</h2>
        <List />
      </div>
    </>

  )
}

export default App