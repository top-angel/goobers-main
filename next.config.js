const {
	PHASE_DEVELOPMENT_SERVER,
	PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
	const isProd = phase == PHASE_PRODUCTION_BUILD;
	const isDev = phase == PHASE_DEVELOPMENT_SERVER;

	const BSC_CHAIN_ID = isProd ? 56 : isDev ? 97 : null;
	const ETH_CHAIN_ID = isProd ? 1 : isDev ? 4 : null;
	const CHAIN = isProd ? "MAINNET" : isDev ? "TESTNET" : null;

	return {
		env: {
			CHAIN,
			BSC_CHAIN_ID,
			ETH_CHAIN_ID,
		}
	}
}
