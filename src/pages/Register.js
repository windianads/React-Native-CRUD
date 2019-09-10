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



export default class Signup extends Component<{}> {



goBack() {

Actions.pop();

}



render() {

return(

<View style={styles.container}>

<Logo/>

<Form type="Register"/>

<View style={styles.signupTextCont}>

<Text style={styles.signupText}>Already have an account?</Text>

<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>

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

registerTextCont : {

flexGrow: 1,

alignItems:'flex-end',

justifyContent :'center',

paddingVertical:16,

flexDirection:'row'

},

registerText: {

color:'rgba(255,255,255,0.6)',

fontSize:16

},

registerButton: {

color:'#ffffff',

fontSize:16,

fontWeight:'500'

}

});