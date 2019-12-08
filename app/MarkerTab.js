import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, TextInput, Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
  markerTab: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopColor: '#c8c8c8',
    borderTopWidth: 2,
  },
  addMarkerBtn: {
    top: '35%',
    width: '80%',
    marginBottom: 5,
  },
  searchBar: {
    top: '8%',
    height: 50,
    width: '80%',
  },
  cancelBtn: {
    top: '35%',
    width: '80%',
    marginBottom: 5,
  },
});

export default function MarkerTab(props){
    //const [query, setQuery] = React.useState('')

    return (
      <SafeAreaView style={styles.markerTab}>
        {/*<Searchbar
          style={styles.searchBar}
          placeholder="Pesquisar"
          onChangeText={query => {
            setQuery(query)
          }}
        value={query}></Searchbar>*/}
        <Button
          mode="contained"
          style={styles.addMarkerBtn}
          onPress={props.addPoint}>
          Confirmar
        </Button>
        <Button
          mode="outlined"
          style={styles.addMarkerBtn}
          onPress={props.cancel}>
          Cancelar
        </Button>
      </SafeAreaView>
    );
}