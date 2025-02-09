import localFont from 'next/font/local';

export const AlientzGrotesque = localFont({
  src: [
    {
      path: './TT-Alientz-Grotesque.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-alientz',
},);

export const AlientzSerif = localFont({
  src: [
    {
      path: './TT-Alientz-Serif.otf',
      weight: '400',
      style: 'serif',
    },
  ],
  variable: '--font-alientz-serif',
},);
