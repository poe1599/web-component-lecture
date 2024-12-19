import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: tag =>
            [
              // 簡報內定義的 Web Components Tag Name
              'ex-button1',
              'ex-button2',
              'ex-pool-ball',
            ].includes(tag),
        },
      },
    },
  },
})