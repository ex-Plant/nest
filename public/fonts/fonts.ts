import localFont from 'next/font/local'

export const AlientzGrotesque = localFont({
  src: [
    {
      path: './TT-Alientz-Grotesque.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-alientz',
})

export const AlientzSerif = localFont({
  src: [
    {
      path: './TT-Alientz-Serif.otf',
      weight: '400',
      style: 'serif',
    },
  ],
  variable: '--font-alientz-serif',
})

export const Montclear = localFont({
  src: [
    { path: './AT-Montclear-Thin.otf', weight: '200', style: 'normal' },
    { path: './AT-Montclear-Regular.otf', weight: '400', style: 'normal' },
    { path: './AT-Montclear-Bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-montclear',
})

export const FlyingMontclear = localFont({
  src: [
    { path: './AT-Flying-Montclear-Thin.otf', weight: '200', style: 'normal' },
    { path: './AT-Flying-Montclear-Regular.otf', weight: '400', style: 'normal' },
    { path: './AT-Flying-Montclear-Bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-flying-montclear',
})
