import { NetworkEntry } from './types';

export const networks: NetworkEntry[] = [
	{
		type: 'EVM',
		name: 'Mainnet',
		chainId: '1329',
		hexChainId: '0x531',
		rpcUrl: 'https://evm-rpc.she-apis.com',
		explorerLinks: [
			{ name: 'SheTrace', url: 'https://shetrace.com/?chain=pacific-1' },
			{ name: 'SheScan', url: 'https://www.shescan.app/?chain=pacific-1' }
		]
	},
	{
		type: 'EVM',
		name: 'Testnet',
		chainId: '1328',
		hexChainId: '0x530',
		rpcUrl: 'https://evm-rpc-testnet.she-apis.com',
		explorerLinks: [
			{ name: 'SheTrace', url: 'https://shetrace.com/?chain=atlantic-2' },
			{ name: 'SheScan', url: 'https://www.shescan.app/?chain=atlantic-2' }
		]
	},
	{
		type: 'EVM',
		name: 'Devnet',
		chainId: '713715',
		hexChainId: '0xAE3F3',
		rpcUrl: 'https://evm-rpc-arctic-1.she-apis.com',
		explorerLinks: [{ name: 'SheTrace', url: 'https://shetrace.com/?chain=arctic-1' }]
	},
	{
		type: 'Cosmos',
		name: 'Mainnet',
		chainId: 'pacific-1',
		rpcUrl: 'https://wallet.rpc.pacific-1.shenetwork.io',
		explorerLinks: [
			{ name: 'SheTrace', url: 'https://shetrace.com/?chain=pacific-1' },
			{ name: 'SheScan', url: 'https://www.shescan.app/?chain=pacific-1' }
		]
	},
	{
		type: 'Cosmos',
		name: 'Testnet',
		chainId: 'atlantic-2',
		rpcUrl: 'https://wallet.rpc.atlantic-2.shenetwork.io',
		explorerLinks: [
			{ name: 'SheTrace', url: 'https://shetrace.com/?chain=atlantic-2' },
			{ name: 'SheScan', url: 'https://www.shescan.app/?chain=atlantic-2' }
		]
	},
	{
		type: 'Cosmos',
		name: 'Devnet',
		chainId: 'arctic-1',
		rpcUrl: 'https://wallet.rpc.arctic-1.shenetwork.io',
		explorerLinks: [{ name: 'SheTrace', url: 'https://shetrace.com/?chain=arctic-1' }]
	}
];
