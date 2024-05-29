import React, { useRef } from "react";
import { FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void
}


export default function NewGoal ({onAddGoal}: NewGoalProps) {

const goal = useRef<HTMLInputElement>(null);
const summary = useRef<HTMLInputElement>(null);

  function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredGoal =goal.current!.value
    const enteredSummary = summary.current!.value

    event.currentTarget.reset()
    onAddGoal(enteredGoal, enteredSummary)
  }

  return (
    <form onSubmit = {handleSubmit}>
      <p>
        <label htmlFor="goal">Input your goal</label>
        <input id="goal" type="text" ref={goal}/>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary}/>
        <p>
          <button>Add Goal</button>
        </p>
      </p>
    </form>
  )
}