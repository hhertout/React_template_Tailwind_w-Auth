import React from "react"
import SignupForm from "../components/signup/SignupForm"

export default function Signup() {
  const signup = (email, password) => {
    const route = `${import.meta.env.VITE_API_URL}/signup`
    const account = {
      email: email,
      password: password,
    }
    const header = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
    }

    fetch(route, header)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <h2>Create an account</h2>
      <SignupForm signup={signup} />
    </div>
  )
}
