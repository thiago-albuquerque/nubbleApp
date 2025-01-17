import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {Screen, FormTextInput, Text, Button} from '@components';
import {RootStackParamList} from '@routes';

import {
  forgotPasswordSchema,
  ForgotPasswordSchemaType,
} from './forgotPasswordSchema';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({route, navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm(formValues: ForgotPasswordSchemaType) {
    console.log(formValues);
    navigation.reset({
      index: 1,
      routes: [
        {name: 'LoginScreen'},
        {
          name: 'SuccessScreen',
          params: {
            title: `Enviamos as instruções ${'\n'}para o e-mail informado!`,
            description:
              'Clique no link enviado no seu e-mail para recuperar sua senha',
            icon: {
              name: 'messageRound',
              color: 'primary',
              size: 48,
            },
          },
        },
      ],
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mt="s24" mb="s16">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        {route.params.description}
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="digite seu e-mail"
        autoCapitalize="none"
        keyboardType="email-address"
        boxProps={{mb: 's40'}}
      />
      <Button
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        title="Recuperar senha"
      />
    </Screen>
  );
}
