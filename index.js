/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import Routes from './app/Routes'

AppRegistry.registerComponent(appName, () => Routes);
