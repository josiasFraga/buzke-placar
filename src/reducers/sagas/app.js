import { call, put, takeLatest } from 'redux-saga/effects';
import { callApi } from '../../services/api';
import { toast } from "react-toastify";

function* loadTorneios({ payload }) {
	
	try {

		const response = yield call(callApi, {
			endpoint: process.env.REACT_APP_API_URL + '/placares/torneios',
			method: 'GET',
			params: payload
		});

		if (response.status === 200) {
			yield put({ type: 'LOAD_TORNEIOS_SUCCESS', payload: response.data.dados });
		} else {
			toast.error("Ocorreu um erro ao buscar os torneios, tente novamente.");
			yield put({ type: 'LOAD_TORNEIOS_FAILED', payload: {} });
		}
	} catch ({ message, response }) {
		console.warn('[ERROR : LOAD_TORNEIOS_FAILED]', { message, response });
		toast.error("Ocorreu um erro ao buscar os torneios, tente novamente.");
		yield put({ type: 'LOAD_TORNEIOS_FAILED', payload: {} });
	}
}

function* loadJogos({ payload }) {
	
	try {

		const response = yield call(callApi, {
			endpoint: process.env.REACT_APP_API_URL + '/placares/jogos/' + payload.torneio_id,
			method: 'GET',
			//params: payload
		});

		if (response.status === 200) {
			yield put({ type: 'LOAD_JOGOS_SUCCESS', payload: response.data.dados });
		} else {
			toast.error("Ocorreu um erro ao buscar os jogos, tente novamente.");
			yield put({ type: 'LOAD_JOGOS_FAILED', payload: {} });
		}
	} catch ({ message, response }) {
		console.warn('[ERROR : LOAD_JOGOS_FAILED]', { message, response });
		toast.error("Ocorreu um erro ao buscar os jogos, tente novamente.");
		yield put({ type: 'LOAD_JOGOS_FAILED', payload: {} });
	}
}

export default function* () {
	yield takeLatest('LOAD_TORNEIOS', loadTorneios);
	yield takeLatest('LOAD_JOGOS', loadJogos);
}
