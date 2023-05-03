import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-foreground': '#191919',
        'light-foreground': '#f2f2f2',
        accent: '#0057ff',
      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
    },
    plugins: ['@tailwindcss/typography', '@tailwindcss/aspect-ratio'],
  },
}
