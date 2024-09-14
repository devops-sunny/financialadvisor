import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
// components
import Iconify from '../../components/iconify';
import { MapControl, MapMarker, MapPopup } from '../../components/map';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  zIndex: 0,
  height: 560,
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right': {
    display: 'none',
  },
}));

// ----------------------------------------------------------------------

ContactMap.propTypes = {
  contacts: PropTypes.array,
};

export default function ContactMap({ contacts }) {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <StyledRoot>
 
        <MapControl hideGeolocateControl />

        {contacts.map((country, index) => (
          <MapMarker
            key={`marker-${index}`}
            latitude={country.latlng[0]}
            longitude={country.latlng[1]}
            onClick={(event) => {
              event.originalEvent.stopPropagation();
              setPopupInfo(country);
            }}
          />
        ))}

        {popupInfo && (
          <MapPopup
            longitude={popupInfo.latlng[1]}
            latitude={popupInfo.latlng[0]}
            onClose={() => setPopupInfo(null)}
            sx={{
              '& .mapboxgl-popup-content': { bgcolor: 'common.white' },
              '&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip': { borderTopColor: '#FFF' },
              '&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip': { borderBottomColor: '#FFF' },
            }}
          >
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              Address
            </Typography>

            <Typography component="div" variant="caption">
              {popupInfo.address}
            </Typography>

            <Typography
              component="div"
              variant="caption"
              sx={{ mt: 1, display: 'flex', alignItems: 'center' }}
            >
              <Iconify icon="eva:phone-fill" width={14} sx={{ mr: 0.5 }} />
              {popupInfo.phoneNumber}
            </Typography>
          </MapPopup>
        )}
  
    </StyledRoot>
  );
}