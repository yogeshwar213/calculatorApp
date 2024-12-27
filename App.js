
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CalculatorApp = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString()); 
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.displayContainer}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>


      <View style={styles.buttonsContainer}>
        {['C', '(', ')', '/'].map((btn) => (
          <CalcButton key={btn} label={btn} onPress={handlePress} />
        ))}
        {['7', '8', '9', '*'].map((btn) => (
          <CalcButton key={btn} label={btn} onPress={handlePress} />
        ))}
        {['4', '5', '6', '-'].map((btn) => (
          <CalcButton key={btn} label={btn} onPress={handlePress} />
        ))}
        {['1', '2', '3', '+'].map((btn) => (
          <CalcButton key={btn} label={btn} onPress={handlePress} />
        ))}
        {['0', '.', '=', ''].map((btn, index) => (
          <CalcButton 
            key={index} 
            label={btn} 
            onPress={handlePress} 
            specialStyle={btn === '=' && styles.equalsButton}
          />
        ))}
      </View>

      <Text style={styles.footerText}>Calc by Yogeshwar</Text>
    </View>
  );
};

const CalcButton = ({ label, onPress, specialStyle }) => {
  if (!label) return <View style={styles.emptyButton}></View>;
  return (
    <TouchableOpacity 
      style={[styles.button, specialStyle]} 
      onPress={() => onPress(label)}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'space-between',
  },
  displayContainer: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
  },
  inputText: {
    fontSize: 36,
    color: '#fff',
  },
  resultText: {
    fontSize: 28,
    color: '#7dff7d',
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  button: {
    width: '22%',
    margin: '1%',
    aspectRatio: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  equalsButton: {
    backgroundColor: '#4CAF50',
  },
  emptyButton: {
    width: '22%',
    margin: '1%',
    aspectRatio: 1,
  },
  footerText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    color: '#888',
  },
});

export default CalculatorApp;
