import type { Chain } from 'viem';

export type ChainConfigs = {
	[chainId: string]: ChainConfig;
};

export type ChainConfig = {
	restUrl: string;
	rpcUrl: string;
	explorerUrl?: string;
};

export type EvmChainConfigs = {
	[chainId: string]: Chain;
};

// Cosmos configs
export const CHAIN_CONFIGS: ChainConfigs = {
	'she-mainnet': {
		restUrl: 'https://rest.pacific-1.she.io',
		rpcUrl: 'https://rpc.pacific-1.she.io/',
		explorerUrl: 'https://shetrace.com'
	},
	'she-testnet': {
		restUrl: 'https://rest-testnet.she-apis.com',
		rpcUrl: 'https://rpc-testnet.she-apis.com/',
		explorerUrl: 'https://shetrace.com'
	},
	'she-devnet': {
		restUrl: 'https://rest-arctic-1.she-apis.com',
		rpcUrl: 'https://rpc-arctic-1.she-apis.com/',
		explorerUrl: 'https://shetrace.com'
	}
};

// export const EVM_CHAIN_CONFIGS: EvmChainConfigs = {
// 	'she-mainnet': {},
// 	'she-testnet': {},
// 	'she-devnet': {}
// };
