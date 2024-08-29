import { Box, Card, CardHeader, Container, Stack } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useSettingsContext } from '../components/settings';
import SubCategory from '../sections/ProductSubCategory/SubCategory';

// ----------------------------------------------------------------------

export default function SubCategoryPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Page Four | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
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
