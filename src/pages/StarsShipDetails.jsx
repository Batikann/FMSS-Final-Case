import { Link, useParams } from 'react-router-dom'
import { useShipDetails } from '../utils/starsShips'

function StarsShipDetails() {
  const { name } = useParams()
  const data = useShipDetails(name)
  console.log(data)
  return (
    <div>
      <Link to="/">Go Home</Link>
      <h1>{name}</h1>
    </div>
  )
}
export default StarsShipDetails
