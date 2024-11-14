import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors: {
        'custom-blue': 'rgba(10, 31, 48)',
'custom':'#01fb94'
      },
      backgroundImage: {
        'custom-dropdown': 'linear-gradient(90deg, #9DF75A 0%, #02FFAC 100%)',

        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-log':
          'linear-gradient(128.47deg, #0C2632 46.6%, #1D563A 86.49%);',
           'custom-hr':
          'linear-gradient(90deg, rgba(65,255,118,0.4) 0%, rgba(0,26,255,1) 95%) ',
          'custom-folow':
          'linear-gradient(270deg, #0E1851 0%, #17C956 100%) ',
            'custom-items':
          'linear-gradient(90deg, rgba(27,127,196,1) 20%, rgba(13,61,94,0.314120423560049) 74%)',
      },
    },
  },
  plugins: [],
};
export default config;
