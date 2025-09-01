import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

export default defineConfig({
    plugins: [
        react(),
        svgr(),
        tailwindcss(),
        createSvgSpritePlugin({
            exportType: 'vanilla',
            include: 'src/assets/icons/*.svg',
            symbolId: '[name]',
        }),


    ],
    resolve: {
        alias: {
            '@': '/src',
            '@components': '/src/components',
            '@assets': '/src/assets',
            '@helpers': '/src/helpers',
            '@models': '/src/models',
            '@constants': '/src/constants',
            '@layouts': '/src/layouts',
            '@pages': '/src/pages',
            '@hooks': '/src/hooks',
            '@redux': '/src/redux',
        },
    },
});
