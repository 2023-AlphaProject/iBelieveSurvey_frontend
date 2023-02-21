import { BrowserRouter } from 'react-router-dom';
import MenuComponent from './Menu';

export default {
  title: 'Components/Menu',
  component: MenuComponent,
};

export const Menu: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <MenuComponent />
        메뉴 컴포넌트
      </BrowserRouter>
    </div>
  );
};
