import React from 'react';
import { View } from 'react-native';
import { useAuth } from '../../hooks/auth';

import { Button } from '../Button';
import { COLORS } from '../../theme/colors';

import { styles } from './styles';

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        title="Entrar com o github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  );
}