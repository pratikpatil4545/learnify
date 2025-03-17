// import React, { useEffect, useState } from 'react';
// import { View, FlatList, Text, StatusBar, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import QuizScreen from './QuizScreen';
// import WebView from 'react-native-webview';

// // const [courseData, setCourseData] = useState([]);
// // const [quizstate, setquizstate] = useState(false)
// // const fetchData = async () => {
// //     try {
// //         const username = 'key_fd03ee7610484c0385d6e0a6f9bd692c';
// //         const password = 'secret_7a01d77f0868770432258829f46b6104f567dc668ae047fc1f173502963e6cda';
// //         const encodedCredentials = btoa(`${username}:${password}`);

// //         const response = await fetch(
// //             'https://learnify-academy.com/wp-json/tutor/v1/course-contents/1405',
// //             {
// //                 method: 'GET',
// //                 headers: {
// //                     'Authorization': `Basic ${encodedCredentials}`,
// //                     'Content-Type': 'application/json',
// //                 },
// //             }
// //         );

// //         if (!response.ok) {
// //             throw new Error(`HTTP error! Status: ${response.status}`);
// //         }

// //         const jsonData = await response.json();
// //         setCourseData(jsonData.data);
// //     } catch (error) {
// //         console.error('Error fetching data:', error.message);
// //     }
// // };

// // useEffect(() => {
// //     fetchData();
// // }, []);
// export default function App() {

//     return (
//         <> <StatusBar backgroundColor="#0047AB" barStyle="light-content" />
//             <View style={styles.container}>
//                 <View style={{ width: '100%', height: 50, zIndex: 999, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0047AB', position: 'absolute', top: 0 }} >
//                     <Text style={{color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>Welcome to Learnify App</Text>
//                 </View>
//             </View>
//             <WebView
//                 source={{ uri: 'https://learnify-academy.com/dashboard' }}
//                 style={styles.webview}
//                 scalesPageToFit={false}
//                 javaScriptEnabled={true}
//                 injectedJavaScript={`
//                     var meta = document.createElement('meta'); 
//                     meta.name = 'viewport'; 
//                     meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
//                     document.getElementsByTagName('head')[0].appendChild(meta);
//                     `}
//             />
//         </>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         height: 0,
//     },
//     webview: {
//         flex: 1,
//     },
// });
// {/* <StatusBar backgroundColor="transparent" barStyle="dark-content" />
// {quizstate ? (
//     <>
//     <QuizScreen/>
//     </>
// ) : (
// <ScrollView contentContainerStyle={styles.scrollView}>
//     {courseData.map((course) => (
//         <View key={course.id} style={styles.courseCard}>
//             <Text style={styles.courseTitle}>{course.title}</Text>
//             <Text style={styles.courseSummary}>{course.summary}</Text>
//             {course.contents.map((item) => (
//                 <TouchableOpacity onPress={() => setquizstate(true)} key={item.ID} style={styles.lessonCard}>
//                     <Text style={styles.lessonTitle}>{item.post_title}</Text>
//                     <Text style={styles.lessonDate}>{item.post_date}</Text>
//                     <Text style={styles.lessonContent}>{item.post_content || 'No content available'}</Text>
//                 </TouchableOpacity>
//             ))}
//         </View>
//     ))}
// </ScrollView>
// )} */}

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         backgroundColor: '#f5f5f5',
// //         padding: 10,
// //     },
// //     scrollView: {
// //         paddingBottom: 20,
// //     },
// //     courseCard: {
// //         backgroundColor: '#fff',
// //         padding: 15,
// //         marginBottom: 15,
// //         borderRadius: 8,
// //         shadowColor: '#000',
// //         shadowOpacity: 0.1,
// //         shadowOffset: { width: 0, height: 2 },
// //         elevation: 3,
// //     },
// //     courseTitle: {
// //         fontSize: 20,
// //         fontWeight: 'bold',
// //         color: '#333',
// //         marginBottom: 5,
// //     },
// //     courseSummary: {
// //         fontSize: 16,
// //         color: '#666',
// //         marginBottom: 10,
// //     },
// //     lessonCard: {
// //         backgroundColor: '#f9f9f9',
// //         padding: 12,
// //         marginTop: 8,
// //         borderRadius: 6,
// //     },
// //     lessonTitle: {
// //         fontSize: 18,
// //         fontWeight: 'bold',
// //         color: '#444',
// //     },
// //     lessonDate: {
// //         fontSize: 14,
// //         color: '#888',
// //         marginVertical: 4,
// //     },
// //     lessonContent: {
// //         fontSize: 16,
// //         color: '#555',
// //     },
// // });




// import React, { useEffect, useState } from 'react';
// import { View, Text, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
// import WebView from 'react-native-webview';
// import NetInfo from '@react-native-community/netinfo';

// export default function App() {
//     const [loading, setLoading] = useState(true);
//     const [isConnected, setConnected] = useState(true);

//     useEffect(() => {
//         let unsubscribe
//         let currentState

//         // Subscribe NetInfo event
//         unsubscribe = NetInfo.addEventListener(state => {
//             if (currentState !== state.isConnected) {
//                 currentState = state.isConnected
//                 console.log("Is connected?", currentState);
//                 setConnected(currentState);
//                 // if (currentState === true) {
//                 //     sendDataInBackground()
//                 // }
//             }
//         });

//         return () => {
//             console.log("unsubscribe");

//             if (unsubscribe)
//                 unsubscribe();
//         };
//     }, []);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false);
//         }, 1000); // Splash screen visible for 3 seconds

//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <>
//             {/* <StatusBar backgroundColor="#0047AB" barStyle="light-content" /> */}
//             <StatusBar backgroundColor="transparent" barStyle="dark-content" />
//             {loading ? (
//                 <View style={styles.splashScreen}>
//                     {/* <Text allowFontScaling={false} style={styles.splashText}>Welcome to Learnify App</Text> */}
//                     <ActivityIndicator size="large" color="white" />
//                 </View>
//             ) : (
//                 <>
//                     {/* <View style={styles.header}>
//                         <Text allowFontScaling={false} style={styles.headerText}>Welcome to Learnify Academy</Text>
//                     </View> */}
//                     <WebView
//                         source={{ uri: 'https://learnify-academy.com/' }}
//                         style={styles.webview}
//                         scalesPageToFit={false}
//                         javaScriptEnabled={true}
//                         onLoadEnd={() => setLoading(false)}
//                         textZoom={100}
//                         injectedJavaScript={`
//                             var meta = document.createElement('meta'); 
//                             meta.name = 'viewport'; 
//                             meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
//                             document.getElementsByTagName('head')[0].appendChild(meta);
//                         `}
//                     />
//                 </>
//             )}
//         </>
//     );
// }

// const styles = StyleSheet.create({
//     splashScreen: {
//         flex: 1,
//         backgroundColor: '#0047AB',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     splashText: {
//         color: 'white',
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     header: {
//         width: '100%',
//         height: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#0047AB',
//         position: 'absolute',
//         top: 0,
//         zIndex: 999,
//     },
//     headerText: {
//         color: 'white',
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
//     webview: {
//         flex: 1,
//     },
// });




import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';

export default function App() {
    const [loading, setLoading] = useState(true);
    const [isConnected, setConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Is connected?", state.isConnected);
            setConnected(state.isConnected);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            {loading ? (
                <View style={styles.splashScreen}>
                    <ActivityIndicator size="large" color="white" />
                </View>
            ) : (
                isConnected ? (
                    <WebView
                        source={{ uri: 'https://learnify-academy.com/' }}
                        style={styles.webview}
                        scalesPageToFit={false}
                        javaScriptEnabled={true}
                        onLoadEnd={() => setLoading(false)}
                        textZoom={100}
                        injectedJavaScript={`
                            var meta = document.createElement('meta'); 
                            meta.name = 'viewport'; 
                            meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
                            document.getElementsByTagName('head')[0].appendChild(meta);
                        `}
                    />
                ) : (
                    <View style={styles.noInternetScreen}>
                        <Text style={styles.noInternetText}>No Internet Connection</Text>
                        {/* <Text style={styles.noInternetText}>Please connect to the Internet</Text> */}
                    </View>
                )
            )}
        </>
    );
}

const styles = StyleSheet.create({
    splashScreen: {
        flex: 1,
        backgroundColor: '#0047AB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noInternetScreen: {
        flex: 1,
        backgroundColor: '#f8d7da',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noInternetText: {
        color: '#721c24',
        fontSize: 20,
        fontWeight: 'bold',
    },
    webview: {
        flex: 1,
    },
});

