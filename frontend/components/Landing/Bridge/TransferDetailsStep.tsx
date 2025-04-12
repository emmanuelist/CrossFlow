import React from 'react';

const TransferDetailsStep: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
                <div className="space-y-2">
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Amount (USDC)</div>
                    <div className="flex items-center bg-white dark:bg-gray-800/70 p-2 rounded-md border border-gray-200 dark:border-gray-700">
                        <input type="text" value="300" readOnly className="w-full bg-transparent border-none focus:outline-none text-lg font-medium p-0" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">USDC</span>
                    </div>
                    <div className="text-xs text-right text-gray-500 dark:text-gray-400">
                        Balance: 1,245.00 USDC
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Recipient Address</div>
                    <div className="bg-white dark:bg-gray-800/70 p-2 rounded-md border border-gray-200 dark:border-gray-700 text-sm font-mono overflow-hidden text-ellipsis">
                        GDQP2KPQGKIHYJGXNUIYOMHARUWHXUDLQXRKHN...
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Transaction Fee</div>
                    <div className="flex justify-between">
                        <span className="text-sm">Estimated fee:</span>
                        <span className="text-sm font-medium text-green-600 dark:text-green-400">~$0.01</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransferDetailsStep;