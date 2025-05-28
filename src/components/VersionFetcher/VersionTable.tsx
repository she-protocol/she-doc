'use client';

import React, { useState } from 'react';
import VersionFetcher from './VersionFetcher';
import { Table } from '@radix-ui/themes';
import Link from 'next/link';

const VersionTable: React.FC = () => {
	const [mainnetVersion, setMainnetVersion] = useState('');
	const [testnetVersion, setTestnetVersion] = useState('');
	const [devnetVersion, setDevnetVersion] = useState('');

	return (
		<>
			<VersionFetcher chainId='she-mainnet' rpcEndpoint='https://rpc-dev.she.io' setVersion={setMainnetVersion} />
			<VersionFetcher chainId='she-testnet' rpcEndpoint='https://rpc-dev.she.io' setVersion={setTestnetVersion} />
			<VersionFetcher chainId='she-devent' rpcEndpoint='https://rpc-dev.she.io' setVersion={setDevnetVersion} />

			<Table.Root size='3' variant='surface' className='mt-8'>
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell>Network</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Version</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Chain ID</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Genesis URL</Table.ColumnHeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.RowHeaderCell>Mainnet</Table.RowHeaderCell>
						<Table.Cell>{mainnetVersion || 'Fetching...'}</Table.Cell>
						<Table.Cell>she-mainnet</Table.Cell>
						<Table.Cell className='text-red-600 hover:underline'>
							<a href='https://raw.githubusercontent.com/she-protocol/she-networks/main/she-mainnet/genesis.json'>Genesis</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.RowHeaderCell>Testnet</Table.RowHeaderCell>
						<Table.Cell>{testnetVersion || 'Fetching...'}</Table.Cell>
						<Table.Cell>she-testnet</Table.Cell>
						<Table.Cell className='text-red-600 hover:underline'>
							<a href='https://raw.githubusercontent.com/she-protocol/she-networks/main/she-testnet/genesis.json'>Genesis</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.RowHeaderCell>Devnet</Table.RowHeaderCell>
						<Table.Cell>{devnetVersion || 'Fetching...'}</Table.Cell>
						<Table.Cell>she-devnet</Table.Cell>
						<Table.Cell className='text-red-600 hover:underline'>
							<a href='https://raw.githubusercontent.com/she-protocol/she-networks/main/she-devnet/genesis.json'>Genesis</a>
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table.Root>
		</>
	);
};

export default VersionTable;
