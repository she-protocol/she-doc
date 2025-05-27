import { skipToken, useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { Address } from 'viem';
import { useAccount, usePublicClient } from 'wagmi';
import { EVM_CHAIN_CONFIGS } from '../constants/chain';

type GetSheAddressSchema = { Parameters: [hash: Address]; ReturnType: string };
type UseSheAddressProps = { chainId: string };

const useSheAddress = ({ chainId }: UseSheAddressProps): UseQueryResult<string, Error> => {
	if (!chainId) {
		return {
			data: undefined,
			isLoading: false,
			error: null
		} as unknown as UseQueryResult<string, Error>;
	}

	const chainConfig = EVM_CHAIN_CONFIGS[chainId];
	const client = usePublicClient({ chainId: chainConfig.id });
	const { address } = useAccount();

	const fetchSheAddress = async (evmAddress?: `0x${string}`): Promise<string> => {
		if (!evmAddress) throw new Error('EVM address is not available');
		if (!client) throw new Error('Client is not available');

		try {
			return await client.request<GetSheAddressSchema>({
				method: 'she_getSheAddress',
				params: [evmAddress]
			});
		} catch (e) {
			console.error(e);
			throw e;
		}
	};

	return useQuery<string, Error>({
		queryKey: ['sheAddress', address, chainId],
		queryFn: address ? () => fetchSheAddress(address as `0x${string}`) : skipToken,
		retry: false,
		refetchInterval: (query) => (query.state.data === undefined ? 5000 : false)
	});
};

export default useSheAddress;
