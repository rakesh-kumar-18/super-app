import ActionImg from "../assets/action-img.png";
import DramaImg from "../assets/drama-img.png";
import RomanceImg from "../assets/romance-img.png";
import ThrillerImg from "../assets/thriller-img.png";
import WesternImg from "../assets/western-img.png";
import HorrorImg from "../assets/horror-img.png";
import FantansyImg from "../assets/fantansy-img.png";
import MusicImg from "../assets/music-img.png";
import FictionImg from "../assets/fiction-img.png";

const categories: Array<{
    title: string,
    url: string,
    bgColor: string;
}> = [
        {
            title: "Action",
            url: ActionImg,
            bgColor: "#FF5209"
        },
        {
            title: "Drama",
            url: DramaImg,
            bgColor: "#D7A4FF"
        },
        {
            title: "Romance",
            url: RomanceImg,
            bgColor: "#148A08"
        },
        {
            title: "Thriller",
            url: ThrillerImg,
            bgColor: "#84C2FF"
        },
        {
            title: "Western",
            url: WesternImg,
            bgColor: "#902500"
        },
        {
            title: "Horror",
            url: HorrorImg,
            bgColor: "#7358FF"
        },
        {
            title: "Fantasy",
            url: FantansyImg,
            bgColor: "#FF4ADE"
        },
        {
            title: "Music",
            url: MusicImg,
            bgColor: "#E61E32"
        },
        {
            title: "Fiction",
            url: FictionImg,
            bgColor: "#6CD061"
        }
    ];

export default categories;