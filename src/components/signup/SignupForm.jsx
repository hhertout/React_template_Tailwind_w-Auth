import React, { useRef, useState } from "react"

export default function SignupForm({ signup }) {
  const [pwd, setPwd] = useState("")
  const [confirmPwd, setConfirmPwd] = useState("")
  const emailInput = useRef()

  const handlePwdChange = e => {
    setPwd(e.target.value.trim())
  }
  const handleConfirmPwdChange = e => {
    setConfirmPwd(e.target.value.trim())
  }

  const handleSubmit = e => {
    e.preventDefault()
    const email = emailInput.current.value.trim()
    const lastname = lastnameInput.current.value.trim()
    const firstname = firstnameInput.current.value.trim()

    try{
        signup(email, pwd, firstname, lastname)
    } catch(err){
        console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input ref={emailInput} id="email" name="email" type="email" />

      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" onChange={handlePwdChange} value={pwd} />

      <label htmlFor="confirm-password">Confirm password</label>
      <input
        id="confirm-password"
        name="confirm-password"
        type="password"
        onChange={handleConfirmPwdChange}
        value={confirmPwd}
      />
      {pwd === confirmPwd ? null : <div className="text-red text-xs">Passwords should be similar</div>}

      <button disabled={pwd === confirmPwd ? "" : "disable"}>Create my account</button>
    </form>
  )
}
