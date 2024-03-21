// // App.js
// import React from 'react';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './HomeScreen';
// import SignInScreen from './SignInScreen';
// import SignUpScreen from './SignUpScreen';
// const Stack = createStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Login, Signup, Welcome } from "./screens";
import Login from './Login';
import Welcome from './Welcome';
import SignUp from './SignUp';
import Formateur from './Formateur';
import SignupEtu from './SignupEtu';
import Admin from './Admin';
import Vocal from './EnregistrerVocal';
import Etudiant from './Etudiant';
const Stack = createStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Formateur"
          component={Formateur}
          options={{
            headerShown: false
          }}
       />
        <Stack.Screen
          name="Admin"
          component={Admin}
          options={{
            headerShown: false
          }}
        />
         <Stack.Screen 
          name="SignupEtu"
          component={SignupEtu}
          options={{
            headerShown: false
          }}
       />
       <Stack.Screen 
          name="Etudiant"
          component={Etudiant}
          options={{
            headerShown: false
          }}
       />
        <Stack.Screen 
          name="Vocal"
          component={Vocal}
          options={{
            headerShown: false
          }}
       />
      </Stack.Navigator>
    </NavigationContainer>
  );
}