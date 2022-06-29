import { Button} from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Contact from "./contact";

export default function Volunteer(){
    return (
    <div className= "grid-container">
        <p className="item1">Join as a <b>Hello Day</b> Volunteer</p>
        <div className="item3">
            <p>Mari bersama membantu para korban bencana bersama kami.</p>
            <p>Bergabung bersama tim Volunterr Hello Day dan BNPB Daerah setempat.</p>
            <p>Daftarkan diri kamu sebagai volunteer!</p>
            {/* <button type="button" ></button> */}
            <Link to={'/register'}>
                <Button>Daftar</Button>
            </Link>
            <h3>Apasih Kegiatan Volunteer itu?</h3>
            <p>Volunteer merupakan bentuk keikutsertaan individu dalam kegiatan sosial yang didasari keinginan pribadi. Melalui kegiatan volunteer kamu akan mendapat koneksi baru dengan banyak orang, berbagi manfaat untuk lingkungan sosial dan punya dampak buat kesehatan mental juga lho.
            </p>
            <p>
                Eits meski organisasi dan magang sangat penting, volunteering juga penting lho. Kamu akan dipandang sebagai orang yang memiliki kepedulian sosial. Dengan berkontribusi langsung di masyarakat, kamu menjadi lebih peka dan sigap terhadap permasalahan.</p>    
        </div>
        <div className="item4">
            <div className="poto">
                <img src="vol1.jpg" alt="foto"/>
            </div>
            <div className="poto">
                <img src="vol2.jfif" alt="foto"/>
            </div>
            <div className="poto">
                <img src="vol3.jpg" alt="foto"/>
            </div>
        </div>
    </div>
    );
}