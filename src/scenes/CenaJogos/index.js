import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";

export default function CenaJogos() {

    const [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

	const jogos = useSelector(state => state.appReducer.jogos);
	const isLoading = useSelector(state => state.appReducer.jogos_loading);

    const jogo_id = searchParams.get("jogo_id");

	React.useEffect(() => {
		dispatch({type: 'LOAD_JOGOS', payload: {jogo_id: jogo_id}});
	}, []);

    return (
        <Container maxWidth="xl" className='pt-4'>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {jogos.map((jogo, index)=>{
                    return (
                    <Grid item sm={12} md={6} lg={4} xl={3} key={index} onClick={()=>{ navigate('/jogos/' + jogo.Torneio.id) }}>
                        <Card sx={{ width: "100%" }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={jogo.Torneio.img}
                            alt={jogo.Torneio.nome}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {jogo.Torneio.nome}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {jogo.Torneio.descricao}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                    </Grid>
                    )

                })}
            </Grid>
        </Box>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
            onClick={()=>{}}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
        </Container>
    )
}