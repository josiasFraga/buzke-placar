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

export default function CenaTorneios() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

	const torneios = useSelector(state => state.appReducer.torneios);
	const isLoading = useSelector(state => state.appReducer.torneios_loading);
    
	React.useEffect(() => {
		dispatch({type: 'LOAD_TORNEIOS', payload: {}});
	}, []);

    return (
        <Container maxWidth="xl" className='pt-4'>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {torneios.map((torneio, index)=>{
                    return (
                    <Grid item sm={12} md={6} lg={4} xl={3} key={index} onClick={()=>{ navigate('/jogos/' + torneio.Torneio.id) }}>
                        <Card sx={{ width: "100%" }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={torneio.Torneio.img}
                            alt={torneio.Torneio.nome}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {torneio.Torneio.nome}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {torneio.Torneio.descricao}
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