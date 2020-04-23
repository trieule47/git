import React, { Component } from "react";
import {
  TouchableOpacity,
  Image,
  FlatList,
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import StarRating from 'react-native-star-rating';

function Read({ item }) {
  return (
    <TouchableOpacity onPress={() => alert(item.body)}>
      <View
        style={{
          height: 130,
          width: 130,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: "#dddddd"
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={{ uri: item.image }}
            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ color: "black" }}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const { height, width } = Dimensions.get("window");
export default class Explore extends Component {
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
          style={{ width: 100, height: 100 }}
        />
        <Text style={{ color: "black" }}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, marginTop: 20 }}>
          <View
            style={{
              height: this.startHeaderHeight,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd",
             
            }}
          >
            <View style={styles.find}>
              <Icon name="ios-search" size={24} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="find ..."
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
              />
            </View>
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                What can we help you find?
              </Text>
            </View>
            <View style={{ height: 130, marginTop: 20 }}>
              <FlatList
                style={{ height: 300 }}
                data={this.state.data}
                renderItem={({ item }) => Read({ item })}
                keyExtractor={(item, index) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "700" }}>
                Nông sản theo mùa
              </Text>
              <Text style={{ fontWeight: "100", marginTop: 10 }}>
                Đảm bảo uy tin chất lượng
              </Text>
             
              <View style={{ width:  - 40, height: 200, marginTop: 20,  }}>
                <Image
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    resizeMode: 'cover',
                    borderRadius: 5,
                  }}
                  source={{
                    uri:
                      "https://znews-photo.zadn.vn/w1024/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"
                  }}
                />
              </View>
            </View>

            <View style={{marginTop: 40}}>
                  <Text style={{fontSize: 24, fontWeight: '700' , paddingHorizontal: 20}}>
                    Nông sản khắp mọi mơi
                  </Text>
                  <View style={{paddingHorizontal: 20, marginTop: 20 , flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-between'}}>
                   
                    <View
                    style={{ width: width / 2 -30 , height: width /2 -30, borderColor: "#dddddd", borderWidth: 0.5}}>
                      <View style={{flex: 1}}>
                            <Image
                              style={{
                                flex: 1,
                                height: null,
                                width: null,
                                resizeMode: 'cover',
                                borderRadius: 5,
                              }}
                              source={{
                                uri:
                                  "https://znews-photo.zadn.vn/w1024/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"
                              }}
                            />
                      </View>
                      <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10}}>
                        <Text style={{fontSize: 14, color: '#b63838'}}>Hạt cà phê</Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>sản lương: 2 tấn</Text>
                        <Text style={{fontSize: 12}} >40 nghìn/1kg</Text>
                        <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={4}
                        starSize={10}
                        />
                      </View>
                    </View>

                    <View
                    style={{ width: width / 2 -30 , height: width /2 -30, borderColor: "#dddddd", borderWidth: 0.5}}>
                      <View style={{flex: 1}}>
                            <Image
                              style={{
                                flex: 1,
                                height: null,
                                width: null,
                                resizeMode: 'cover',
                                borderRadius: 5,
                              }}
                              source={{
                                uri:
                                  "https://znews-photo.zadn.vn/w1024/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"
                              }}
                            />
                      </View>
                      <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10}}>
                        <Text style={{fontSize: 14, color: '#b63838'}}>Hạt cà phê</Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>sản lương: 2 tấn</Text>
                        <Text style={{fontSize: 12}} >40 nghìn/1kg</Text>
                        <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={4}
                        starSize={10}
                        />
                      </View>
                    </View>

                    <View
                    style={{ width: width / 2 -30 , height: width /2 -30, borderColor: "#dddddd", borderWidth: 0.5}}>
                      <View style={{flex: 1}}>
                            <Image
                              style={{
                                flex: 1,
                                height: null,
                                width: null,
                                resizeMode: 'cover',
                                borderRadius: 5,
                              }}
                              source={{
                                uri:
                                  "https://znews-photo.zadn.vn/w1024/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"
                              }}
                            />
                      </View>
                      <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10, marginTop: 10}}>
                        <Text style={{fontSize: 14, color: '#b63838'}}>Hạt cà phê</Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>sản lương: 2 tấn</Text>
                        <Text style={{fontSize: 12}} >40 nghìn/1kg</Text>
                        <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={4}
                        starSize={10}
                        />
                      </View>
                    </View>

                    <View
                    style={{ width: width / 2 -30 , height: width /2 -30, borderColor: "#dddddd", borderWidth: 0.5}}>
                      <View style={{flex: 1}}>
                            <Image
                              style={{
                                flex: 1,
                                height: null,
                                width: null,
                                resizeMode: 'cover',
                                borderRadius: 5,
                              }}
                              source={{
                                uri:
                                  "https://znews-photo.zadn.vn/w1024/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"
                              }}
                            />
                      </View>
                      <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10, marginTop: 10}}>
                        <Text style={{fontSize: 14, color: '#b63838'}}>Hạt cà phê</Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>sản lương: 2 tấn</Text>
                        <Text style={{fontSize: 12}} >40 nghìn/1kg</Text>
                        <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={4}
                        starSize={10}
                        />
                      </View>
                    </View>
                  </View>
              </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  find: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 2,
    marginTop: Platform.OS == "android" ? 30 : null
  }
});
