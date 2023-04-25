import { Box } from 'components/Box';
import { capitalize } from 'lodash';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from 'styles';
import Button from './Button';
import { variants, scales } from './types';

export default {
  title: 'Components/Common/Buttons',
  component: Button,
};

export const Default = () => {
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
                  <Button key={scale} variant={variant} scale={scale} mr="8px">
                    {`${capitalize(variant)} ${scale.toUpperCase()}`}
                  </Button>
                );
              })}
            </Box>
          );
        })}
        <Box>
          <Button mr="8px" disabled>
            Disabled
          </Button>
          <Button variant="basic" mr="8px" disabled>
            basic
          </Button>
          <Button variant="secondary" mr="8px" disabled>
            secondary
          </Button>
          <Button variant="secondaryBasic" disabled>
            secondaryBasic
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
