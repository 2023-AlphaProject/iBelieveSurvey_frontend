import BoxComponent from './Box';
import FlexComponent from './Flex';

export default {
  title: 'Components/Primitives',
  component: BoxComponent,
  argTypes: {},
};

export const Box: React.FC = () => {
  return (
    <div>
      <BoxComponent as="p">
        Contains background, border, layout, position, and space from{' '}
        <a href="https://styled-system.com/api">Styled System&lsquo;s API</a>
      </BoxComponent>
    </div>
  );
};

export const Flex: React.FC = () => {
  return (
    <div>
      Based on the Box component. You can apply any flexbox properties on the Flex component.
      <a href="https://styled-system.com/api#flexbox">List of applicable props</a>
      <FlexComponent justifyContent="space-between" mt="40px">
        <span>Left</span>
        <span>right</span>
      </FlexComponent>
      <FlexComponent justifyContent="center" mt="8px">
        <span>center</span>
      </FlexComponent>
    </div>
  );
};
