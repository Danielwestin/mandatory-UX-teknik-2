import React, { useEffect } from 'react';
import { loadingAnimation } from '../Utilities/animation';

export default function Loading() {
	useEffect(() => {
		loadingAnimation();
	}, []);
	return (
		<div className="Loading">
			<div className="Loading__ball" />
			<div className="Loading__ball" />
			<div className="Loading__ball" />
			<div className="Loading__ball" />
			<div className="Loading__ball" />
		</div>
	);
}
