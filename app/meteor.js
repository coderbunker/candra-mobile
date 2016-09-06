
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';

Meteor.connect('ws://localhost:3000/websocket');

var products = Meteor.collection('product').find({})
console.log('products', products);
setInterval(function(){
  products = Meteor.collection('product').find({})
  console.log('products', products);
  // const handle = Meteor.subscribe('todos');
},5000)

// console.log(Meteor.collection('settings').findOne())

// class App extends Component {
//   renderRow(todo) {
//     console.log('todo', todo)
//     return (
//       <Text>{todo.title}</Text>
//     );
//   }
//   // render() {
//   //   return (
//   //     <View>
//   //       <Text> {'Meteor Testing'} </Text>
//   //     </View>
//   //   )
//   // }
//   render() {
//     const { todosReady } = this.props;
 
//     return (
//       <View style={{marginTop:20}}>
//         <Text>{'Hello'}</Text>
//           {!todosReady && <Text>Not ready</Text>}
//           {<MeteorListView
//             collection="todos"
//             // selector={{done: true}}
//             options={{sort: {createdAt: -1}}}
//             renderRow={this.renderRow}
//           />}
//       </View>
//     )
//   }
// }

// // export default App;

 
// export default createContainer(params=>{
//   const handle = Meteor.subscribe('todos');
//   // Meteor.subscribe('settings');
 
//   return {
//     todosReady: handle.ready(),
//     // settings: Meteor.collection('settings').findOne({})
//   };
// }, App)
