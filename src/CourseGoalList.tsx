import React from "react";
import { ReactNode } from "react";
import { PropsWithChildren } from "react";
import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "./App";


type CourseGoalListProp ={
  goals: CGoal[]
  onDeleteGoal : (id: number) => void
}

export default function CourseGoalList ({goals, onDeleteGoal}: CourseGoalListProp) {




return (
  <ul>
        {goals.map((el) => (
          <li key ={el.id}>
            <CourseGoal title={el.title} id={el.id} onDelete ={onDeleteGoal}>
              <p>{el.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
)

}