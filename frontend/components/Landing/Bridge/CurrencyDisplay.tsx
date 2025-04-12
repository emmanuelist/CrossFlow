import React from 'react';
import { motion } from "framer-motion";

interface Currency {
    code: string;
    name: string;
    symbol: string;
}

const currencies: Currency[] = [
    { code: "NGN", name: "Nigerian Naira", symbol: "₦" },
    { code: "KES", name: "Kenyan Shilling", symbol: "KSh" },
    { code: "GHS", name: "Ghanaian Cedi", symbol: "₵" },
    { code: "ZAR", name: "South African Rand", symbol: "R" },
    { code: "UGX", name: "Ugandan Shilling", symbol: "USh" },
    { code: "XOF", name: "West African CFA", symbol: "CFA" },
];

const CurrencyDisplay: React.FC = () => {
    return (
        <motion.div
            className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <h4 className="font-semibold mb-3">Supported Currencies:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {currencies.map((currency, i) => (
                    <motion.div
                        key={currency.code}
                        className="flex items-center p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        whileHover={{ y: -2, backgroundColor: "rgba(244, 63, 94, 0.05)" }}
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 flex items-center justify-center text-white font-bold text-sm mr-2">
                            {currency.symbol}
                        </div>
                        <div>
                            <div className="text-xs font-medium">{currency.code}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{currency.name}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default CurrencyDisplay;