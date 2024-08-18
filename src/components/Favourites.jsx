import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { GetAllProductById } from "../Api";
function Favourites() {
  const [favitems, setfavitems] = useState([]);
  const fav = useSelector((state) => state.user.currentUser.favourites);
  console.log(fav);
  const Getfav = () => {
    setfavitems(fav);
  };
  const GetItem = async (id) => {
    return await GetAllProductById(id);
  };
  useEffect(() => {
    Getfav();
    console.log(favitems);
  });
  return (
    <>
      <h2>Favourites</h2>
      <div className="favourites">
        {favitems.length === 0 && <p>Loading...</p>}
        {favitems.length > 0 &&
          favitems.map((item) => {
            {
              item = GetItem(item);
            }
            <div className="favourite-item" key={item.id}>
              <img src={item.image} alt={item.name} />
            </div>;
          })}
      </div>
    </>
  );
}

export default Favourites;
