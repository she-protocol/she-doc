import type { Chain } from 'viem';
import { she, sheDevnet, sheTestnet } from 'viem/chains';

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
	'pacific-1': {
		restUrl: 'https://rest.pacific-1.she.io',
		rpcUrl: 'https://rpc.pacific-1.she.io/',
		explorerUrl: 'https://shetrace.com'
	},
	'atlantic-2': {
		restUrl: 'https://rest-testnet.she-apis.com',
		rpcUrl: 'https://rpc-testnet.she-apis.com/',
		explorerUrl: 'https://shetrace.com'
	},
	'arctic-1': {
		restUrl: 'https://rest-arctic-1.she-apis.com',
		rpcUrl: 'https://rpc-arctic-1.she-apis.com/',
		explorerUrl: 'https://shetrace.com'
	}
};

export const EVM_CHAIN_CONFIGS: EvmChainConfigs = {
	'pacific-1': she,
	'atlantic-2': sheTestnet,
	'arctic-1': sheDevnet
};
