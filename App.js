import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StateProvider } from './src/providers/StateContext';
import { initialState, reducer } from './src/providers/mainReducer';
import Root from './src/Root';
export default function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <StateProvider reducer={reducer} initialState={initialState}>
        <Root />
      </StateProvider>
    </QueryClientProvider>
  );
}
