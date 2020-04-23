import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function Read({ item }) {
  return (
    <TouchableOpacity onPress={() => alert(item.body)}>
      <View style={styles.item}>
        <Image
          source={{ uri: item.image }}
          style={{ width: 100, height: 100 }}
        />
        <Text style={{ color: "black" }}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default class Fetch_api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    };
  }

  componentDidMount() {
    fetch("http://192.168.1.8:8888/json/index.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          data: responseJson
        });
        // console.log(JSON.stringify(responseJson))
      })
      .catch(error => {
        console.error(error);
      });
  }
  renderItems = ({ item }) => (
    <TouchableOpacity onPress={() => alert(item.body)}>
      <View style={styles.item}>
        <Image
          source={{ uri: item.image }}
          style={{ width: 100, height: 100, flex:2,flexDirection:'column'}}
        />
        <Text style={{ color: "black", flex:1, flexDirection:'column'}}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" animating></ActivityIndicator>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
        <ScrollView>
          {/* <FlatList
            style={{height:300}}
            data={this.state.data}
            renderItem={({ item }) => Read({ item })}
            keyExtractor={(item, index) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          /> */}
          <View style={{height:20}}>
              <Text>Tất cả các bài đăng của bạn</Text>
          </View>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => Read({item})}
            keyExtractor={item => item.id}
            //ItemSeparatorComponent={this.renderSeparator}
            numColumns={2}
          
          />
          <TouchableOpacity onPress={()=> {

          }}>
            <Text></Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
      );
    }
  }
}

// import WooCommerceAPI from 'react-native-woocommerce-api';

// const WooCommerce = new WooCommerceAPI({
//     url: 'https://cuoituan.vn//vaomua/',  //Url
//     ssl: true,
//     consumerKey: 'ck_4e263ec78a5e67a4641c92ef1b2975ac7721f423',   //Your Consumer Key
//     consumerSecret: 'cs_a7906d0fadac3d357a413017e849b5e0105fbbca',  //Your Consumer Secret
//     wpAPI: true,
//     version: 'wc/v2',
//     queryStringAuth: true
// });

//  export default class Fetch extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         isLoading: true,
//         data: []
//       };
//     }

//     componentDidMount() {
//         WooCommerce.get("products")
//         .then((response) => {
//             console.log(response);
//             this.setState({
//               isLoading: false,
//               data: response,
//             });
//             console.log(JSON.stringify(response),'aa');
//             console.log(this.state.isLoading);
//         })
//         .catch((error) => {
//             console.log(error.response.data);
//             console.error(error);

//         });
//     }
//     renderItems = ({ item }) =>
//       <TouchableOpacity onPress={() => alert(item.body)}>
//         <View  style={styles.item}><Text style={{ color: "black" }}>{item.title}abv</Text></View>
//         console.log({item.title})
//       </TouchableOpacity>

//     render() {
//       if (this.state.isLoading) {
//         return <View style={styles.container}>
//             {/* <ActivityIndicator size="large" animating ></ActivityIndicator> */}<Text>aaaaaaaaaaaaaaaaaa</Text>
//         </View>;
//       }else{
//         return (
//           <View style={styles.container}>
//             <FlatList
//               data={this.state.data}
//               renderItem={({item}) =>
//               <TouchableOpacity onPress={() => alert(item.body)}>
//                   <View  style={styles.item}><Text style={{ color: "black" }}>{item.title}</Text></View>
//             </TouchableOpacity>}
//               keyExtractor={(item, index) => item.id}
//             />
//           </View>
//         );
//       }
//     }
//   }
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#3b9999"
  },
  item: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 150,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "black",
    margin: 5
  }
});
