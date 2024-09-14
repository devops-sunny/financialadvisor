// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE } from '../../../routes/paths';
// config
import { PATH_AFTER_LOGIN } from '../../../config-global';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="eva:home-fill" />,
    path: '/',
  },

  {
    title: 'About us',
    icon: <Iconify icon="eva:home-fill" />,
    path: PATH_PAGE.about,
  },
  {
    title: 'FAQs',
    icon: <Iconify icon="eva:home-fill" />,
    path: PATH_PAGE.faqs,
  },
  {
    title: 'Contact us',
    icon: <Iconify icon="eva:home-fill" />,
    path: PATH_PAGE.contact,
  },
  {
    title: 'Legal',
    path: '/pages',
    icon: <Iconify icon="eva:file-fill" />,
    children: [
      {
        subheader: 'Other',
        items: [
          { title: 'Terms and Condition', path: PATH_PAGE.about },
          { title: 'Privacy Policy', path: PATH_PAGE.contact },
        ],
      },
      // {
      //   subheader: 'Dashboard',
      //   items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
      // },
    ],
  },
];

export default navConfig;
