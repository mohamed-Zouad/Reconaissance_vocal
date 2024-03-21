// // Suite.js
// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// const Suite = ({ navigation }) => {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Choisissez votre rôle :</Text>
//             <TouchableOpacity onPress={() => navigation.navigate('Enseignant')}>
//                 <Text>Enseignant</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate('Etudiant')}>
//                 <Text>Etudiant</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// export default Suite;


import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Entypo, Ionicons, Octicons, EvilIcons , MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from './color';
import Button from './Button';
import { useRouter } from "expo-router";
const Formateur = ({ navigation }) => {

    const router = useRouter();
    return (

        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <ScrollView>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 80, marginRight: 242 }}>
                    <Pressable
                        onPress={() => router.push("ListeEtudiants")}
                        style={{
                            backgroundColor: "rgb(187 247 208)",
                            padding: 30,
                            marginLeft: 20,
                            marginTop : -20,
                            borderRadius: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            flex: 1,
                        }}
                    >
                        <View
                            style={{
                                width: 100,
                                height: 100,
                               
                                borderRadius: 40,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Feather name="users" size={30} color="black" />
                        </View>
                        <Text style={{ marginTop: 10, fontWeight: "800" }}>
                            Students List
                        </Text>
                    </Pressable>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: -165, marginRight: -480 }} >
                        <Pressable
                            onPress={() => router.push("markattendances")}
                            style={{
                                backgroundColor: "rgb(187 247 208)",
                                padding: 30,
                                marginRight: 23,
                                marginTop: -20,
                                borderRadius: 40,
                                alignItems: "center",
                                justifyContent: "center",
                                flex: 1,
                            }}
                        >
                            <View
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 40,
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Feather name="users" size={30} color="black" />
                            </View>
                            <Text style={{ marginTop: 10, fontWeight: "800" }}>
                                Mark Attendance
                            </Text>
                        </Pressable>
                    </View>

                    <View
                        style={{
                            marginTop: 20,
                            backgroundColor: "white",
                            paddingVertical: 200,
                            borderRadius: 7,
                        }}
                    >
                        <Pressable
                            style={{
                                backgroundColor: "rgb(187 247 208)",
                                borderRadius: 6,
                                padding: 4,
                                flexDirection: "row",
                                marginTop: -180,
                                marginVertical: 20,
                                marginHorizontal: -300,
                                marginLeft: -70
                            }}
                        >
                            <View
                                style={{
                                    padding: 10,
                                    width: 60,
                                    height: 60,
                                    borderRadius: 7,
                                    backgroundColor: "white",
                                    justifyContent: "center",
                                }}
                            >
                                <Feather name="user-plus" size={24} color="black" />
                            </View>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    marginTop : 20,
                                    fontSize: 16,
                                    fontWeight: "600",
                                    alignItems: "center",
                                    flex: 1,
                                }}
                            >
                                Ajouter Stagiaire
                            </Text>
                            <View
                                style={{
                                    width: 35,
                                    height: 35,
                                    marginTop : 10,
                                    borderRadius: 7,
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Entypo name="chevron-right" size={24} color="black" />
                            </View>
                        </Pressable>
                    </View>

                    <View>
                        <Pressable
                            style={{
                                backgroundColor: "rgb(187 247 208)",
                                borderRadius: 6,
                                padding: 4,
                                flexDirection: "row",
                                marginTop: -300,
                                marginVertical: 20,
                                marginHorizontal: -300,
                                marginLeft: -70
                            }}
                        >
                            <View
                                style={{
                                    padding: 10,
                                    width: 60,
                                    height: 60,
                                    borderRadius: 7,
                                    backgroundColor: "white",
                                    justifyContent: "center",
                                }}
                            >
                                <Octicons name="history" size={24} color="black" />
                            </View>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    marginTop : 20,
                                    fontSize: 16,
                                    fontWeight: "600",
                                    alignItems: "center",
                                    flex: 1,
                                }}
                            >
                                Historique Des Presences
                            </Text>
                            <View
                                style={{
                                    width: 35,
                                    height: 35,
                                    marginTop : 10,
                                    borderRadius: 7,
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Entypo name="chevron-right" size={24} color="black" />
                            </View>
                        </Pressable>
                    </View>

                    <View
                        style={{
                            marginTop: 20,
                            backgroundColor: "white",
                            paddingHorizontal: 320,
                            paddingVertical: -200,
                            borderRadius: 7,
                        }}
                    >
                        <Pressable
                            style={{
                                backgroundColor: "rgb(187 247 208)",
                                borderRadius: 6,
                                padding: 4,
                                flexDirection: "row",
                                marginTop: -240,
                                marginVertical: 20,
                                marginHorizontal: -300,
                                marginLeft: -70
                            }}
                        >
                            <View
                                style={{
                                    padding: 10,
                                    width: 60,
                                    height: 60,
                                    borderRadius: 7,
                                    backgroundColor: "white",
                                    justifyContent: "center",
                                }}
                            >
                                <EvilIcons name="calendar" size={29} color="black" />
                            </View>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    marginTop : 20,
                                    fontSize: 16,
                                    fontWeight: "600",
                                    alignItems: "center",
                                    flex: 1,
                                }}
                            >
                                Calendrier
                            </Text>
                            <View
                                style={{
                                    width: 35,
                                    height: 35,
                                    marginTop : 10,
                                    borderRadius: 7,
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Entypo name="chevron-right" size={30} color="black" />
                            </View>
                        </Pressable>
                        
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            backgroundColor: "white",
                            paddingVertical: 200,
                            borderRadius: 7,
                        }}
                    >
                        <Pressable
                            style={{
                                backgroundColor: "rgb(187 247 208)",
                                borderRadius: 6,
                                padding: 4,
                                flexDirection: "row",
                                marginTop: -380,
                                marginVertical: 20,
                                marginHorizontal: -300,
                                marginLeft: -70
                            }}
                        >
                            <View
                                style={{
                                    padding: 10,
                                    width: 60,
                                    height: 60,
                                    borderRadius: 7,
                                    backgroundColor: "white",
                                    justifyContent: "center",
                                }}
                            >
                                <Feather name="book-open" size={24} color="black" />
                            </View>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    marginTop : 20,
                                    fontSize: 16,
                                    fontWeight: "600",
                                    alignItems: "center",
                                    flex: 1,
                                }}
                            >
                                Cours
                            </Text>
                            <View
                                style={{
                                    width: 35,
                                    height: 35,
                                    marginTop : 10,
                                    borderRadius: 7,
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Entypo name="chevron-right" size={24} color="black" />
                            </View>
                        </Pressable>
                    </View>

                
                    <View
                        style={{
                            backgroundColor: "rgb(187 247 208)",
                            width: 160,
                            height: 200,
                            marginLeft: 455,
                            marginTop: -480,
                            borderRadius: 50,
                            padding: 30,
                            alignItems: "center",
                            justifyContent: "center",
                            flex: 1,
                        }}
                    >
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 7,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <MaterialIcons name="groups" size={40} color="black" />
                        </View>
                        <Text style={{ marginTop: 7, fontWeight: "700" }}>Groups</Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: "rgb(187 247 208)",
                            width: 160,
                            height: 200,
                            marginRight: -25,
                            marginTop: -200,
                            borderRadius: 50,
                            padding: 30,
                            alignItems: "center",
                            justifyContent: "center",
                            flex: 1,
                        }}
                    >
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 7,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Entypo name="book" size={30} color="black" />
                        </View>
                        <Text style={{ marginTop: 7, fontWeight: "700" }}>Modules</Text>
                    </View>





                    {/* <View>
                        <Image
                            // source={require("./assets/Internet_Day_bro.png")}
                            style={{
                                height: 400,
                                width: 400,
                                borderRadius: 20,
                                position: "absolute",
                                top: 5,
                                marginLeft: -15,
                                transform: [
                                    { translateX: 20 },
                                    { translateY: 50 },
                                    { rotate: "2deg" }
                                ]
                            }}
                        />
                    </View> */}

                    {/* content  */}

                    {/* <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 500,
                    width: "100%"
                }}>
                    
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Choose your role : </Text>

                    <Button
                        title="Enseignant"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: 15,
                            width: "100%"
                        }}
                    />
                    <Button
                        title="Etudiant"
                        onPress={() => navigation.navigate("SignupEtu")}
                        style={{
                            marginTop: 15,
                            width: "100%"
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                    </View>
                </View> */}
                </View>
            </ScrollView>

        </LinearGradient>
    )
}
export default Formateur