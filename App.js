import { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {

  const [escolhaUsuario, setEscolhaUsuario] = useState('');
  const [escolhaApp, setEscolhaApp] = useState('');
  const [resultado, setResultado] = useState('');
  
  const derrota = "Você Perdeu";
  const vitoria = "Você Venceu";
  const empate = "Empate";

 
  const setAppChoice = () => {
    const options = ['Pedra', 'Papel', 'Tesoura'];
    const randomChoice = options[Math.floor(Math.random() * 3)];
    return randomChoice;
  };

  
  const setWinner = (escolhaUsuario, escolhaApp) => {

    if (escolhaUsuario === escolhaApp) {
      return empate;
    } 
    else if (
      (escolhaUsuario === 'Pedra' && escolhaApp === 'Tesoura') ||
      (escolhaUsuario === 'Tesoura' && escolhaApp === 'Papel') ||
      (escolhaUsuario === 'Papel' && escolhaApp === 'Pedra')
    )
    {
      return vitoria;
    } 
    else {
      return derrota;
    }
  };

  
  const play = (escolha) => {
    const escolhaApp = setAppChoice();
    const resultado = setWinner(escolha, escolhaApp);

    setEscolhaUsuario(escolha);
    setEscolhaApp(escolhaApp);
    setResultado(resultado);
  };


  const reset = () => {
    setEscolhaUsuario('');
    setEscolhaApp('');
    setResultado('');
  };


  return (
    <View style={styles.container}>
  
      <Text style={styles.title}>Pedra, Papel e Tesoura</Text>


      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={() => play('Pedra')}>
          <Image source={require('./assets/pedra.png')} style={styles.image} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => play('Papel')}>
          <Image source={require('./assets/papel.png')} style={styles.image} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => play('Tesoura')}>
          <Image source={require('./assets/tesoura.png')} style={styles.image} />
        </TouchableOpacity>
      </View>

      {resultado ? (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>Sua escolha: {escolhaUsuario}</Text>
          <Text style={styles.result}>Escolha do App: {escolhaApp}</Text>
          <Text style={styles.finalResult}>{resultado}</Text>
        </View>
      ) : null}

     
      {resultado ? (
        <Button title="Reiniciar" onPress={reset}/>
      ) : null}
    </View>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 20,
  },

  optionsContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  option: {
    width: 200,
    alignItems: 'center',
    padding: 8,
    marginVertical: 10,
    borderRadius: 10,
  },

  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },

  resultContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  result: {
    fontSize: 18,
    marginVertical: 5,
  },

  finalResult: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },

});