
import img from '../../../public/img14.jpg'
import img1 from '../../../public/download (13).jpg'

const Teavel = () => {
    return (
        <div>
            <div>
                <p className='text-center text-4xl mt-8 font-extrabold'>Traveling</p>
                <p className='text-2xl text-center mt-6 font-bold'> Getting Out of Your Creative Block: <br />
                 How Traveling Boosts Your Creativity</p>
                 <img className='h-52 w-72 mx-auto mt-6  md:w-full md:px-4' src={img} alt="" />
                 <p className='mt-4 px-4  md:px-8'>When you find yourself in a creative rut, how do you usually get past it? You might read a book, play a game, work out, talk to a friend, or grab a coffee at a local cafe. These are great ways to step away from your problems and hectic schedule to let your brain have a bit of a break. Removing yourself from your problem is one of the most significant ways to relieve your creative block and get a better understanding of that problem.</p>
                 <p className='mt-8 px-4 mg:px8  mb-12'>However, there's another way to distance yourself from your problems that is scientifically proven to boost your creativity and cognitive abilities, and that's by actually going away from your problems and traveling abroad to another country! </p>
            </div>
        </div>
    );
};

export default Teavel;