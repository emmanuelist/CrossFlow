import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL;

export const fetchBalance = async (address) => {
	const response = await axios.get(`${API_BASE}/wallet/balance?address=${address}`);
	return response.data.balance;
};

export const fetchTransactions = async (address) => {
	const response = await axios.get(`${API_BASE}/transactions?address=${address}`);
	return response.data.transactions;
};

export const sendPaymentRequest = async (paymentData) => {
	const response = await axios.post(`${API_BASE}/send`, paymentData);
	return response.data;
};