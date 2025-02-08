import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
	const { i18n } = useTranslation();

	return (
		<select
			onChange={(e) => i18n.changeLanguage(e.target.value)}
			className="language-selector"
		>
			<option value="en">English</option>
			<option value="sw">Swahili</option>
			<option value="ha">Hausa</option>
		</select>
	);
};

export default LanguageSelector;