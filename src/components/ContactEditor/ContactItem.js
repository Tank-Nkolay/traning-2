import { Field, Formik } from 'formik';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
// ===== styled ========
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from '@chakra-ui/react';
// =====================
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
// =====================

let schema = yup.object().shape({
  name: yup.string().required('Please, enter name'),
  number: yup.string().min(7).required('Please, enter correct number'),
});

export function ContactItem() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <Box>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          const findDuplicateName = (contact, newName) => {
            return contacts.find(({ name }) => name.toLowerCase() === newName);
          };
          const { name } = values;
          const nameToRegistr = name.toLowerCase();
          if (findDuplicateName(contacts.items, nameToRegistr)) {
            toast.error(`${name} is already in your contacts`);
            return;
          }

          dispatch(addContact(values));
          resetForm();
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl isRequired>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  type="name"
                  variant="filled"
                  placeholder="Enter name"
                />
              </FormControl>
              <FormControl
                isRequired
                isInvalid={!!errors.number && touched.number}
              >
                <FormLabel htmlFor="number">Number</FormLabel>
                <Field
                  as={Input}
                  id="number"
                  name="number"
                  type="number"
                  placeholder="Enter phone"
                  variant="filled"
                />
                <FormErrorMessage>{errors.number}</FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="telegram" width="full">
                Add contact
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
      <Toaster position="top-center" />
    </Box>
  );
}
