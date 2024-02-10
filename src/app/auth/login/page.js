"use client"
import axios from "axios";
import Link from "next/link";
import React from 'react';
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert';



export default function Login() {
    const router = useRouter();
    async function handleSubmitLogin(event) {


        event.preventDefault();


        const email = event.target.email.value;
        const password = event.target.password.value;

        const options = {
            method: 'POST',
            url: 'https://eventmakers-api.fly.dev/auth/login',
            headers: { 'Content-Type': 'application/json' },
            data: { email: email, password: password }
        };

        try {
            const { data } = await axios.request(options);

            const { payload, token } = data;
            localStorage.setItem("user", JSON.stringify(payload))
            Cookies.set("token", token);

            router.push("/dashboard/home");
            router.refresh();

            console.log(data);

        } catch (error) {
            console.error(error);
            if (error.response) {

                const { status, data } = error.response;

                if (status === 401 || status === 404) {
                  
                    Swal({
                        icon: 'error',
                        title: 'Oops...',
                        text: data.message || 'Authentication failed!',
                    });
                }
            } else if (error.request) {
                
                Swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No response from the server!',
                });
            } else {
                
                Swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'An unexpected error occurred!',
                });
            }
        
    }


}

return (
    <>
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-slate-800 border border-slate-800  shadow-slate-900 rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-light text-center text-primary">Login Event Maker</h1>
                <form className="space-y-4" onSubmit={handleSubmitLogin}>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="Email Address" className="w-full input input-bordered input-primary" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" name="password"
                            className="w-full input input-bordered input-primary" />
                    </div>
                    <div>
                        <button className="btn btn-block btn-aprimary my-4">Sign Up</button>
                    </div>
                    <span>don't have an account ?
                        <Link href="/auth/register" className="text-primary hover:text-secondary mx-4 ">Register</Link></span>
                </form>
            </div>
        </div>

    </>
)
}