import { Umi, createUmi as baseCreateUmi } from '@stay.hungry07212/umi';
import type { ChunkGetAccountsRpcOptions } from '@stay.hungry07212/umi-rpc-chunk-get-accounts';
import type { Web3JsRpcOptions } from '@stay.hungry07212/umi-rpc-web3js';
import type { Connection as Web3JsConnection } from '@solana/web3.js';
import { defaultPlugins } from './plugin';

export function createUmi(
  endpoint: string,
  rpcOptions?: Web3JsRpcOptions & ChunkGetAccountsRpcOptions
): Umi;
export function createUmi(
  connection: Web3JsConnection,
  rpcOptions?: ChunkGetAccountsRpcOptions
): Umi;
export function createUmi(
  endpointOrConnection: string | Web3JsConnection,
  rpcOptions?: Web3JsRpcOptions & ChunkGetAccountsRpcOptions
): Umi {
  return baseCreateUmi().use(
    typeof endpointOrConnection === 'string'
      ? defaultPlugins(endpointOrConnection, rpcOptions)
      : defaultPlugins(endpointOrConnection, rpcOptions)
  );
}

export * from './plugin';
