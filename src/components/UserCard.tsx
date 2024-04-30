import ProfileImg from "../assets/profile-img.png";
import { UserDetails } from "./SignupForm";

function UserCard() {
    const userData: UserDetails = JSON.parse(localStorage.getItem("userData") as string);
    const categories: Array<string> = JSON.parse(localStorage.getItem("categories") as string);

    return (
        <div className="bg-[#5746EA] w-fit px-6 py-4 rounded-2xl flex">
            <div className="">
                <img className="w-[120px]" src={ProfileImg} alt="user profile" />
            </div>
            <div className="ml-6 mt-3">
                <div className="mb-6">
                    <p>{userData.name}</p>
                    <p>{userData.email}</p>
                    <p className="font-semibold text-3xl">{userData.username}</p>
                </div>
                <div className={`grid grid-cols-2 gap-2 ${categories.length > 6 && "grid-cols-3"}`}>
                    {categories.map(category => <div key={category} className="bg-[#9F94FF] rounded-full w-28 px-4 py-1">{category}</div>)}
                </div>
            </div>
        </div>
    );
}

export default UserCard;