import React,{useState} from 'react'

const INIT_STATE = {
  email: '',
  password: '',
  passwordConfirmation: '',
  displayName: ''
}

const UserSignUpPage = () => {
  const [agreedStatus, setAgreedStatus] = useState(false);
  const [pageState, setPageState] = useState(INIT_STATE);

  const onınputChange = (e) => {
    const { name, value } = e.target;
    setPageState({
      ...pageState,
      [name]: value
    });
  }

  return (
    <>
      <form>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={pageState.email} onChange={onınputChange}/>
        </div>
        <div>
          <label htmlFor="d-name">Display Name</label>
          <input type="text" name="displayName" id="d-name" value={pageState.displayName} onChange={onınputChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={pageState.password} onChange={onınputChange} />
        </div>
        <div>
          <label htmlFor="passwordC">Password Repeat</label>
          <input type="password" name="passwordConfirmation" id="passwordC" value={pageState.passwordConfirmation} onChange={onınputChange} />
        </div>
        <div>
          <label htmlFor="agree">Agreed</label>
          <input type="checkbox" id="agree" value={agreedStatus} onChange={(e)=> setAgreedStatus(prevState => prevState = !prevState)} />
        </div>
        <button disabled={agreedStatus} type='submit'>Sign Up</button>
      </form>
    </>
  )
}

export default UserSignUpPage
