import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // 基本設定をここに追加
  publicDir: resolve(__dirname, 'public'),
  root: 'src',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true
  }
});