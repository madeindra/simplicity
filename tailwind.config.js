module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#1a1a1a',
          text: '#e0e0e0',
          heading: '#ffffff',
          link: '#4a9eff',
        },
      },
      backgroundColor: {
        dark: '#1a1a1a',
      },
      textColor: {
        dark: {
          base: '#e0e0e0',
          heading: '#ffffff',
          link: '#4a9eff',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')]
}
