import type { UmiPlugin } from '@stay.hungry07212/umi';
import {
  BundlrUploaderOptions,
  createBundlrUploader,
} from './createBundlrUploader';

export const bundlrUploader = (options?: BundlrUploaderOptions): UmiPlugin => ({
  install(umi) {
    umi.uploader = createBundlrUploader(umi, options);
  },
});
