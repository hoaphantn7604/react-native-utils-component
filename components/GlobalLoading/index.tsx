import React, { useImperativeHandle, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { UIActivityIndicator } from 'react-native-indicators';

export const globalLoadingRef = React.createRef<any>();

export const globalLoading = {
  show: () => {
    globalLoadingRef?.current?.show();
  },
  hide: () => {
    globalLoadingRef?.current?.hide();
  },
};

export interface Props {
  name?: string;
}

const GlobalLoading = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState<boolean>(false);

  useImperativeHandle(ref, () => {
    return { show: show, hide: hide };
  });

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <Modal visible={visible} animationType={'none'} transparent>
      <View style={styles.main}>
        <UIActivityIndicator color="white" size={50} />
      </View>
    </Modal>
  );
});

export default GlobalLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
