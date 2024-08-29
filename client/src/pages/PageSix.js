import { Helmet } from 'react-helmet-async';
import { Box, Card, CardHeader, Container, Stack } from '@mui/material';
import { useSettingsContext } from '../components/settings';
import Category from '../sections/ProductCategory/Category';
import SubCategory from '../sections/ProductSubCategory/SubCategory';

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
              <Category />
            </Box>
          </Card>
        </Stack>


        <Stack spacing={5}>
          <Card>
            <CardHeader title="Custom" sx={{ mb: 2 }} />
            <Box sx={{ height: 390 }}>
            <SubCategory />
            </Box>
          </Card>
        </Stack>

       
      </Container>
    </>
  );
}
