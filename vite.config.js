import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import sri from '@small-tech/vite-plugin-sri'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/_settings.scss";'
      }
    }
  },
  plugins: [
    vue(),
    svgLoader({
      svgo: false, // killing this for now.
      svgoConfig: {
        removeDimensions: true,
        cleanupAttrs: true,
        removeDoctype: true,
        removeXMLProcInst: true,
        removeComments: true,
        removeMetadata: true,
        removeTitle: true,
        removeDesc: true,
        removeUselessDefs: true,
        removeEditorsNSData: true,
        removeEmptyAttrs: true,
        removeHiddenElems: true,
        removeEmptyText: true,
        removeEmptyContainers: true,
        removeViewBox: false,
        cleanupEnableBackground: true,
        convertStyleToAttrs: true,
        convertColors: true,
        convertPathData: true,
        convertTransform: true,
        removeUnknownsAndDefaults: true,
        removeNonInheritableGroupAttrs: true,
        removeUselessStrokeAndFill: true,
        removeUnusedNS: true,
        cleanupIDs: false,
        cleanupNumericValues: true,
        moveElemsAttrsToGroup: true,
        moveGroupAttrsToElems: true,
        collapseGroups: true,
        removeRasterImages: false,
        mergePaths: true,
        convertShapeToPath: true,
        sortAttrs: true,
        removeAttrs: { attrs: '(stroke|fill)' }
      }
    }),
    sri()
  ]
})
