import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { createUser } = useContext(AuthContext);

  // This is react hook form system
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const watchFields = watch(["name", "photo", "email", "password"]);

  useEffect(() => {
    const { name, photo, email, password } = watchFields;
    if (name && photo && email && password) {
      toast.success("All fields are filled successfully!");
    }
  }, [watchFields]);

  const onSubmit = (data) => {
    const { email, password } = data;

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        toast.success("User created successfully!");
      })
      .catch(error => {
        setRegisterError(error.message);
        toast.error(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <Helmet>
        <title>Register here</title>
      </Helmet>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="lg:w-2/4 md:w-2/4 mx-auto shadow-2xl p-10">
          <h1 className="text-3xl pb-2 font-bold">Please Register</h1>
          <div>
            <label className="text-xl font-semibold" htmlFor="name">Your Name</label> <br />
            <input
              type="text"
              placeholder="Write Your Name"
              className="input input-bordered w-full mt-2"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <label className="text-xl font-semibold" htmlFor="photo">Photo Url</label> <br />
            <input
              type="text"
              name="photo"
              placeholder="Put Your Photo Url"
              className="input input-bordered w-full mt-2"
              {...register("photo")}
            />
          </div>
          <div>
            <label className="text-xl font-semibold" htmlFor="email">Email</label> <br />
            <input
              type="email"
              name="email"
              placeholder="Write Your Email"
              className="input input-bordered w-full mt-2"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <label className="text-xl font-semibold" htmlFor="password">Password</label> <br />
            <div className="relative w-full">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Write Your Password"
                className="input input-bordered w-full mt-2"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long"
                  },
                  validate: {
                    hasUpperCase: value =>
                      /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
                    hasLowerCase: value =>
                      /[a-z]/.test(value) || "Password must contain at least one lowercase letter"
                  }
                })}
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          <button className="bg-amber-900 text-white rounded py-2 w-full mt-4">Register</button>
          {registerError && <p className="text-red-500 mt-2">{registerError}</p>}
          <p className="my-4">Already Have an Account? Please <Link className="text-blue-800 underline font-semibold" to="/login">Login</Link></p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
