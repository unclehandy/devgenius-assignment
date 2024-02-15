"use client";
import FormUser from "@/components/formUser/page";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function CreateUser() {
  const router = useRouter();

  async function handleSubmitRegister(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const options = {
      method: "POST",
      url: "https://eventmakers-api.fly.dev/auth/register",
      headers: { "Content-Type": "application/json" },
      data: { name: name, email: email, password: password },
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);

      Swal({
        title: "Hello!",
        text: "Kamu sudah berhasil mendaftar",
        icon: "success",
      }).then(() => {
        router.push("/dashboard/user");
        router.refresh();
      });

      event.target.name.value = "";
      event.target.email.value = "";
      event.target.password.value = "";
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="card w-full bg-neutral m-0">
      <div className="card-body">
        <h2 className="card-title">Add User</h2>

        <FormUser onSubmit={handleSubmitRegister} />
      </div>
    </div>
  );
}
