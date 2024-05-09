import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components.js/Goalinput';
import GoalItem from './components.js/Goalitem';

export default function App() {
  const [goals, setGoals] = useState([])
  
  function handleAddGoal(enteredGoalText) {
    console.log(enteredGoalText)
 setGoals(()=>[...goals, {text: enteredGoalText, key: Math.random().toString()}])
  }
  
 function handleDeleteGoal(id){
  console.log('DELETE')
  const deleteGoal = goals.filter((goal) => {return goal.key !== id} )
  setGoals(deleteGoal)
 }
  return(
  <View style={styles.container}>
    <GoalInput
    onAddGoal={handleAddGoal}
    />
    <View style={styles.goalsContiner}>

      <FlatList
      data={goals}
      renderItem={ (itemData) => {
        return(
       // <GoalItem
        //itemData={itemData}
        //OnDeleteItem={handleDeleteGoal}
        <GoalItem
        itemData={itemData}
        OnDeleteItem={handleDeleteGoal}
        id={itemData.item.key}
        />)
      }}

      />
    </View>
  </View>  
  );
}

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      paddingTop: 50,
      paddingHorizontal:20
    },

    imnputContainer:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      borderBottomColor: '#FFF980'
    },
    btGoal:{
      borderRadius: 20,
      backgraundColor: '#F8FF6E',
    },
    textInput:{
      borderWith: 1,
      borderColor: '#ffffff',
      width: '80%',
      marginRight: 3,
      padding: 8,
      borderRadius: 5
    },
    goalsContiner: {
      flex: 5,
    },
    goalsItem: {
      margin: 8,
      padding: 8,
      borderRadius: 6,
      backgroundColor: '#8576FF',
      color: 'white'
    },
    goalsText: {
      color: 'white'
    }
    

    }
  );