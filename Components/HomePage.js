import { View,StyleSheet,Text } from "react-native";

function HomePage(){
    return(
      <View style ={style.container}>
        <Text>This is Home Screen.</Text>
       </View>
    )
  }
  const style= StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center', 
      alignItems:'center'
    }
    }
)

export default HomePage;