import React from 'react';
import { useTranslation } from 'react-i18next';
import SendPaymentForm from '../components/SendPayment';

const Send = () => {
	const { t } = useTranslation();

	return (
		<div className="send-page">
			<h2>{t('send.title')}</h2>
			<SendPaymentForm />
		</div>
	);
};

export default Send;