import React, { useState } from 'react';

import {
  Button,
  Platform,
  Text,
  Vibration,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';

const Separator = () => {
  return <View style={Platform.OS === 'android' ? styles.separator : null} />;
};

const App = () => {
  const ONE_SECOND_IN_MS = 1000;
  const [Segundos,SetSegundos] = useState(0)


  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header, styles.paragraph]}>Vibration API</Text>
      <View>
        <Button title="Vibrar" onPress={() => Vibration.vibrate()} />
      </View>
      <Separator />

      
  
  
  <input type="range" id="num" name="segundos" min="0" max="20"
  value={Segundos}
  onChange={SetSegundos}/>
  
  

      <Button
        title="Vibrar Por segundos elegidos"
        onPress={() => Vibration.vibrate(Segundos)}
      />
      <Separator />
      <Button
        title="Cancelar vibracao"
        onPress={() => Vibration.cancel()}
        color="#FF0000"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 44,
    padding: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
