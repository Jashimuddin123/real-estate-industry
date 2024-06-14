// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { useContext } from "react";
// import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { Link } from "react-router-dom";
import {  useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
  const { signInUser,githubLogin, googleLogin } = useContext(AuthContext);
  
  // const {} = createContext(AuthContext)


  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    const { email, password } = data;
    signInUser(email, password)
    .then(result=>{
         console.log(result.user);
    })
    .catch(error=>{
        console.log(error);
    })
    console.log('this is login ', signInUser);
    // console.log('log i data', data);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="lg:w-2/4 md:w-2/4 mx-auto shadow-2xl p-10">
          <div>
            <label className="text-xl font-semibold" htmlFor="email">Email</label> <br />
            <input
              type="email"
              name="email"
              placeholder="Write Your Email"
              className="input input-bordered w-full mt-2"
              {...register("email", { required: true })}
            />
            {/* errors will return when field validation fails */}
            {errors.email && <span>This field is required</span>}
          </div>
          <div>
            <label className="text-xl font-semibold" htmlFor="password">Password</label> <br />
            <input
              type="password"
              name="password"
              placeholder="Write Your Password"
              className="input input-bordered w-full mt-2"
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
          </div>
          <button className="bg-blue-700 text-white rounded py-2 w-full mt-4">Login</button>
          <p className="my-4">
            If you do not register? please <Link className="text-blue-800 underline font-semibold" to="/register">Register</Link>
          </p>
        </form>
        {/* social btn login */}
        <div className="  mx-auto w-96">
          {/* github login */}
          <button className=" px-6  py-2 bg-blue-700 text-white rounded mx-auto" 
          onClick={()=>githubLogin()}>Github</button>
          <button onClick={()=>googleLogin()} className="px-6 py-2 ">Goggle</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
