import React from 'react'
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard} from './';

const Videos = ({videos, selectedCategory}) => {
  console.log(selectedCategory);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}> 
    {videos.map((item, idx)=>(
      <Box key ={idx}> 
      {console.log(item.channelTitle)}
      {(item.channelId && item.channelTitle === selectedCategory) && <ChannelCard channelDetail={item} />}
      {item.videoId && <VideoCard Video={item} />}
      </Box>
    ))}</Stack>
  )
}

export default Videos
