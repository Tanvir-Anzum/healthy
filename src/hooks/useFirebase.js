import { useState, useEffect } from 'react'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth'
import initializeAuthentication from '../Firebase/firebase.init'

initializeAuthentication()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [name, setName] = useState({})
  const [loading, setLoading] = useState(true)
  const auth = getAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLogin, setIsLogin] = useState('')

  const googleProvider = new GoogleAuthProvider()

  const handleNameChange = (e) => {
    // console.log(e.target.value)
    setName(e.target.value)
    //e.preventDefault()
  }
  const handleEmailChange = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
    //e.preventDefault()
  }
  const handlePasswordChange = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value)
    //e.preventDefault()
  }
  const toggleLogin = (e) => {
    setIsLogin(e.target.checked)

    //e.preventDefault()
  }

  const handleRegistration = (e) => {
    e.preventDefault()
    console.log(email, password)
    if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
    ) {
      setError('Password does not meet requirements')
      return
    } else {
      setError('')
    }
    isLogin ? processLogin(email, password) : registerNewUser(email, password)
  }
  const handleLogin = (e) => {
    e.preventDefault()
    processLogin(email, password)
  }
  const handleRegister = (e) => {
    e.preventDefault()
    registerNewUser(email, password)
  }
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user
        setError('')
      })
      .catch((error) => {
        setError(error.message)
      })
  }
  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        //     // Signed in
        const user = result.user

        console.log(user)
        setError('')
        verifyEmail()
        setUserName()
        //     // ...
      })
      .catch((error) => {
        setError(error.message)
      })
  }
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then((result) => {
      // Profile updated!
      // ...
    })
  }
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      // ...
    })
  }

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider).finally(() => {
      setLoading(false)
    })
  }

  const logOut = () => {
    setLoading(true)
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .finally(() => setLoading(false))
  }

  // observe whether user auth state changed or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setLoading(false)
    })
    return () => unsubscribe
  }, [])

  return {
    user,
    loading,
    signInUsingGoogle,
    logOut,
    email,
    password,
    isLogin,
    error,
    handleRegistration,
    processLogin,
    registerNewUser,
    handleEmailChange,
    handlePasswordChange,
    handleRegister,
    handleLogin,
    verifyEmail,
    handleNameChange,
  }
}

export default useFirebase
