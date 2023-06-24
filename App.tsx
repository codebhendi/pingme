import { StyleSheet, View } from 'react-native';
import { Typography, Colors, Spacings } from 'react-native-ui-lib';
import BaseModule from './modules';

Colors.loadColors({
  pink: '#FF69B4',
  gold: '#FFD700',
});

Typography.loadTypographies({
  h1: { fontSize: 58, fontWeight: '300', lineHeight: 80 },
  h2: { fontSize: 46, fontWeight: '300', lineHeight: 64 },
});

Spacings.loadSpacings({
  page: 20,
});

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <BaseModule />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
