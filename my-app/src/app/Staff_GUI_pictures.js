import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { doSigninAsync, selectEmail, selectUserName, logout, selectToken, doSignupAsync, selectStaff } from './loginSlice'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';



const images = [
    {
        url: 'http://127.0.0.1:8000/media/Staff_GUI/Products.jpeg',
        title: 'Products',
        width: '40%',
        
        path: "/staffGUI/prod"
    },
    {
        url: 'http://127.0.0.1:8000/media/Staff_GUI/Categories.jpg',
        title: 'Categories',
        width: '30%',
        path: "/staffGUI/Prod"
    },
    {
        url: 'http://127.0.0.1:8000/media/Staff_GUI/Customers.jpg',
        title: 'Customers',
        width: '30%',
        path: "/staffGUI/Prod"
    },
];



const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

const Staff_GUI = () => {
    const userName = useSelector(selectUserName);
    const [value, setValue] = React.useState(0);
const myFunction= (path) => {
    // console.log(path)
    // location.replace(path)
    <Link className="nav-link" to="/staffGUI/prod" ></Link>
  }
    
    return (<div class="w3-sand w3-grayscale w3-large" style={{ width: "fixed", height: "fixed" }}>
        <h3 className="mt-4"><i>Hi {userName}! please select your choice </i></h3>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            {images.map((image) => (
                
                <ImageButton
                    focusRipple
                    
                    key={image.title}
                    style={{
                        width: image.width,
                    }}
                    
                    onClick={() => myFunction(image.path)}>
                    
                    <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                </ImageButton>
            ))}
        </Box>
    </div>
    )
}

export default Staff_GUI