"use client"

import { useRouter } from "next/navigation";

export const Login = () => {

  const router = useRouter();

  async function handleSubmitLogin (e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;


    const res = await fetch('https://eventmakers-api.fly.dev/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email,
        password
    }),
    })
    
    // const dataUser = await res.json()
    //  console.log(dataUser);
    const {payload, token} = await res.json();
 
    localStorage.setItem("user", JSON.stringify(payload))
    document.cookie = `token=${token}`;

    
    router.push("/dashboard");
}

  return (
    <div>
        <form onSubmit={handleSubmitLogin}>
        <input name="email" />
        <input name="password"/>
        <button>Login</button>
        </form>
    </div>
  )
}
