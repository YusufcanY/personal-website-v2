import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-foreground': '#070A05',
        'light-foreground': '#f7faf5',
        accent: '#0057ff',
      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      screens: {
        xs: '400px',
      },
    },
    plugins: ['@tailwindcss/typography', '@tailwindcss/aspect-ratio'],
  },
}
