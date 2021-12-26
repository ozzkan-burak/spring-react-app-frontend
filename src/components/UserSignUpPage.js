import React from 'react'

const UserSignUpPage = () => {
  return (
    <>
      <form>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="d-name">Display Name</label>
          <input type="text" id="d-name" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <label htmlFor="passwordR">Password Repeat</label>
          <input type="password" id="passwordR" />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </>
  )
}

export default UserSignUpPage
