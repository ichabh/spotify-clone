import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/RepeatOne';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <img className='footer_albumLogo' src='https://upload.wikimedia.org/wikipedia/en/4/4a/Joji_-_Glimpse_of_Us.png' alt='' />
        <div className='footer_songinfo'>
          <h4>Glimpse of Us</h4>
          <p>Joji</p>
        </div>
      </div>

      <div className="footer_center">
        <ShuffleIcon className='footer_green' />
        <SkipPreviousIcon className='footer_icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer_icon' />
        <SkipNextIcon className='footer_icon' />
        <RepeatIcon className='footer_green' />

      </div>

      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider  />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer