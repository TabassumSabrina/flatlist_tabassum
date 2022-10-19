
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

export default function App() {
  const courses = [
    {
      id:1,
      name:'apple 1'
    },
    {
      id:2,
      name: 'orang 2'
    },
    {
      id:3,
      name: 'watermalon 3'
    },
    {
      id: 4,
      name: 'mango 4'
    },
    {
      id: 5,
      name: 'banana5'
    },
    {
      id: 6,
      name: 'lychee 6'
    },
    {
      id: 7,
      name: 'jam 7'
    },
    {
      id: 8,
      name: 'jackfruit 8'
    },
    {
      id: 9,
      name: 'painapple 9'
    }
  ]
  const onecourse = ({item})=>(
    <View style= {styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  )

  const listHeader = () => 
  {
    return <Text style={styles.headerText}>tabassum flat list</Text>
  }

  const itemSeparator = () => {
    return <View style={styles.separator}/>
  
  }
  
  return (
    <SafeAreaView>
     <FlatList
     ListHeaderComponentStyle={styles.listHeader}
     ListHeaderComponent={listHeader}
     data={courses}
     renderItem= {onecourse}
     ItemSeparatorComponent = { itemSeparator }
     ListEmptyComponent = {<Text>This is a flat list</Text>}
    
     />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  
  {
    
    listHeader:{
      marginTop: 100,
 height: 55,
 alignItems: 'center',

 justifyContent: 'center',
 
    },
    headerText:{
      fontWeight: '600',
      fontSize: 26,
      color: 'black',
      
    },
    item:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 13,
      backgroundColor:"black",
      margin:10
      
    },
    name:{
      fontWeight: '600',
      fontSize: 20,
      marginLeft: 13,
      color:"red"
      
  
    },
 separator: {
  color: '#000000',
  height:1,
  width: '100%',
  backgroundColor: '#ccc'
 }
});