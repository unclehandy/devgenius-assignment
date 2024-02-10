import { Save } from "lucide-react";

export default function FormUser({ onSubmit }) {
    return (
        <div>
            <form onSubmit={onSubmit}>
            <div>
                <label className="label">
                    <span className="text-base label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="w-full input input-bordered input-primary" />
            </div>
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
                <button className="btn btn-block btn-aprimary my-4" ><Save /> Save </button>
            </div>
            </form>
        </div>

    )
}