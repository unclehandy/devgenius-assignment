
import axios from "axios";
import { Edit, Plus, Trash2 } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";


async function showData() {
    const token = cookies().get("token").value;
    const options = {
        method: 'GET',
        url: 'https://eventmakers-api.fly.dev/users/',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const { data } = await axios.request(options);
        return data
    } catch (error) {
        console.error(error);
    }
}


export default async function user() {
    const usersData = await showData();
    return (

        <>

        <div>
            <Link className="btn btn-primary btn-sm" href="/dashboard/user/create"><Plus /> Add Data</Link>
        </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.data?.map((item,index) => (
                            <tr key={item.id}>
                                <th>{index + 1} </th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}