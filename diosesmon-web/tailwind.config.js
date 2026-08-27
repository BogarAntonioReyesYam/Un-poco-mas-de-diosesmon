/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0A211D',
        pine: '#0F2E28',
        panel: '#163B33',
        panel2: '#1C463D',
        line: '#2A5850',
        gold: '#E8B33D',
        golddim: '#8A6B2A',
        ember: '#D9584C',
        mist: '#9FC2B8',
        ink: '#EDF3EE',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: { page: '1080px' },
    },
  },
  plugins: [],
}
