import { BrowserRouter } from 'react-router-dom';
import NavbarComponent from './Navbar';

export default {
  title: 'Components/Menu',
  component: NavbarComponent,
};

export const Navbar: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        Navbar Component
      </BrowserRouter>
    </div>
  );
};
