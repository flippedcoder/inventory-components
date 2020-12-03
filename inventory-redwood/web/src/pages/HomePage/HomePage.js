import { Link, routes } from "@redwoodjs/router"

const HomePage = () => {
  return (
    <>
      <header>
        <Link to={routes.items()}>Items</Link>
      </header>
      <h1>Dashboard</h1>
      <p>It works in Redwood.</p>
    </>
  )
}

export default HomePage
