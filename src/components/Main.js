import React from "react"

export default function Main(props) {
  return(
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main-text">fun facts about react</h1>
      <ul className="main-ul">
        <li>was first release in 2013</li>
        <li>was originally created by Jordan Walke</li>
        <li>has well over 100k stars on github</li>
        <li>is maintained by facebook</li>
        <li>powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}