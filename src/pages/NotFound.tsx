
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Sadly the site you are looking for is not found </p>
      <button onClick={() => navigate('/')}>Back to Gallery</button>
      </div>
  )
}

export default NotFound