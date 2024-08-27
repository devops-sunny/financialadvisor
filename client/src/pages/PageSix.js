import { Helmet } from 'react-helmet-async';
import { Box, Card, CardHeader, Container, Stack } from '@mui/material';
import { useSettingsContext } from '../components/settings';
import DataGridBasic from "../sections/mui/data-grid/DataGridBasic";

export default function PageSix() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Page Six </title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack spacing={5}>
          <Card>
            <CardHeader title="Custom" sx={{ mb: 2 }} />
            <Box sx={{ height: 390 }}>
              <DataGridBasic data={[]} />
            </Box>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
