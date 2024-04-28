
function SignupForm() {
    return (
        <div className="mx-auto flex flex-col justify-center">
            <div className="text-center">
                <h1 className="font-single-day text-5xl text-[#72DB73] mb-3">Super app</h1>
                <p>Create your new account</p>
            </div>

            <form className="flex flex-col mt-8">
                <input className="p-2 my-2 rounded placeholder:text-[#7C7C7C] bg-[#292929] focus:border-2 focus:outline-none focus:border-green-500" type="text" placeholder="Name" />
                <input className="p-2 my-2 rounded placeholder:text-[#7C7C7C] bg-[#292929] focus:border-2 focus:outline-none focus:border-green-500" type="text" placeholder="UserName" />
                <input className="p-2 my-2 rounded placeholder:text-[#7C7C7C] bg-[#292929] focus:border-2 focus:outline-none focus:border-green-500" type="email" placeholder="Email" />
                <input className="p-2 my-2 rounded placeholder:text-[#7C7C7C] bg-[#292929] focus:border-2 focus:outline-none focus:border-green-500" type="tel" placeholder="Mobile" />
                <div className="text-[#7C7C7C] mt-3">
                    <input type="checkbox" className="accent-[#72DB73] hover:cursor-pointer" />
                    <label className="ml-2">Share my registration data with Superapp</label>
                </div>
                <button className="bg-[#72DB73] py-1.5 mt-8 mb-5 text-lg font-semibold rounded-full">SIGN UP</button>
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