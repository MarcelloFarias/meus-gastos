import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "@/src/screens/home/home";
import { Provider } from "react-redux";
import { store } from "./src/state-management/store";
import RegisterSpentScreen from "./src/screens/register-spents/register-spents";
import FlashMessage from "react-native-flash-message";
import UpdateSpentScreen from "./src/screens/update-spent/update-spent";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="register-spent" component={RegisterSpentScreen} />
          <Stack.Screen name="update-spent" component={UpdateSpentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </Provider>
  );
}

export default App;
