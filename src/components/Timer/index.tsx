import React, { useEffect, useImperativeHandle, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Props } from './type';

const defaulProps = {
  style: {},
  textStyle: {},
  onTimes: (seconds: number) => { },
  onEnd: (seconds: number) => { }
};

let interval: any = null;
let hours = 0;
let minute = 0;
let seconds = 0;
let currentSeconds = 0;

const TimerComponent = React.forwardRef((props: Props, ref) => {
  const { onEnd, onTimes } = props;
  const [key, setKey] = useState(Math.random());

  useImperativeHandle(ref, () => {
    return { start, pause, resume, stop };
  });

  useEffect(() => {
    return () => {
      stop();
    }
  }, [])

  const timer = () => {
    interval = setInterval(() => {
      currentSeconds = currentSeconds + 1;
      if (seconds < 60) {
        seconds = seconds + 1;
      } else {
        seconds = 0;
        minute = minute + 1;
      }
      if (minute === 60) {
        minute = 0;
        hours = hours + 1;
      }
      if (onTimes) {
        onTimes(currentSeconds);
      }
      setKey(Math.random());
    }, 1000);

  };

  const init = () => {
    currentSeconds = 0;
    hours = 0;
    minute = 0;
    seconds = 0;
    clear();
    setKey(Math.random());
  }

  const start = () => {
    init();

    if (!interval) {
      timer();
    }
  }

  const pause = () => {
    clear();
  }

  const resume = () => {
    if (!interval) {
      timer();
    }
  }

  const stop = () => {
    if (onEnd) {
      onEnd(currentSeconds);
    }

    init();
    setKey(Math.random());
    clear();
  }

  const clear = () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  return (
    <View style={props.style} key={key}>
      <Text style={[styles.text, props.textStyle]}>{`${hours}:${minute.toString().length === 1 ? '0' : ''}${minute}:${seconds.toString().length === 1 ? '0' : ''
        }${seconds}`}</Text>
    </View>
  );
});

TimerComponent.defaultProps = defaulProps;

export default TimerComponent;
