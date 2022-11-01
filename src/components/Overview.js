import React from 'react'

export default function Overview({tasks}) {

  return (
    <div>
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.text}</li>
        })}
      </ul>
    </div>
  )
}
