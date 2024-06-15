

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";

const Register = () => {
   
    const { createUser } = useContext(AuthContext);
//  console.log(createUser);
    // This is react hook form system
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
    
        createUser(email, password)
            // console.log(data);
            .then(result=>{
                console.log(result.user);
            })
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="lg:w-2/4 md:w-2/4 mx-auto shadow-2xl p-10">
                    <h1 className="text-3xl pb-2 font-bold">Please Register</h1>
                    <div>
                        <label className="text-xl font-semibold" htmlFor="name">Your Name</label> <br />
                        <input
                            type="text"
                            // name="name"
                            placeholder="Write Your Name"
                            className="input input-bordered w-full mt-2"
                            
                            {...register("name", { required: true })}
                        />
                        {/* errors will return when field validation fails */}
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
                        {/* errors will return when field validation fails */}
                        {errors.email && <span className="text-red-500">This field is required</span>}
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
                        {errors.password && <span className="text-red-500">This field is required</span>}
                    </div>
                    <button className="bg-amber-900 text-white rounded py-2 w-full mt-4">Register</button>
                    <p className="my-4">Already Have an Account? Please <Link className="text-blue-800 underline font-semibold" to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
