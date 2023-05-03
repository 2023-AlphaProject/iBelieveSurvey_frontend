import { Box } from 'components/Box';
import { capitalize } from 'lodash';
import TagComponent from './Tag';
import { scales, variants } from './types';

export default {
  title: 'Components/Common/Tag',
  component: TagComponent,
};

export const Tag = () => {
  return (
    <Box>
      {Object.values(variants).map((variant) => {
        return (
          <Box key={variant} mb={20}>
            {Object.values(scales).map((scale) => {
              return (
                <TagComponent mr={10} scale={scale} variant={variant} key={scale}>
                  {`${capitalize(variant)} ${scale.toUpperCase()}`}
                </TagComponent>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};
