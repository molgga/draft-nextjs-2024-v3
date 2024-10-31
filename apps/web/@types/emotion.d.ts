/// <reference types="@emotion/react/types/css-prop" />

import '@emotion/react';
import { CustomThemeInterface } from '.';

declare module '@emotion/react' {
  export interface Theme extends CustomThemeInterface {}
}
