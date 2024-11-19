// import { useContext, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import Swal from "sweetalert2";

// /* eslint-disable react/no-unknown-property */
// const Register = () => {


//     const { registerUser, updateUserProfile, googleLogin } = useContext(AuthContext)
//     const [error, setError] = useState('')
//     // const [showPassword, setShowPassword] = useState('')
//     const location = useLocation()
//     const navigate = useNavigate()

//     const handleRegister = (e) => {
//         e.preventDefault();
//         const name = e.target.name.value;
//         const photo = e.target.photo.value;
//         const email = e.target.email.value;
//         const password = e.target.password.value; // Corrected to get the password from password input field

//         const newUser = { name, photo, email, password };
//         console.log(newUser);

//         // Password validation
//         if (/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
//             registerUser(email, password)
//                 .then(() => {
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'User registered successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Cool'
//                     });

//                     updateUserProfile(name, photo)
//                         .then(() => {
//                             navigate(location?.state?.from || '/'); // Navigates to previous location or home page
//                         })
//                         .catch((updateError) => {
//                             setError(updateError.message);
//                         });
//                 })
//                 .catch((registerError) => {
//                     setError(registerError.message);
//                 });
//         } else {
//             // If password doesn't match the criteria
//             Swal.fire({
//                 title: 'Error!',
//                 text: 'Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long',
//                 icon: 'error',
//                 confirmButtonText: 'Try again'
//             });
//         }
//     }
//         return <div>
//             <div className=" my-16 w-96 mx-auto">
//                 <div
//                     className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
//                 >
//                     <div
//                         className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40"
//                     >
//                         <h3
//                             className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased"
//                         >
//                             Sign Up
//                         </h3>
//                     </div>
//                     <form onSubmit={handleRegister} className="flex flex-col gap-4 p-6">
//                         <div className="relative h-11 w-full min-w-[200px]">
//                             <input name="name"
//                                 placeholder=""
//                                 className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//                             />
//                             <label
//                                 className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
//                             >
//                                 Name
//                             </label>
//                         </div>
//                         <div className="relative h-11 w-full min-w-[200px]">
//                             <input name="photo"
//                                 placeholder=""
//                                 className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//                             />
//                             <label
//                                 className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
//                             >
//                                 Photo Url
//                             </label>
//                         </div>
//                         <div className="relative h-11 w-full min-w-[200px]">
//                             <input name="email"
//                                 placeholder=""
//                                 className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//                             />
//                             <label
//                                 className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
//                             >
//                                 Email
//                             </label>
//                         </div>
//                         <div className="relative h-11 w-full min-w-[200px]">
//                             <input name="password"
//                                 placeholder=""
//                                 className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//                             />
//                             <label
//                                 className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
//                             >
//                                 Password
//                             </label>
//                         </div>

//                         <button className="btn block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Sign up</button>
//                     </form>
//                     <div className="p-6 pt-0">

//                         <p
//                             className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased"
//                         >
//                             Don't have an account?
//                             <Link to={'/login'}
//                                 className="ml-1 block font-sans text-sm font-bold leading-normal text-cyan-500 antialiased"
//                                 href="#signup"
//                             >
//                                 Sign up
//                             </Link>
//                         </p>
//                     </div>
//                 </div>

//             </div>
//         </div>;
//     };
//     export default Register;



import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { registerUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [photoUrl, setPhotoUrl] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const newUser = { name, photo: photoUrl, email, password };
        console.log(newUser);

        // Password validation
        if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
            Swal.fire({
                title: 'Error!',
                text: 'Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.',
                icon: 'error',
                confirmButtonText: 'Try again'
            });
            return;
        }

        try {
            await registerUser(email, password);
            Swal.fire({
                title: 'Success!',
                text: 'User registered successfully.',
                icon: 'success',
                confirmButtonText: 'Cool'
            });

            // Upload image to imgbb and get URL if photo is provided
            if (photoUrl) {
                await updateUserProfile(name, photoUrl);
            }
            navigate(location?.state?.from || '/');
        } catch (err) {
            setError(err.message);
            Swal.fire({
                title: 'Error!',
                text: err.message,
                icon: 'error',
                confirmButtonText: 'Try again'
            });
        }
    };

    // Handle image file upload
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("image", file);

            // Replace with your imgBB API key
            const apiKey = "854cd0322dffcba98549a05274f90c3d";
            try {
                const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                    method: "POST",
                    body: formData,
                });
                const data = await response.json();
                if (data.success) {
                    setPhotoUrl(data.data.url); // Set the URL of the uploaded image
        
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Image upload failed.',
                        icon: 'error',
                        confirmButtonText: 'Try again'
                    });
                }
            } catch (error) {
                console.error('Image upload failed:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Image upload failed. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                });
            }
        }
    };

    return (
        <div className="my-16 lg:w-96 mx-auto">
            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
                    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">Sign Up</h3>
                </div>
                <form onSubmit={handleRegister} className="flex flex-col gap-4 p-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input name="name" placeholder="" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Name</label>
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            name="photo"
                            type="file"
                            onChange={handleImageUpload}
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Profile Picture</label>
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input name="email" placeholder="" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Email</label>
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input name="password" type="password" placeholder="" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Password</label>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-cyan-500 py-3 text-white rounded-lg shadow-lg hover:bg-cyan-700">Register</button>
                    </div>
                    <div className="text-center mt-2">
                        <Link to="/login" className="text-cyan-500">Already have an account? Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
