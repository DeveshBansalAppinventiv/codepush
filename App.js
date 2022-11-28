import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import CodePush from 'react-native-code-push';

const CODE_PUSH_OPTIONS = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};

class App extends React.Component {
  componentDidMount() {
    CodePush.sync(
      {installMode: CodePush.InstallMode.IMMEDIATE},
      this.syncWithCodePush(),
      null,
    );
  }

  syncWithCodePush = status => {
    console.log('--->', status);
  };
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <Text>Read the docs to discover what to do </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default CodePush(CODE_PUSH_OPTIONS)(App);
