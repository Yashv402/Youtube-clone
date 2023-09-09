import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'

const ChannelCard = ({channelDetail}) => {


  return(
    <Box sx={{
      boxShadow: 'none',
      borderRadius: '20px'
    }}>
      <Link to={`/channel/${channelDetail?.channelId}`}>
        <CardContent sx ={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
          <CardMedia image={channelDetail?.channelThumbnail?.[0]?.url || demoProfilePicture}
          alt={channelDetail?.channelTitle} sx ={{borderRadius: '50%', height: '180px', width: '180px'}}/>
          <Typography variant = "h6">
            {channelDetail?.channelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px'}} />
          </Typography>
        </CardContent>
  
      </Link>
    </Box>
  )
}

export default ChannelCard