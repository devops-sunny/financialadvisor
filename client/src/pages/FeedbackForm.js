import { Box, Card, CardHeader, Container, Stack } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useSettingsContext } from '../components/settings';
import FeedBack from '../sections/FeedBack/FeedBack';

export default function Feedback() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Feedback Six </title>
      </Helmet>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack spacing={5}>
          <Card>
            <CardHeader title="Custom" sx={{ mb: 2 }} />
            <Box sx={{ height: 390 }}>
             <FeedBack />
            </Box>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
