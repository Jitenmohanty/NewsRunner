import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { storage } from "../firebase";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import { selectFavlist, setFavlist } from "../redux/Reducers/userSlice";

const FavoruiteList = (props) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const favlist = useSelector(selectFavlist)

  useEffect(() => {
    const getFavlist = async () => {
      const querySnapshot = await getDocs(collection(storage, "articles"));
      const employee = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(setFavlist(employee))
      setLoading(false);
    };
    getFavlist();
  }, [dispatch,favlist]);
  
  return (
    <>
      <h1
        className="text-center"
        style={{ marginTop: "70px", marginBottom: "10px" }}
      >
        NewsRunner - Favorutie List
      </h1>
      {loading && <Spinner />}
      <div className="container">
        <div className="row">
          {favlist?.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  tittle={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                  id={element.id}
                  favtrue={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FavoruiteList;
