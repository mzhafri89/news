import React from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {FloatingButton} from 'react-native-ui-lib';

function News({uri, navigateBack}) {
  return (
    <>
      <WebView source={{uri}} style={styles.container} />
      <FloatingButton
        visible
        button={{
          label: 'Back',
          onPress: navigateBack,
        }}
        bottomMargin={20}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default News;
