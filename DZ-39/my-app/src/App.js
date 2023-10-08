import "./styles/App.scss";
import logo from "./assets/logo.svg";
function App() {
  const title = "First React App";
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-logo">
          <img src={logo} alt={"Test Logo"}></img>
        </div>
        <div className="App-header-content">
          <h1>{title}</h1>
        </div>
      </header>
      <main className="App-main">
        <nav className="App-nav">
          <ul className="App-nav__list">
            <li>
              <a href="https://react.dev/reference/react/components" title={"React Components"}>
                React Components
              </a>
            </li>
            <li>
              <a href="https://react.dev/reference/react">Hooks</a>
            </li>
            <li>
              <a href="https://react.dev/reference/react/apis">Built-in React APIs</a>
            </li>
          </ul>
        </nav>
        <section className="App-content">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, nobis.</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit debitis rem aspernatur natus at architecto sapiente est veritatis quo alias!</h2>
          <p style={{ color: "red" }} id="testElem">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maxime illo fugit doloremque. Atque suscipit eum, deserunt numquam maxime ut non
            praesentium a nobis adipisci ea rem id fuga quisquam et soluta porro modi sint. Illo, aspernatur vitae sed consectetur, delectus culpa sint, iusto
            ipsam minima quae expedita ipsa a.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
