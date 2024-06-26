import type { Serializer } from '@stay.hungry07212/umi-serializers-core';
import { baseX } from './baseX';

/**
 * A string serializer that uses base58 encoding.
 * @category Serializers
 */
export const base58: Serializer<string> = baseX(
  '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
);
