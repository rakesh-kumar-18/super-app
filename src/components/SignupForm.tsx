import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checked: false
    });

    const [errors, setErrors] = useState({
        name: false,
        username: false,
        email: false,
        mobile: false,
        checked: false
    });

    const navigate = useNavigate();

    const validPhone = (number: string) => {
        const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        return phoneRegex.test(number);
    };

    const validEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailRegex.test(email);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let isError = false;
        setErrors({
            name: false,
            username: false,
            email: false,
            mobile: false,
            checked: false
        });

        const { name, username, email, mobile, checked } = formData;

        if (name.trim().length === 0) {
            setErrors((errors) => ({ ...errors, name: true }));
            isError = true;
        }
        if (username.trim().length === 0) {
            setErrors((errors) => ({ ...errors, username: true }));
            isError = true;
        }
        if (email.trim().length === 0 || !validEmail(email)) {
            setErrors((errors) => ({ ...errors, email: true }));
            isError = true;
        }
        if (mobile.trim().length === 0 || !validPhone(mobile)) {
            setErrors((errors) => ({ ...errors, mobile: true }));
            isError = true;
        }
        if (!checked) {
            setErrors((errors) => ({ ...errors, checked: true }));
            isError = true;
        }

        if (!isError) {
            localStorage.setItem("userData", JSON.stringify(formData));
            navigate("/category");
        }
    };

    return (
        <div className="mx-auto flex flex-col justify-center">
            <div className="text-center">
                <h1 className="font-single-day text-5xl text-[#72DB73] mb-3">Super app</h1>
                <p>Create your new account</p>
            </div>

            <form
                className="flex flex-col mt-8"
                onSubmit={handleSubmit}
            >
                <input
                    className={`p-2 my-2 rounded placeholder:text-[#7C7C7C] bg-[#292929] focus:outline-none focus:border-2 focus:border-green-500 ${errors.name && "border-[1px] border-[#FF0000]"}`}
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                />
                {errors.name && <p className="text-[#FF0000] text-sm">Field is required</p>}

                <input
                    className={`p-2 my-2 rounded placeholder:text-[#7C7C7C] bg-[#292929] focus:outline-none focus:border-2 focus:border-green-500 ${errors.username && "border-[1px] border-[#FF0000]"}`}
                    type="text"
                    placeholder="UserName"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    autoComplete="off"
                />
                {errors.username && <p className="text-[#FF0000] text-sm">Field is required</p>}

                <input
                    className={`p-2 my-2 rounded placeholder:text-[#7C7C7C] bg-[#292929] focus:outline-none focus:border-2 focus:border-green-500 ${errors.email && "border-[1px] border-[#FF0000]"}`}
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                />
                {errors.email && <p className="text-[#FF0000] text-sm">Field is required</p>}

                <input
                    className={`p-2 my-2 rounded placeholder:text-[#7C7C7C] bg-[#292929] focus:outline-none focus:border-2 focus:border-green-500 ${errors.mobile && "border-[1px] border-[#FF0000]"}`}
                    type="tel"
                    placeholder="Mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    autoComplete="off"
                />
                {errors.mobile && <p className="text-[#FF0000] text-sm">Field is required</p>}

                <div className={`text-[#7C7C7C] mt-3 ${errors.checked ? "mb-3" : "mb-8"}`}>
                    <input
                        type="checkbox"
                        className="accent-[#72DB73] hover:cursor-pointer"
                        checked={formData.checked}
                        onChange={(e) => {
                            setFormData({ ...formData, checked: e.target.checked });
                        }}
                    />
                    <label className="ml-2">Share my registration data with Superapp</label>
                    {errors.checked && <p className="text-[#FF0000] text-sm">Check this box if you want to proceed</p>}
                </div>

                <button className="bg-[#72DB73] py-1.5 mb-5 text-lg font-semibold rounded-full">SIGN UP</button>
            </form>

            <div className="text-[#7C7C7C] text-sm">
                <div className="mb-3">
                    <p>By clicking on Sign up. you agree to Superapp <span className="text-[#72DB73] hover:cursor-pointer">Terms and</span></p>
                    <p className="text-[#72DB73] hover:cursor-pointer">Conditions of Use</p>
                </div>
                <p>To learn more about how Superapp collects, uses, shares and</p>
                <p>protects your personal data please head Superapp <span className="text-[#72DB73] hover:cursor-pointer">Privacy</span></p>
                <p className="text-[#72DB73] hover:cursor-pointer">Policy</p>
            </div>
        </div>
    );
}

export default SignupForm;