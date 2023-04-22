import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MoneyRoutes from './MoneyRoutes';
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
            <Tab.Screen name='MoneyRoutes' options={{tabBarIcon:'attach-money'}} component={MoneyRoutes}></Tab.Screen>
            <Tab.Screen name='Store' options={{tabBarIcon:'storefront'}} component={Store}></Tab.Screen>

        </Tab.Navigator>
    )
}