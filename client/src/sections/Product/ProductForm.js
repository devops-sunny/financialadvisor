import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { DialogAnimate } from '../../components/animate';
import { RHFTextField, RHFSelect } from '../../components/hook-form';
import FormProvider from '../../components/hook-form/FormProvider';
import { updateProduct, addProduct } from '../../redux/Product/actions';
import { fetchSubCategories } from '../../redux/SubCategory/actions';

const Schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  status: Yup.string().required('Status is required'),
  categories_id: Yup.string().required('Category is required'),
  details: Yup.string().required('Details are required'),
});

const statuses = [
  { id: 'Active', title: 'Active' },
  { id: 'Draft', title: 'Draft' },
  { id: 'Inactive', title: 'Inactive' },
];

const ProductForm = ({ handleClose, currentRow }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [base64Image, setBase64Image] = useState('');

  const categoryOptions = useSelector((state) => state.SubCategory.categories);

  
  

  const defaultValues = currentRow;

  useEffect(() => {
    if (categoryOptions && categoryOptions.length > 0) {
      const formattedData = categoryOptions.map((item) => ({
        id: item._id,
        title: item.name,
      }));
      setCategories(formattedData);
    }
  }, [categoryOptions]);

  useEffect(() => {
    dispatch(fetchSubCategories());
  }, [dispatch]);


  useEffect(()=>{
    if(defaultValues.image){
        setBase64Image(defaultValues.image)
    }
  },[defaultValues])


  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {

    const productData = {
      name: data.name,
      description: data.description,
      status: data.status,
      category: data.categories_id,
      details: data.details,
      keywords: ["key1" ,"key2"] ||data.keywords,
      image : base64Image
    };

    console.log(data ,base64Image)


    if (data._id) {
      dispatch(updateProduct(data._id, productData));
    } else {
      dispatch(addProduct(productData));
    }
    handleClose();
  };

  return (
    <>
      <DialogAnimate
        onClose={handleClose}
        title={currentRow._id ? 'Update Product' : 'Add Product'}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4} p={3}>
            <RHFTextField name="name" label="Name *" autoFocus />
            <RHFTextField name="description" label="Description *" />
            <RHFSelect name="status" label="Status *" options={statuses} />
            <RHFSelect name="categories_id" label="Category *" options={categories} />
            <RHFTextField name="details" label="Details *" />
            <input name="image" type="file" onChange={handleFileChange} />

            {base64Image && (
              <div>
                <h3>Uploaded Image:</h3>
                <img src={base64Image} alt="Uploaded" style={{ width: '200px', height: 'auto' }} />
              </div>
            )}
          </Stack>
          <Stack direction="row" spacing={1} justifyContent="flex-end" p={3}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              {currentRow._id ? 'Update' : 'Save'}
            </Button>
          </Stack>
        </FormProvider>
      </DialogAnimate>
    </>
  );
};

ProductForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  currentRow: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
    category: PropTypes.string,
    details: PropTypes.string,
    keywords: PropTypes.array,
    image: PropTypes.string,
  }),
};

export default ProductForm;
