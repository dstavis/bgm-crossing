import { Link } from "react-router-dom"

const Missing = () => {

  return (
    <>
      <h2>404</h2>
      <h3>Page not found. Try heading home?</h3>
      <Link to="/">Home</Link>
    </>
  )
}

export default Missing