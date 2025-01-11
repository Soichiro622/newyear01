import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import type { NextConfig } from "next";

// 非同期関数を作成して、その中でawaitを使用します
async function setup() {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }
}

// 非同期関数を呼び出します
setup();

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
