import React, {useEffect} from 'react';
import {StyleSheet, View, Picker, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Provider as PaperProvider,
  FAB,
  Portal,
  Dialog,
  Button,
  Text,
} from 'react-native-paper';

import markerImg from '../assets/pin.png';
import {SafeAreaView} from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  markerStyle: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
  },
  marker: {
    height: 48,
    width: 48,
  },
});

function Map() {
  const [[latitude, longitude], setLocation] = React.useState([0, 0]);
  const [[markerLat, markerLong], setMarkerCoord] = React.useState([0, 0]);
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const [mode, setMode] = React.useState('date');
  const [value, setValue] = React.useState({type: 'Assalto', weight: 1});
  const [visible, setVisible] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [marker, setMarker] = React.useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      setLocation([pos.coords.latitude, pos.coords.longitude]);
    });
  }, []);

  const show = mode => {
    setVisible(true);
    setMode(mode);
  };

  const timePicker = () => {
    show('time');
  };

  const datePicker = () => {
    show('date');
  };

  const handleDate = (event, dateReceived) => {
    let currDate = dateReceived || date;
    setVisible(Platform.OS === 'ios' ? true : false);
    setDate(currDate);
  };

  const handleRegionChange = mapData => {
    setLocation([mapData.latitude, mapData.longitude]);
  };

  const addPoint = () => {};

  return (
    <PaperProvider>
      <View style={styles.container}>
        <MapView
          onLongPress={() => {}}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
          showsCompass={true}
          showsBuildings={true}
          //showsMyLocationButton={true}
          onRegionChangeComplete={handleRegionChange}>
          {/*<MapView.Heatmap
          //points={points}
          opacity={1}
          radius={20}
          maxIntensity={100}
          gradientSmoothing={10}
          heatmapMode={'POINTS_DENSITY'}
          />
        */}
        </MapView>
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => {
            setDialogVisible(true);
          }}
        />

        <Portal>
          <Dialog
            visible={dialogVisible}
            onDismiss={() => setDialogVisible(false)}>
            <Dialog.Title>Adicionar Ocorrência</Dialog.Title>
            <Dialog.Content>
              <Button mode="outlined" onPress={datePicker}>
                Data
              </Button>
              {visible && (
                <DateTimePicker
                  value={new Date()}
                  mode={mode}
                  display="default"
                  onChange={handleDate}
                />
              )}
              <Text>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</Text>

              <Button mode="outlined" onPress={timePicker}>
                Horário
              </Button>
              <Text>{`${date.getHours()}:${date.getMinutes()}`}</Text>
              <Text>Tipo de Ocorrência</Text>
              <Picker
                selectedValue={value.type}
                style={{height: 50, width: 150}}
                onValueChange={(val, index) => {
                  let weight = 0;
                  switch (val) {
                    case 'Assalto':
                      weight = 1;
                      break;
                    case 'Furto':
                        weight = 1
                        break
                    case 'Roubo de Veículo':
                        weight = 1
                        break
                    case 'Homicídio':
                        weight = 1.5
                        break
                    case 'Assédio':
                        weight = 1
                        break
                    case 'Estupro':
                        weight=1.5
                        break
                    default:
                        weight=1
                        break
                    }
                    setValue({type:val, weight:weight})
                }}>
                <Picker.Item label="Assalto" value="Assalto" />
                <Picker.Item label="Furto" value="Furto" />
                <Picker.Item
                  label="Roubo de Veículo"
                  value="Roubo de Veículo"
                />
                <Picker.Item label="Homicídio" value="Homicídio" />
                <Picker.Item label="Sequestro" value="Sequestro" />
                <Picker.Item label="Assédio" value="Assédio" />
                <Picker.Item label="Estupro" value="Estupro" />
              </Picker>
              <Button
                style={{alignContent: 'flex-end'}}
                mode="contained"
                onPress={() => {
                  if (marker === null) {
                    setDialogVisible(false);
                    setMarker(
                      <SafeAreaView style={styles.markerStyle}>
                        {/*<Button
                          mode="contained"
                          onPress={() => setMarker(null)}>
                          +
                        </Button>*/}
                        <Image style={styles.marker} source={markerImg}></Image>
                      </SafeAreaView>,
                    );
                  }
                }}>
                Adicionar
              </Button>
              <Button onPress={() => setDialogVisible(false)}>Cancelar</Button>
            </Dialog.Content>
          </Dialog>
        </Portal>
        {marker}
      </View>
    </PaperProvider>
  );
}

Map.navigationOptions = {
  title: 'Map',
};

export default Map;
