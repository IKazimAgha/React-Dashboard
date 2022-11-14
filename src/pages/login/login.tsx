import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import RoundInputField from '../../components/signupFields';
import { ADD_TOKEN, EMPLOYEE_UPDATE } from '../../constants/EmployeeActionType';
import { login_user } from '../../helper/api/auth';
import { getAccessToken } from '../../helper/functions';

const LoginPage = () => {

    const [email, setEmail] = useState<string>('');
    const [passowrd, setPassword] = useState<string>('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navigateRegister = () =>{
        navigate("/register")
    }

    const checkLoggedIn = async () => {
        const token = await getAccessToken();
        if(!!token){
            dispatch({type: ADD_TOKEN, payload: token})
            navigate("/")
        }
    }

    useEffect(() => {
        checkLoggedIn();
    }, [])

    const handleLogin = async () => {
        const user = {
            employee_name: email,
            password: passowrd
        }
        const employeeData = await login_user(user);
        const { employee } = employeeData
        if(!!employee){
            dispatch({type: EMPLOYEE_UPDATE, payload: employee});
            await localStorage.setItem('access_token', JSON.stringify(employee.access_token));
            await localStorage.setItem('user_id', JSON.stringify(employee.id));
            navigate("/")
        }
    }

    return(
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <RoundInputField title="Your Email" type="email" onChangeText={(value: string) => setEmail(value)} value={email} />
                  <RoundInputField title="Your Password" type="password" onChangeText={(value: string) => setPassword(value)} value={passowrd} />
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" onClick={() => handleLogin()} className="w-full text-gray bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? 
                      <a onClick={() => navigateRegister()} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
        </>
    )
}

export default LoginPage;
