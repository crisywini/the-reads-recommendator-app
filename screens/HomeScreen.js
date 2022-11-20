import React from "react";
import {View, Text, Alert} from "react-native";
import { TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () =>{
    const navigation = useNavigation();

    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }
                }
            >    
            Recommendator 📚</Text>
            <TouchableOpacity
                onPress={() => onPressPickABook()}
                style={{
                    backgroundColor: "#E1B265",
                    padding: 10,
                    marginTop: "20%",
                    width: "90%",
                    alignSelf: "center",
                    borderRadius: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 15, 
                        textAlign: "center", 
                        color: "white"
                    }}
                >
                    Pick a book!
                </Text>

            </TouchableOpacity>
            
        </View>
    )
}

function onPressPickABook() {
    Alert.alert("Book recommended! 😛");
}

export default HomeScreen;