import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function CustonTabBar( {state, descriptors, navigation} ) {
 return (
   <View style={styles.container}>

        <View style={styles.content}>
            {
                state.routes.map( (route, index) => {
                    const {options} = descriptors[route.key];
                    const isFocused = state.index === index;
                    
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                            });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                        };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                    <TouchableOpacity
                        key={route.key} 
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        >
                        <View style={{alignItems: 'center', padding: 4}}>
                            <View style={{padding:9, backgroundColor: isFocused ? '#f8e2fd' : 'transparent', borderRadius:99}}>
                                <MaterialIcons name={options.tabBarIcon} size={26} color={isFocused ? '#673ab7' : '#535353' }></MaterialIcons>
                            </View>
                        </View>
                        
                    </TouchableOpacity>
                    );
                                
                })
            }


        </View>

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    content: {
        flexDirection: 'row',
        marginBottom: 24,
        alignItems: 'center',
        justifyContent: 'center', // alinhamento central com gap = space-between com espaço maior
        position: 'absolute',
        bottom:0,
        gap: 20,// alinhamento central com gap
        paddingHorizontal:2,
        paddingVertical:2,
        borderRadius:99,
        elevation:10,
        backgroundColor:'white'
    },
    buttonIcon:{
        
    }

})