import Realm from 'realm';
import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import codePush from 'react-native-code-push';

export default class App extends Component {

	
	reloadApp(){
		//This is only for reload app
		codePush.restartApp(false);
	}

	render() {

	   let realm = new Realm({
	     schema: [{name: 'Dog', properties: {name: 'string'}}]
	   });

	   realm.write(() => {
	     realm.create('Dog', {name: 'Rex'});
	   });

	   return (
	     <View style={{margin:50}}>
	       <Text>
	         Count of Dogs in Realm: {realm.objects('Dog').length}
	       </Text>
	       <TouchableOpacity onPress={this.reloadApp.bind(this)}>
				<Text>Reload APP</Text>
	       </TouchableOpacity>
	     </View>
	   );
	}
}