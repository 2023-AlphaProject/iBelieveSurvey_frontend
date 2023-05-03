import FooterComponent from './Footer';

export default {
  title: 'Components/Menu',
  component: FooterComponent,
};

export const Menu: React.FC = () => {
  return (
    <div>
      <FooterComponent />
      Footer
    </div>
  );
};
