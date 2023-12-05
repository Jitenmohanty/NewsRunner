import React, { useEffect, useState } from "react";
import { collection, deleteDoc, getDocs } from "firebase/firestore";
import { storage } from "../firebase";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const FavoruiteList = (props) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    const getFavlist = async () => {
      const querySnapshot = await getDocs(collection(storage, "articles"));
      const employee = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEmployees(employee);
      setLoading(false);
    };
    getFavlist();
  }, []);

  

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
          {employees?.map((element) => {
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
