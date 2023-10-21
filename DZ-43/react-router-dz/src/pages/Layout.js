import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1 className="app-header__title">DZ React-router</h1>
      </header>
      <main className="app-main">
        <section className="app-nav">
          <ul>
            <li className="app-nav__link">
              <Link to="/">Users List</Link>
            </li>
          </ul>
        </section>

        <section className="app-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default Layout;
