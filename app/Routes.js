import AddMarker from './AddMarker'
import Map from './Map'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';

const Routes = createAppContainer(
    createStackNavigator({
        Map:Map,
        AddMarker:AddMarker
    })
)

export default Routes