import AllShowPlace from "./AllShowPlace";


const ShowPlace = ({place}) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {
                    place?.map((place) =><AllShowPlace key={place.id} place={place}></AllShowPlace>)
                }
                
            </div>
        </div>
    );
};

export default ShowPlace;