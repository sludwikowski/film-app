import React from 'react';
import { Grid } from '@mui/material';
import MediaItem from './MediaItem';

function MediaGrid({ medias, mediaType }) {
  return (
    <Grid container spacing={1} sx={{ marginRight: '-8px!important' }}>
      {medias.map((media, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <MediaItem media={media} mediaType={mediaType} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MediaGrid;
