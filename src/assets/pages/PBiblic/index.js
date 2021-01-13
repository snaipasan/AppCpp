import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, FlatList, Linking, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import p1 from '../../assets/Pblica/P1.png';
import p2 from '../../assets/Pblica/p2.png';
import p3 from '../../assets/Pblica/p3.png';


export default function PBiblic() {
  const navigation = useNavigation();
  const message = 'Olá, queria fazer um pedido!';

  function navigateBack() {
    navigation.goBack();
  }
  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=5571986342471&text=${message}`)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title4}> /////////////////////////////</Text>
      <Text style={styles.title2}> /////////////////////////////</Text>
      <View style={styles.header}>      
       <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={40} color='#000'  />
        </TouchableOpacity>
        <Text style={styles.title}>Placas Biblicas</Text>
        
      </View>
      <Text style={styles.title3}> /////////////////////////////</Text>
      <FlatList 
        data={[1]}
        style={styles.Plist}
        keyExtractor={Plist => String(Plist)}
        showsVerticalScrollIndicator={false}
        renderItem={() =>(
        <View style={styles.Pb}>
        
        <View style={styles.PBarb}>
        <Text style={styles.Text}>Placa Nº S1</Text>
        
           <Image 
           source={p1}
           style={styles.PsBarb}
            />
            
          </View>
    
          <View style={styles.PBarb}>
          <Text style={styles.Text}>Placa Nº S2</Text>
          
           <Image 
           source={p2}
           style={styles.PsBarb}
            />
            
          </View>
    
          <View style={styles.PBarb}>
          <Text style={styles.Text}>Placa Nº S3</Text>
          
           <Image 
           source={p3}
           style={styles.PsBarb}
            />
            
          </View>
         </View>
         )}
        />
         <View style={styles.box}>
            <Text>/</Text>
          <TouchableOpacity onPress={sendWhatsapp}>
           <Text style={styles.But}>Clique aqui para fazer seu pedido pelo Whatsapp!</Text>
          </TouchableOpacity> 
          </View>
   </View>
  )
} 