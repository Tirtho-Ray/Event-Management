import { NavLink } from "react-router-dom";
import img1 from '../../../public/download (2).jpg'
import img2 from '../../../public/download (5).jpg'
import img3 from '../../../public/download (6).jpg'
import img4 from '../../../public/download (4).jpg'
import img5 from '../../../public/download (8).jpg'


const Home = () => {
    return (
        <div>
           <div>
           <div className="hero ml-5 md:ml-0 h-52  md:h-96" style={{backgroundImage: 'url(https://i.ibb.co/q5xQcmS/download-7.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center mx-auto  text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome Russia</h1>
                <p className="mb-5 text-[10px] md:text-xl lg:text-xl">What is the famous festival in Russia?
Famous festivals in Russia include the Maslenitsa Festival (in ode to the end of winter and the beginning of spring), the Reindeer Herder's Festival (an iconic winter Russian festival featuring reindeer races and skiing), Moscow Golden Mask Festival (which pays homage to Russian theatre and drama), Victory Day </p>
                <button className="btn btn-primary "><NavLink to="/place">Places</NavLink></button>
                </div>
            
            </div>
            
            
            </div>
            <div className=" md:mt-12 ">
                 <div className="hero h-52 lg:w-[900px] ">
                      <div className="hero-content flex-col lg:flex-row-reverse">
                      <img src={img1} className=" rounded-lg shadow-2xl h-32  mt-24 md:h-56 w-[600px] md:w-[1200px] ml-3 md:ml-0" />
                      <div>
                     <h1 className=" md:text-3xl lg:text-5xl     font-bold">The Fauns Festival</h1>
                     <p className="py-6">Fanush (Also known as Sky Lantern or Paper made hot air balloon) probably started in north Kolkata in early 20th century. Those days only aristocratic families (Babu culture) used to fly fanush & it's making process also kept with secrecy. Time goes by. Fanush making tradition slowly crossed its golden edge.</p>
                     <button className="btn btn-primary"><NavLink to="place">See more place</NavLink></button>
                    </div>
                     </div>
                </div>
            </div>
            <div className=" mt-[350px] md:mt-[400px] lg:mt-44 lg:ml-40">
                     <div className="hero h-52 lg:w-[900px] ">
                           <div className="hero-content flex-col lg:flex-row">
                               <img src={img3} className="max-w-sm rounded-lg shadow-2xl h-64 md:w-full" />
                    <div className="">
                            <h1 className=" md:text-3xl lg:text-5xl font-bold">London clock tower</h1>
                    <p className="py-6 ">In Song dynasty China, an astronomical clock tower was designed by Su Song and erected at Kaifeng in 1088, featuring a liquid escapement mechanism. In England, a clock was put up in a clock tower, the medieval precursor to Big Ben, at Westminster, in 1288; and in 1292 a clock was put up in Canterbury Cathedral.</p>
                    <button className="btn btn-primary"><NavLink to="place">See more place</NavLink></button>
                    </div>
                </div>
                </div>
            </div>
            <div className=" mt-[300px] md:mt-12  ">
                 <div className="hero h-52 lg:w-[900px] ">
                      <div className="hero-content flex-col lg:flex-row-reverse md:mt-[200px] lg:mt-[100px]  ">
                      <img src={img2} className=" rounded-lg shadow-2xl h-32  mt-24 lg:mt-0 md:h-56 w-[600px] md:w-[1200px] ml-3 md:ml-0" />
                      <div>
                     <h1 className=" md:text-3xl lg:text-5xl     font-bold">The Qutub miner</h1>
                     <p className="py-6">The Qutub Minar, also spelled "Qutb Minar," was built in 1192 by Qutb-ud-din Aibak, the first Sultan and first Muslim ruler of Delhi, and was completed in 1368 by Firoz Shah Tughlaq. The history of building royal tombs dates back to the 13th century, with the square tomb of Iltutmish in Quwwat-ul-Islam mosque.</p>
                     <button className="btn btn-primary"><NavLink to="place">See more place</NavLink></button>
                    </div>
                     </div>
                </div>
            </div>
            <div className=" mt-[400px] md:mt-[600px] lg:mt-[200px] lg:ml-40">
                     <div className="hero h-52 lg:w-[900px] ">
                           <div className="hero-content flex-col lg:flex-row">
                               <img src={img4} className="max-w-sm rounded-lg shadow-2xl h-64 md:w-full" />
                    <div className="">
                            <h1 className=" md:text-3xl lg:text-5xl font-bold">Eiffle Tower</h1>
                    <p className="py-6 ">It was designated a monument historique in 1964, and was named part of a UNESCO World Heritage Site  in 1991. The tower is 330 metres (1,083 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris.</p>
                    <button className="btn btn-primary"><NavLink to="place">See more place</NavLink></button>
                    </div>
                </div>
                </div>
            </div>
            <div className="mt-[250px] md:mt-[200px] lg:mt-[32px] mb-[400px] lg:mb-[200px]">
                 <div className="hero h-52 lg:w-[900px] ">
                      <div className="hero-content flex-col lg:flex-row-reverse">
                      <img src={img5} className=" rounded-lg shadow-2xl h-32  mt-24 md:h-56 w-[600px] md:w-[1200px] ml-3 md:ml-0" />
                      <div>
                     <h1 className=" md:text-3xl lg:text-5xl     font-bold">Egypt pyramid</h1>
                     <p className="py-6">Egypt's pharaohs expected to become gods in the afterlife. To prepare for the next world they erected temples to the gods and massive pyramid tombs for themselves—filled with all the things each ruler would need to guide and sustain himself in the next world.</p>
                    <button className="btn btn-primary"><NavLink to="place">See more place</NavLink></button>
                    </div>
                     </div>
                </div>
            </div>
           </div>
        
        </div>
    );
};

export default Home;