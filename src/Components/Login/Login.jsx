import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { signInUser, githubLogin, googleLogin } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const onSubmit = data => {
    const { email, password } = data;
    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then(result => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
    <div className="lg:w-2/4 md:w-2/4 mx-auto shadow-2xl p-10 mt-12">
    <form onSubmit={handleSubmit(onSubmit)} >
          <div>
            <label className="text-xl font-semibold" htmlFor="email">Email</label> <br />
            <input
              type="email"
              name="email"
              placeholder="Write Your Email"
              className="input input-bordered w-full mt-2"
              {...register("email", { required: true })}
            />
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
          <p className="my-4 text-lg ">
            If you do not register? please <Link className="text-blue-800 underline font-semibold" to="/register">Register</Link>
          </p>
        </form>
         {/* social btn login */}
        <div className="flex w-96">
          <button className="px-6 py-2 bg-blue-700 text-white rounded mx-auto" onClick={handleGithubLogin}>Github</button>
          <button className="px-6 py-2 bg-red-800 rounded text-white" onClick={handleGoogleLogin}>Google</button>
        </div>
    </div>
        
      </div>
    </div>
  );
};

export default Login;
