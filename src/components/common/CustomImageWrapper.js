import { Box, Grid, Typography } from '@mui/material';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import clsx from 'clsx';
import { makeStyles } from 'models/makeStyles';
import React from 'react';

const useStyles = makeStyles()((theme) => ({
  container: {
    width: '672px',
    height: '628px',
    maxWidth: '100%',
    borderRadius: '16px',
    position: 'relative',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      height: '328px',
    },
  },
  image: {
    zIndex: 0,
    width: '100%',
    height: '100%',
    position: 'relative',
    objectFit: 'cover',
    borderRadius: '16px',
  },
  wrapperDate: {
    width: '177px',
    height: '72px',
    position: 'absolute',
    zIndex: 3,
    top: '20px',
    left: '24px',
    [theme.breakpoints.down('lg')]: {
      width: '130px',
      height: '50px',
      left: '9px',
    },
  },
  containerOpenWithOutlinedIcon: {
    position: 'absolute',
    top: '20px',
    right: '24px',
    width: '70px',
    height: '70px',
    zIndex: 3,
    [theme.breakpoints.down('lg')]: {
      width: '50px',
      height: '50px',
      right: '10px',
    },
  },
  containerFavorite: {
    position: 'absolute',
    width: '86px',
    height: '56px',
    left: '20px',
    bottom: '20px',
    zIndex: 3,
    cursor: 'pointer',
    [theme.breakpoints.down('lg')]: {
      width: '60px',
      height: '46px',
      left: '10px',
    },
  },
  commonBackgroundColor: {
    background: 'rgba(71, 75, 79, 0.6)',
    backdropFilter: 'blur(30px)',
    borderRadius: '16px',
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  likes: {
    color: '#fff',
    margin: theme.spacing(1),
    cursor: 'pointer',
    fontSize: '16px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '14px',
    },
  },
  commonIconColor: {
    color: '#fff',
    fontSize: '35px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '25px',
    },
  },
}));

function CustomImageWrapper({ imageUrl, timeCreated, likes }) {
  const { classes } = useStyles();

  const [isShown, setIsShown] = React.useState(false);

  const createdAt = new Date(timeCreated);
  const dayOfWeek = createdAt.getDay();
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth();

  const handleHoverEnter = () => {
    setIsShown(true);
  };
  const handleHoverLeave = () => {
    setIsShown(false);
  };
  return (
    <Box
      className={classes.container}
      onMouseEnter={() => handleHoverEnter()}
      onMouseLeave={() => handleHoverLeave()}
    >
      {isShown && (
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          className={clsx(classes.commonBackgroundColor, classes.wrapperDate)}
        >
          <CameraAltOutlinedIcon className={classes.commonIconColor} />
          <Grid item>
            <Typography variant="caption" color="white">
              Photo taken on
            </Typography>
            <Typography variant="h6" color="white">
              {dayOfWeek}/{month}/{year}
            </Typography>
          </Grid>
        </Grid>
      )}
      {isShown && (
        <Box
          className={clsx(
            classes.commonBackgroundColor,
            classes.containerOpenWithOutlinedIcon,
          )}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={imageUrl}
            className={classes.link}
          >
            <OpenWithOutlinedIcon className={classes.commonIconColor} />
          </a>
        </Box>
      )}
      {isShown && (
        <Box
          className={clsx(
            classes.commonBackgroundColor,
            classes.containerFavorite,
          )}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            width={'100%'}
            height={'100%'}
          >
            <FavoriteBorderOutlinedIcon className={classes.commonIconColor} />
            <Grid item className={classes.likes}>
              {likes}
            </Grid>
          </Grid>
        </Box>
      )}
      <img src={imageUrl} alt="tree image" className={classes.image} />
    </Box>
  );
}
export default CustomImageWrapper;
