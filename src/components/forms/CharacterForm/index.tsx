import React from 'react';
import { Form, Formik, FormikProps } from 'formik';
import {
  Button, Container, Grid, Paper,
} from '@material-ui/core';

import { Character, ClassType } from '../../../store/characters/types';
import { Input } from '../../formElements/Input';
import { useAddOrUpdateCharacter } from './hooks';
import { Select } from '../../formElements/Select';
import { validationSchema } from './validation';
import { getError } from '../../../helpers/getFormikError';

interface CharacterFormProps {
  character?: Character;
}

export interface CharacterFormFields {
  name: string,
  level: number,
  defence: number,
  accuracy: number,
  classType: ClassType
}

export const CharacterForm: React.FC<CharacterFormProps> = ({ character }: CharacterFormProps) => {
  const handleSubmit = useAddOrUpdateCharacter(character);

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: 16 }}>

        <Formik
          initialValues={getInitialValues(character)}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formProps: FormikProps<CharacterFormFields>) => (
            <Form>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Input id="name" name="name" label="Name" error={getError('name', formProps)} helperText={getError('name', formProps)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select id="classType" name="classType" label="Class" options={getClassesAsOptions()} error={getError('classType', formProps)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input id="level" name="level" label="Level" type="number" error={getError('level', formProps)} helperText={getError('level', formProps)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input id="defence" name="defence" label="Defence" type="number" error={getError('defence', formProps)} helperText={getError('defence', formProps)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input id="accuracy" name="accuracy" label="Accuracy" type="number" error={getError('accuracy', formProps)} helperText={getError('accuracy', formProps)} />
                </Grid>

              </Grid>
              <br />
              <Button variant="contained" color="primary" type="submit">{character ? 'Update' : 'Add'}</Button>
            </Form>
          )}
        </Formik>

      </Paper>
    </Container>
  );
};

const getClassesAsOptions = () => Object.values(ClassType)
  .map((value: string) => ({ value, label: value }));

function getInitialValues(character: Character | undefined): any {
  return {
    name: character?.name ?? '',
    level: character?.level ?? undefined,
    defence: character?.defence ?? undefined,
    accuracy: character?.accuracy ?? undefined,
    classType: character?.classType ?? ClassType.BEGINNER,
  };
}

CharacterForm.defaultProps = {
  character: undefined,
};

export default CharacterForm;
