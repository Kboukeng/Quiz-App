import { Text, View, TouchableOpacity } from 'react-native'
import styles from './style'
import React from 'react'
import {useNavigation} from "@react-navigation/native"
import { ScrollView } from 'react-native-gesture-handler'

const home = () => {
    const navigation = useNavigation();

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={styles.category}
              onPress={() => navigation.navigate("mcq", { category: "world" })}
            >
              <Text style={styles.categoryTitle}>World</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() =>
                navigation.navigate("mcq", { category: "sciences" })
              }
            >
              <Text style={styles.categoryTitle}>Sience</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() => navigation.navigate("mcq", { category: "Africa" })}
            >
              <Text style={styles.categoryTitle}>Africa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() =>
                navigation.navigate("mcq", { category: "geography" })
              }
            >
              <Text style={styles.categoryTitle}>Geography</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() =>
                navigation.navigate("mcq", { category: "history" })
              }
            >
              <Text style={styles.categoryTitle}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() =>
                navigation.navigate("mcq", { category: "technology" })
              }
            >
              <Text style={styles.categoryTitle}>Technology</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
}

export default home


