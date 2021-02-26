import React from 'react';
import { Form, Formik, FormikProps } from 'formik';
import {
  Button, Container, Grid, Paper,
} from '@material-ui/core';

import { useSelector } from 'react-redux';
import { Character, ClassType } from '../../../store/characters/types';
import { Input } from '../../formElements/Input';
import { useAddOrUpdateCharacter, useDeleteCharacter } from './hooks';
import { Select } from '../../formElements/Select';
import { validationSchema } from './validation';
import { getError } from '../../../helpers/getFormikError';
import { ReduxState } from '../../../app/rootReducer';

interface CharacterFormProps {
  character?: Character;
}

export interface CharacterFormFields {
  slot: number,
  name: string,
  level: number,
  defence: number,
  accuracy: number,
  classType: ClassType
}

export const CharacterForm: React.FC<CharacterFormProps> = ({ character }: CharacterFormProps) => {
  const handleSubmit = useAddOrUpdateCharacter(character);
  const handleDelete = useDeleteCharacter(character);
  const { characters } = useSelector((state: ReduxState) => state.characters);

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: 16 }}>
        <Formik
          initialValues={getInitialValues(character, characters)}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formProps: FormikProps<CharacterFormFields>) => (
            <Form>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Input id="slot" name="slot" label="Character slot" type="number" error={hasError('slot', formProps)} helperText={getError('slot', formProps)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input id="name" name="name" label="Name" disabled={character?.name !== undefined} error={hasError('name', formProps)} helperText={getError('name', formProps)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select id="classType" name="classType" label="Class" options={getClassesAsOptions()} error={hasError('classType', formProps)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input id="level" name="level" label="Level" type="number" error={hasError('level', formProps)} helperText={getError('level', formProps)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input id="defence" name="defence" label="Defence" type="number" error={hasError('defence', formProps)} helperText={getError('defence', formProps)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input id="accuracy" name="accuracy" label="Accuracy" type="number" error={hasError('accuracy', formProps)} helperText={getError('accuracy', formProps)} />
                </Grid>
              </Grid>
              <br />
              <Button variant="contained" color="primary" type="submit">{character ? 'Update' : 'Add'}</Button>
              {character && <Button variant="text" color="secondary" type="button" onClick={handleDelete}>Delete</Button>}
            </Form>
          )}
        </Formik>

      </Paper>
    </Container>
  );
};

const hasError = (property: keyof CharacterFormFields, form: FormikProps<CharacterFormFields>)
  : boolean => getError(property, form) !== undefined;

const getClassesAsOptions = () => Object.values(ClassType)
  .map((value: string) => ({ value, label: value }));

function getInitialValues(character: Character | undefined, characters: Character[]): any {
  return {
    slot: getSlotValue(characters, character),
    name: character?.name ?? '',
    level: character?.level ?? '',
    defence: character?.defence ?? '',
    accuracy: character?.accuracy ?? '',
    classType: character?.classType ?? ClassType.BEGINNER,
  };
}

CharacterForm.defaultProps = {
  character: undefined,
};

export default CharacterForm;

function getSlotValue(characters: Character[], existingCharacter?: Character | undefined) {
  if (existingCharacter) {
    const index = characters.findIndex(
      (character) => character.name === existingCharacter.name,
    );
    return index + 1;
  }
  return characters.length + 1;
}
