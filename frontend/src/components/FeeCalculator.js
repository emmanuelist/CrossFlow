const FeeCalculator = ({ chain, amount }) => {
	const [fee, setFee] = useState(0);

	useEffect(() => {
		axios.get(`/api/fees?chain=${chain}`).then(res => setFee(res.data.fee));
	}, [chain]);

	return (
		<div>
			<p>Estimated Fee: {fee} {chain === 'stellar' ? 'XLM' : 'ETH'}</p>
		</div>
	);
};