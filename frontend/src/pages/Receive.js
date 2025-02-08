import React from 'react';
import { useTranslation } from 'react-i18next';

const Receive = ({ walletAddress }) => {
	const { t } = useTranslation();

	return (
		<div className="receive-page">
			<h2>{t('receive.title')}</h2>
			<div className="qr-code">
				{/* QR Code implementation would go here */}
			</div>
			<p className="address-display">{walletAddress}</p>
		</div>
	);
};

export default Receive;