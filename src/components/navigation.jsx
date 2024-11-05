import { Link } from 'react-router-dom';
import './styles/navigation.css';

function NavigationComponent() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/explore">Random Cards</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </nav>
    </>

  )
}

export default NavigationComponent;