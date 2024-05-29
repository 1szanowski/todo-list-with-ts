import React, { ReactNode } from "react";
import { PropsWithChildren } from "react";

type CourseGoalProps = {
  title: string;
  children: ReactNode;
  id: number;
  onDelete: (id: number) => void
};

export default function CourseGoal({ title, children , onDelete, id}: CourseGoalProps) {
  return (
    <article>
      <div>
      <h2>{title}</h2>

      {children}

      <button onClick={() => onDelete(id)}>Delete me!</button>
      </div>
    </article>
  );
}
