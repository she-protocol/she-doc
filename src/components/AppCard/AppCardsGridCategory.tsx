'use client';

import { useEffect, useState } from 'react';
import { EcosystemDocsCategory, EcosystemResponse, getSheEcosystemAppByCategory } from '../../data/ecosystemData';
import { EcosystemSkeleton } from '../EcosystemMap';
import AppCardV2 from './AppCard.v2';

function AppCardsGridCategory({ category }: { category: EcosystemDocsCategory }) {
	const [apps, setApps] = useState<EcosystemResponse['data']>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getSheEcosystemAppByCategory(category).then((res) => {
			const data = res.data;
			setApps(data);
			setLoading(false);
		});
	}, [category]);

	if (!apps || loading) return <EcosystemSkeleton />;

	if (apps.length === 0) return null;

	return (
		<div>
			<div className='flex flex-row overflow-auto gap-4 py-4'>
				{apps.map((app) => (
					<AppCardV2 key={app.id} app={app} />
				))}
			</div>
			<small className='opacity-75'>
				Projects listed here are developed by the SHE community. Inclusion on this site does not constitute endorsement. For questions related to each, please
				contact the project directly.
			</small>
		</div>
	);
}

export default AppCardsGridCategory;
