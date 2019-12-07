/*import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

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
});

export default function App() {
  const [{latitude, longitude}, setLocation] = React.useState({
    latitude: 6.83646681,
    longitude: 79.77121907,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  let points = [
    {latitude: 6.83646681, longitude: 79.77121907, weight: 1},
    {latitude: 6.82776681, longitude: 79.871319, weight: 1},
    {latitude: 6.82176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83776681, longitude: 79.871319, weight: 1},
    {latitude: 6.83176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83976681, longitude: 79.861319, weight: 1},
    {latitude: 6.83076681, longitude: 79.861319, weight: 1},
    {latitude: 6.82776681, longitude: 79.861319, weight: 1},
    {latitude: 6.82076681, longitude: 79.871319, weight: 1},
    {latitude: 6.82076681, longitude: 79.861319, weight: 1},
    {latitude: 6.81076681, longitude: 79.861319, weight: 1},
    {latitude: 6.83776681, longitude: 79.869319, weight: 1},
    {latitude: 6.83276681, longitude: 79.869319, weight: 1},
    {latitude: 6.81976681, longitude: 79.869319, weight: 1},
    {latitude: 6.83776681, longitude: 79.867319, weight: 1},
    {latitude: 6.83776681, longitude: 79.865319, weight: 1},
    {latitude: 6.83646681, longitude: 79.77121907, weight: 1},
    {latitude: 6.82776681, longitude: 79.871319, weight: 1},
    {latitude: 6.82176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83776681, longitude: 79.871319, weight: 1},
    {latitude: 6.83176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83976681, longitude: 79.861319, weight: 1},
    {latitude: 6.83076681, longitude: 79.861319, weight: 1},
    {latitude: 6.82776681, longitude: 79.861319, weight: 1},
    {latitude: 6.82076681, longitude: 79.871319, weight: 1},
    {latitude: 6.82076681, longitude: 79.861319, weight: 1},
    {latitude: 6.81076681, longitude: 79.861319, weight: 1},
    {latitude: 6.83776681, longitude: 79.869319, weight: 1},
    {latitude: 6.83276681, longitude: 79.869319, weight: 1},
    {latitude: 6.81976681, longitude: 79.869319, weight: 1},
    {latitude: 6.83776681, longitude: 79.867319, weight: 1},
    {latitude: 6.83776681, longitude: 79.865319, weight: 1},
    {latitude: 6.84076681, longitude: 79.871319, weight: 1},
    {latitude: 6.83646681, longitude: 79.77121907, weight: 1},
    {latitude: 6.82776681, longitude: 79.871319, weight: 1},
    {latitude: 6.82176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83776681, longitude: 79.871319, weight: 1},
    {latitude: 6.83176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83976681, longitude: 79.861319, weight: 1},
    {latitude: 6.83076681, longitude: 79.861319, weight: 1},
    {latitude: 6.82776681, longitude: 79.861319, weight: 1},
    {latitude: 6.82076681, longitude: 79.871319, weight: 1},
    {latitude: 6.82076681, longitude: 79.861319, weight: 1},
    {latitude: 6.81076681, longitude: 79.861319, weight: 1},
    {latitude: 6.83776681, longitude: 79.869319, weight: 1},
    {latitude: 6.83276681, longitude: 79.869319, weight: 1},
    {latitude: 6.81976681, longitude: 79.869319, weight: 1},
    {latitude: 6.83776681, longitude: 79.867319, weight: 1},
    {latitude: 6.83776681, longitude: 79.865319, weight: 1},
    {latitude: 6.84076681, longitude: 79.871319, weight: 1},
    {latitude: 6.841776681, longitude: 79.869319, weight: 1},
    {latitude: 6.83646681, longitude: 79.77121907, weight: 1},
    {latitude: 6.82776681, longitude: 79.871319, weight: 1},
    {latitude: 6.82176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83776681, longitude: 79.871319, weight: 1},
    {latitude: 6.83176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83976681, longitude: 79.861319, weight: 1},
    {latitude: 6.83076681, longitude: 79.861319, weight: 1},
    {latitude: 6.82776681, longitude: 79.861319, weight: 1},
    {latitude: 6.82076681, longitude: 79.871319, weight: 1},
    {latitude: 6.82076681, longitude: 79.861319, weight: 1},
    {latitude: 6.81076681, longitude: 79.861319, weight: 1},
    {latitude: 6.83776681, longitude: 79.869319, weight: 1},
    {latitude: 6.83276681, longitude: 79.869319, weight: 1},
    {latitude: 6.81976681, longitude: 79.869319, weight: 1},
    {latitude: 6.83776681, longitude: 79.867319, weight: 1},
    {latitude: 6.83776681, longitude: 79.865319, weight: 1},
    {latitude: 6.84076681, longitude: 79.871319, weight: 1},
    {latitude: 6.841776681, longitude: 79.869319, weight: 1},
    {latitude: 6.84076681, longitude: 79.871319, weight: 1},
  ];

  return (
    <View style={styles.container}>
      <MapView
        onPress={(coord)=>{
          const point = coord.nativeEvent.coordinate
          points.push({latitude:point.latitude, longitude:point.longitude,weight:1})
        }}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
          <MapView.Heatmap
          points={points}
          opacity={1}
          radius={20}
          maxIntensity={100}
          gradientSmoothing={10}
          heatmapMode={'POINTS_DENSITY'}
        />
      </MapView>
    </View>
  );
}
*/