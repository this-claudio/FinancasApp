import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Money from './pages/Money/Money';
import Store from './pages/Store/Store';
import Home from "./pages/Home/Home";
import CustonTabBar from "./components/CustonTabBar";

const Tab = createBottomTabNavigator();

export function Routes(){
    return (
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#121212'
            }}

            tabBar={ (props) => <CustonTabBar {...props}/>}
        >
            <Tab.Screen name='Home' options={{tabBarIcon:'compare-arrows'}} component={Home}></Tab.Screen>
            <Tab.Screen name='Money' options={{tabBarIcon:'attach-money'}} component={Money}></Tab.Screen>
            <Tab.Screen name='Store' options={{tabBarIcon:'storefront'}} component={Store}></Tab.Screen>
        </Tab.Navigator>
    )
}