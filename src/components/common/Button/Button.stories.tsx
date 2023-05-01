import { Box } from 'components/Box';
import { capitalize } from 'lodash';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from 'styles';
import Btn from './Button';
import { variants, scales } from './types';

export default {
  title: 'Components/Common/Button',
  component: Btn,
};

export const Button = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Box mb="32px">
        <button type="button">Unstyled Button</button>
      </Box>
      <Box mb="32px">
        {Object.values(variants).map((variant) => {
          return (
            <Box key={variant} mb="32px">
              {Object.values(scales).map((scale) => {
                return (
                  <Btn key={scale} variant={variant} scale={scale} mr="8px">
                    {`${capitalize(variant)} ${scale.toUpperCase()}`}
                  </Btn>
                );
              })}
            </Box>
          );
        })}
        <Box>
          <Btn mr="8px" disabled>
            Disabled
          </Btn>
          <Btn variant="basic" mr="8px" disabled>
            basic
          </Btn>
          <Btn variant="secondary" mr="8px" disabled>
            secondary
          </Btn>
          <Btn variant="secondaryBasic" disabled>
            secondaryBasic
          </Btn>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
