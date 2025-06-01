import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({

      darkMode : "class",

  theme : {
    extend : {
      container : {
        center : true,
        padding : "1.25rem"
      },
      colors: {
				primary: '#00D991'
			},
    },
  },

  plugins: [
    tailwindcss(),
  ],
})