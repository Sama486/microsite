/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': {
          'plain': {
            'Color': '#2196F3',
          },
          'outlined': {
            'Color': '#2196F3',
            'Border': '#90CAF9',
          },
          'solid': {
            'Bg': '#2196F3',
            'Color': '#FFFFFF',
          },
          'soft': {
            'Color': '#1E88E5',
            'Bg': '#E3F2FD',
          },
        },
        'background': {
          'body': '#FFFFFF',
          'level1': '#F5F5F5',
        },
        'neutral': {
          '300': '#32383E',
          '700': '#616161',
        },
        'success': {
          'soft': {
            'Color': '#4CAF50',
            'Bg': '#E8F5E9',
          },
        },
        'danger': {
          'outlined': {
            'Color': '#F44336',
            'Border': '#FFCDD2',
          },
        },
        'divider': '#E0E0E0',
      },
    },
  },
  plugins: [],
}

