
import React, { useState } from 'react';
import { Store } from './source/store/store';
import { Logic } from './source/logic/logic';
import { AppContext } from './AppContext';
import RootStack from './source';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';




export const App = () => {

  const [appContext] = useState(
    () => {
      const store = new Store()
      return {
        store,
        logic: new Logic(store)
      }
    })

  const client = new ApolloClient({
    uri: 'https://zencar-backend-dev.dev.zen.car/graphql',
    cache: new InMemoryCache()
  })


  return (
    <ApolloProvider client={client}>
      <AppContext.Provider value={appContext}>
        <RootStack></RootStack>
      </AppContext.Provider>
    </ApolloProvider>
  )
}
