import { useState } from "react";
import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import CourseGoalList from "./CourseGoalList";
import Header from "./Header";
import robo from "./assets/robo.png";
import NewGoal from "./NewGoal";


export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  //we can create type and use it like the generic

 

  const [goals, setGoal] = useState<CourseGoal[]>([]); ///we will have the array with objects that defined in the coursegoal

  function handleAddGoal(goal: string, summary: string) {
    setGoal((prevGoal) => {
      const newGoal: CourseGoal = {
        title: goal,
        description: summary,
        id: Math.random(),
      };
      console.log("aaa", newGoal.id);
      return [...prevGoal, newGoal];
    });
  }

  function handleDeletionGoals (id: number) {
      setGoal(prevGoal => prevGoal.filter((el) => el.id !== id))
  }

 
  // for parsing the goals
 //todo: check li, maybe add <a> element?
  
  return (
    <main>
      <Header image={{ src: robo, alt: "this is image" }}>
        <h1>Additional text here</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals = {goals} onDeleteGoal={handleDeletionGoals}/>
    </main>
  );
}

export default App;
