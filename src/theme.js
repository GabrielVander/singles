import {grommet} from 'grommet/themes';
import {deepMerge} from 'grommet/utils';

export const customTheme = deepMerge(grommet, {
  global : {
    breakpoints : {
      xsmall : {
        value : 400,
      },
    },
  },
  heading : {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    extend : () => `margin-top: 12px; margin-bottom: 12px;`,
  },
  paragraph : {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    extend : () => `font-weight: 300; margin-top: 0;`,
    xxlarge : {
      size : '28px',
    },
  },
  textInput : {
    placeholder : {
      // eslint-disable-next-line
      // @typescript-eslint/explicit-function-return-type
      extend : () => `color: #44444`,
    },
  },
});
