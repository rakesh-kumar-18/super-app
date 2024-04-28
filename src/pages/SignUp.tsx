import SignupForm from "../components/SignupForm";
import BgImage from "../assets/bg-image.png";

function SignUp() {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-cover relative" style={{ backgroundImage: `url(${BgImage})` }}>
                <div className="w-full absolute bottom-10 left-1/2 -translate-x-1/3 leading-tight text-4xl font-bold tracking-tighter">
                    <p>Discover new things on</p>
                    <p>Superapp</p>
                </div>
            </div>
            <SignupForm />
        </div>
    );
}

export default SignUp;