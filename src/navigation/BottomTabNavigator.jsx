import { StyleSheet, View } from 'react-native'

import CartNavigator from './CartNavigator'
import { Entypo, Feather } from '@expo/vector-icons';
import ProfileNavigator from './ProfileNavigator'
import StackNavigator from './StackNavigator'
import { colors } from '../constants/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomTab = createBottomTabNavigator()

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTab.Screen
        name="Shop"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Entypo name="drink" size={24} color={colors.white} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="CartNav"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="shopping-cart" size={24} color={colors.white} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileNav"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="user" size={24} color={colors.white} />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.cyan900,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 5,
  },
  iconContainer: {
    backgroundColor: colors.cyan600,
    borderRadius: 20,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
