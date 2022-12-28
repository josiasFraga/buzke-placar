const INITIAL_STATE = {
	torneios: [],
	torneios_loading: false,

	jogos: [],
	jogos_loading: false,
};

export const appReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {

		case 'LOAD_TORNEIOS':
			return { ...state, torneios: [], torneios_loading: true }
		case 'LOAD_TORNEIOS_SUCCESS':
			return { ...state, torneios: action.payload, torneios_loading: false }
		case 'LOAD_TORNEIOS_FAILED':
			return { ...state, torneios: [], torneios_loading: false }

		case 'LOAD_JOGOS':
			return { ...state, jogos: [], jogos_loading: true }
		case 'LOAD_JOGOS_SUCCESS':
			return { ...state, jogos: action.payload, jogos_loading: false }
		case 'LOAD_JOGOS_FAILED':
			return { ...state, jogos: [], jogos_loading: false }

		default:
			return state;
	}
}
