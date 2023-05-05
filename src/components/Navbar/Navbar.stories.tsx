import NavbarComponent from './Navbar';

export default {
  title: 'Components/Menu',
  component: NavbarComponent,
};

export const Navbar: React.FC = () => {
  return (
    <div>
      <NavbarComponent />
      Navbar Component
    </div>
  );
};
