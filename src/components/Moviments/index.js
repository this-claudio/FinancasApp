import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MotiView, MotiText, AnimatePresence } from 'moti'

export default function Moviments( { data, isShow}) {

    ///const [showValue, SetShowValue] = useState(false);

 return (
   <View style={styles.container} >

        <Text style={styles.date}>{data.date}</Text>

        <View style={styles.content}>
            <Text style={styles.label}>{data.label}</Text>

            {isShow === true ? 

            <AnimatePresence exitBeforeEnter>
                <MotiText style={data.type == 1 ? styles.value : styles.espenses}

                from={{
                    translateX: 100
                }}

                animate={{
                    translateX: 0
                }}

                transition={{
                    type: 'timing',
                    duration: 500,
                    delay:100
                }}
                
                >R$ {data.value}</MotiText>
            </AnimatePresence>
            
            :
            
            <AnimatePresence exitBeforeEnter>
                <MotiView style={styles.HideContent}
                from={{
                    opacity: 0
                }}

                animate={{
                    opacity: 1
                }}

                transition={{
                    type: 'timing',
                    duration: 500,
                    delay:100
                }}


                ></MotiView>
            </AnimatePresence>

            }

            
        </View>

   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginBottom: 24,
        borderBottomWidth:1,
        borderBottomColor: '#dadada'
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3,
        marginBottom:8,
    },
    date:{
        color:'#dadada',
        fontWeight: 'bold'
    },
    label:{
        fontWeight:'bold',
        fontSize:16
    },
    value:{
        fontSize:16,
        fontWeight: 'bold',
        color:'#2ECC71'
    },
    espenses:{
        fontSize:16,
        fontWeight: 'bold',
        color:'#E74C3C'
    },
    HideContent:{
        marginTop: 8,
        backgroundColor:'#aaf',
        borderRadius:5,
        width: 84,
        height: 10,
    }
    

})