import { Box, Card, CardHeader, Container, Stack } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useSettingsContext } from '../components/settings';
import AppointmentsFinancialAdviser from '../sections/AppointmentsFinancialAdviser/AppointmentsFinancialAdviser';

export default function AppointmentsFinancialAdviserPage() {
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
            <Box sx={{ height: 800 }}>
              <AppointmentsFinancialAdviser />
            </Box>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
