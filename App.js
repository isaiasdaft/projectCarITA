
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import Regis from './src/screens/Register';
import InfoQuote from './src/screens/InformationQuote';
import CreateContact from './src/screens/CreateContact';
import DetailsContact from './src/screens/DetailsContact';
import Contact from './src/screens/Contact';
import Appoinment from './src/screens/Appoinment';
import DetailsAppoinment from './src/screens/DetailsAppoinment';

import Confirm from './src/screens/ConfirmAccount';
import Settings from './src/screens/Settings';
import Language from './src/screens/Language';
import Forgot from './src/screens/ForgotPassword';
import { NativeBaseProvider } from 'native-base';
import MyDrawer from './src/screens/Drawer';
import AppStack from './src/navigation/AppStack';
import VerifiedAcc from './src/screens/VerifiedAccount';


const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{
                headerStyle: {
                backgroundColor: '#6B0000', 
              },
              
              headerTitleStyle: {
                color: 'white'
              }
            }}/>
             <Stack.Screen name="Register" component={Regis} options={{
                headerStyle: {
                backgroundColor: '#6B0000', 
              },
              headerTitleStyle: {
                color: 'white'
              }
            }}/>
            
          <Stack.Screen name="Home" component={MyDrawer} options={{
                headerStyle: {
                backgroundColor: '#6B0000', 
                
              },
              headerTitleStyle: {
                color: 'white'
              },
                 headerShown: false,
            }}/>
            
            <Stack.Screen name="Verified" component={VerifiedAcc} options={{
                headerStyle: {
                backgroundColor: '#6B0000', 
              },
              headerTitleStyle: {
                color: 'white'
              }
            }}/>
               <Stack.Screen name="ConfirmAccount" component={Confirm} options={{
                headerStyle: {
                backgroundColor: '#6B0000', 
              },
              headerTitleStyle: {
                color: 'white'
              }
            }}/>
          <Stack.Screen name="forget" component={Forgot} options={{
                headerStyle: {
                backgroundColor: '#6B0000', 
              },
              headerTitleStyle: {
                color: 'white'
              }
            }}/>
            <Stack.Screen name="Settings" component={Settings} options={{
                headerStyle: {
                backgroundColor: '#6B0000',
              },
              headerTitleStyle: {
                color: 'white'
              }
            }}/>
            <Stack.Screen name="Language" component={Language} options={{
                headerStyle: {
                backgroundColor: '#6B0000', 
              },
              headerTitleStyle: {
                color: 'white'
              }
            }}/>

            <Stack.Screen name="Appoinment" component={Appoinment} options={{
                headerStyle: {
                backgroundColor: '#6B0000', 
              },
              headerTitleStyle: {
                color: 'white'
              },
              headerTitleStyle: {
                color: 'white'
              }
            }}/> 
            <Stack.Screen name="InformationCustomer" component={InfoQuote} options={{
                headerStyle: {
                backgroundColor: '#6B0000', 
              },
              headerTitleStyle: {
                color: 'white'
              }
            }}/> 
             <Stack.Screen name="DetailsAppoinment" component={DetailsAppoinment} options={{
                headerStyle: {
                backgroundColor: '#6B0000', 
              },
              headerTitleStyle: {
                color: 'white'
              }
            }}/> 

            <Stack.Screen name="Contact" component={Contact} options={{
                headerStyle: {
                backgroundColor: '#6B0000', 
              },
              headerTitleStyle: {
                color: 'white'
              },
            }}/>    
               <Stack.Screen name="CreateContact" component={CreateContact} options={{
                headerStyle: {
                backgroundColor: '#6B0000', 
              },
              headerTitleStyle: {
                color: 'white'
              }
            }}/>  
            <Stack.Screen name="DetailsContact" component={DetailsContact} options={{
                headerStyle: {
                backgroundColor: '#6B0000', 
                
              },
              headerTitleStyle: {
                color: 'white'
              }
            }}/>

        </Stack.Navigator>
      </NavigationContainer>
      </NativeBaseProvider>
      );
}






