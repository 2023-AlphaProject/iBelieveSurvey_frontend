import { BrowserRouter } from 'react-router-dom';
import FooterComponent from './Footer';

export default {
  title: 'Components/Menu',
  component: FooterComponent,
};

export const Menu: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <FooterComponent />
        Footer
      </BrowserRouter>
    </div>
  );
};
