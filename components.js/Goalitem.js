import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({itemData, OnDeleteItem, id}){
        
    function deleteGoalHandler(){
        OnDeleteItem(id)
        console.log('Delete Goal handlers')
    }
    return(
        <Pressable onPress={deleteGoalHandler}>
            <View style={styles.goalsItem}> 
                <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalsItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#FFF980',
        color: 'white'
    },
    goalText:{
        color: 'white'
    }
})