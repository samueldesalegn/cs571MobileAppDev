import { useRef, useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Inputs from './Inputs';

const MEDTIME = 0;
const RESTIME = 0;

export default function App() {
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [count, setCount] = useState(MEDTIME + RESTIME);
  const [color, setColor] = useState("gray");
  const ref = useRef(null);

  const clearTimer = () => {
    if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
    }
  };

  const reset = () => {
    clearTimer();
    setStarted(false);
    setPaused(false);
    setColor('gray')
  };

  const startTimer = () => {
    
  }
  return (
    <View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
