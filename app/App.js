import React, {useState} from 'react';
import Map from './Map';
import {
  Provider as PaperProvider,
  DefaultTheme,
  Appbar,
  Menu,
  Divider,
} from 'react-native-paper';

import {Linking} from 'react-native'

export default function App() {
  const [visible, setVisible] = useState(false);
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#10A4D1',
      accent: '#FF7C00',
    },
  };

  const openMenu = () => {
    setVisible(true);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  return (
    <PaperProvider theme={theme}>
      <Map></Map>
      <Appbar.Header>
        <Appbar.Content title="SegurUSP" />

        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon="dots-vertical"
              onPress={() => {
                openMenu();
              }}
              color="white"></Appbar.Action>
          }>
          <Menu.Item
            title="Boletim de Ocorrência Online"
            onPress={() => {
              const url =
                'https://www.delegaciaeletronica.policiacivil.sp.gov.br/ssp-de-cidadao/pages/comunicar-ocorrencia';
              Linking.canOpenURL(url).then(supported => {
                if (supported) {
                  Linking.openURL(url);
                } else {
                  console.log("Error on opening: " + url);
                }
              });
            }}
          />
          <Menu.Item
            title="Ligar para Guarda Universitária"
            onPress={()=>{
              let phoneNumber = '(16) 3373-6666'
              Linking.openURL(`tel:${phoneNumber}`);
            }}
          />
        </Menu>
      </Appbar.Header>
    </PaperProvider>
  );
}
