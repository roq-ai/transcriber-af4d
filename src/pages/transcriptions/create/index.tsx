import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createTranscription } from 'apiSdk/transcriptions';
import { transcriptionValidationSchema } from 'validationSchema/transcriptions';
import { VideoInterface } from 'interfaces/video';
import { getVideos } from 'apiSdk/videos';
import { TranscriptionInterface } from 'interfaces/transcription';

function TranscriptionCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: TranscriptionInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createTranscription(values);
      resetForm();
      router.push('/transcriptions');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<TranscriptionInterface>({
    initialValues: {
      content: '',
      video_id: (router.query.video_id as string) ?? null,
    },
    validationSchema: transcriptionValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Transcriptions',
              link: '/transcriptions',
            },
            {
              label: 'Create Transcription',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Transcription
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.content}
            label={'Content'}
            props={{
              name: 'content',
              placeholder: 'Content',
              value: formik.values?.content,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<VideoInterface>
            formik={formik}
            name={'video_id'}
            label={'Select Video'}
            placeholder={'Select Video'}
            fetcher={getVideos}
            labelField={'title'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/transcriptions')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'transcription',
    operation: AccessOperationEnum.CREATE,
  }),
)(TranscriptionCreatePage);
