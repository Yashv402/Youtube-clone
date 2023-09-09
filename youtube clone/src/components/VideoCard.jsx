import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from '../utils/constants'


const VideoCard = ({Video, Video: {videoId, publishedText}}) => {

  return (
    <Card sx ={{ width: { md: '320px', xs:'100%'}, boxshadow: 'nonw', borderRadius: 0}}> 
      <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
      <CardMedia 
      image={Video?.thumbnail?.[0]?.url}
      alt={Video?.title}
      sx={{ width: 358, height: 180 }}/>
      </Link>
      <CardContent sx = {{backgroundColor: '#1e1e1e', height: '106px'}}>
      <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
        <Typography variant='subtitle1' fontWeight='bold' color="#FFF">
          {Video?.title.slice(0,60)  || demoVideoTitle.slice(0.60)}
        </Typography>
      </Link>
      <Link to={videoId?.channelId? `/channel/${videoId?.channelId}`: demoChannelUrl}>
        <Typography variant='subtitle1' fontWeight='bold' color="gray">
          {Video?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px'}} />
        </Typography>
      </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard