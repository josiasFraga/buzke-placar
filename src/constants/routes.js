import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import CenaTorneios from '../scenes/CenaTorneios';
import CenaJogos from '../scenes/CenaJogos';

export default function AppRoutes(props) {


	return (
		<React.Suspense fallback={<div>Carregando...</div>}>
            <Routes>
                <Route path='/' element={<CenaTorneios />} />
                <Route path='/jogos/:torneio_id' element={<CenaJogos />} />
            </Routes>
		</React.Suspense>
	);
}