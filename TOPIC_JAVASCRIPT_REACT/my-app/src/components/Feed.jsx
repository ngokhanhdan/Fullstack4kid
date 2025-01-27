import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';


const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }}} >
        <Box sx={{ height: { sx: 'auto', md: '92vh', borderRight: '1px solid #3d3d3d', px: {sx:0, md: 2 }}}}>
        Sidebar

        <Typography variant="h1" component="h2">
        Heading
        </Typography>
        </Box>
    </Stack>
    
  )
}

export default Feed
