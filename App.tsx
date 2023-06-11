import { StyleSheet, View } from 'react-native';
import BaseModule from './modules';

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
