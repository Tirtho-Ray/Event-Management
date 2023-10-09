import { NavLink } from "react-router-dom";


const AllShowPlace = ({place}) => {
    const{id,movie_thumbnail,title} = place;
    return (
        <div>
            <div className="card w-[340px] lg:w-[300px] bg-base-100 mx-auto  shadow-xl mt-7">
                <figure><img className="h-[300px]" src={movie_thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <NavLink to={`/details/${id}`}>
                            see Details
                        </NavLink>
                        </button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default AllShowPlace;