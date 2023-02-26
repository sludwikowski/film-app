import React, { useEffect, useState } from 'react';
import { Box, Toolbar, Typography, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import PersonMediaGrid from '@/components//PersonMediaGrid';
import tmdbConfigs from '../api/configs/tmdb.configs';
import uiConfigs from '../configs/ui.configs';
import Container from '@/components/Container';
import personApi from '../api/modules/person.api';
import { setGlobalLoading } from '@/features/globalLoadingSlice';

function PersonDetail() {
  const { personId } = useParams();
  const [person, setPerson] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const getPerson = async () => {
      dispatch(setGlobalLoading(true));
      const { response, err } = await personApi.detail({ personId });
      dispatch(setGlobalLoading(false));

      if (err) toast.error(err.message);
      if (response) setPerson(response);
    };

    getPerson();
  }, [personId]);

  return (
    <>
      <Toolbar />
      {person && (
        <Box sx={{ ...uiConfigs.style.mainContent }}>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Box
              sx={{
                width: { xs: '50%', md: '20%' },
              }}
            >
              <Box
                sx={{
                  paddingTop: '160%',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: 'darkgrey',
                  backgroundImage: `url(${tmdbConfigs.posterPath(
                    person.profile_path,
                  )})`,
                }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: '100%', md: '80%' },
                padding: { xs: '1rem 0', md: '1rem 2rem' },
              }}
            >
              <Stack spacing={2}>
                <Typography variant="h5" fontWeight="700">
                  {`${person.name} (${
                    person.birthday && person.birthday.split('-')[0]
                  }`}
                  {person.deathday &&
                    ` - ${person.deathday && person.deathday.split('-')[0]}`}
                  )
                </Typography>
                <Typography sx={{ ...uiConfigs.style.typoLines(10) }}>
                  {person.biography}
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Container header="medias">
            <PersonMediaGrid personId={personId} />
          </Container>
        </Box>
      )}
    </>
  );
}

export default PersonDetail;
