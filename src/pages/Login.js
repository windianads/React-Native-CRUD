import React, { Component } from 'react';

import {

StyleSheet,

Text,

View,

StatusBar ,

TouchableOpacity

} from 'react-native';



import Logo from '../components/Logo';

import Form from '../components/Form';



import {Actions} from 'react-native-router-flux';



export default class Login extends Component<{}> {



register() {

Actions.register()

}



render() {

return(

<View style={styles.container}>

<Logo/>

<Form type="Login"/>

<View style={styles.signupTextCont}>

<Text style={styles.signupText}>Dont have an account yet?</Text>

<TouchableOpacity onPress={this.register}><Text style={styles.signupButton}> Register </Text></TouchableOpacity>

</View>

</View>

)

}

}



const styles = StyleSheet.create({

container : {

backgroundColor:'#27AE60',

flex: 1,

alignItems:'center',

justifyContent :'center'

},

signupTextCont : {

flexGrow: 1,

alignItems:'flex-end',

justifyContent :'center',

paddingVertical:16,

flexDirection:'row'

},

signupText: {

color:'rgba(255,255,255,0.6)',

fontSize:16

},

signupButton: {

color:'#ffffff',

fontSize:16,

fontWeight:'500'

}

});