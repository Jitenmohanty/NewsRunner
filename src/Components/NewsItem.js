import React from "react";
import lodingImage from "../Images/loading.png";
import { storage } from "../firebase";
import {addDoc, collection, deleteDoc, doc} from 'firebase/firestore'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { setFavlist } from "../redux/Reducers/userSlice";

const NewsItem = (props) => {
  let { tittle, description, imgUrl, newsUrl, author, date, source,element ,favtrue,id} = props;
  const dispatch = useDispatch();
  const handleFavlist = async()=>{
    try {
      await addDoc(collection(storage,"articles"),{
        tittle:element.title,
        description:element.description,
        author:element.author,
        content:element.content,
        publishedAt:element.publishedAt,
        source:element.source,
        url:element.url,
        urlToImage:element.urlToImage
      })
      toast.success("Post added on favoruite list..")
    } catch (error) {
      toast.error("Post Not added..!")
      console.log(error)
    }
  }

  const removeFavlist = async(id)=>{
    try {
      await deleteDoc(doc(storage, 'articles',id));
      dispatch(setFavlist())
      toast.success('Post removed from the favorite list.');
    } catch (error) {
      toast.error("Post not removed. Error occurred.");
      console.error(error);
    }
  }
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={!imgUrl ? lodingImage : imgUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{tittle}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} publish on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            className="btn btn-sm btn-primary fw-bold"
            target="_blank"
          >
            Read More
          </a>
          {!favtrue ? <button className="btn btn-sm btn-success float-end fw-bold" onClick={handleFavlist}>+AddFav</button>:<button onClick={()=>removeFavlist(id)} className="btn btn-sm btn-danger float-end fw-bold">-RemoveFav</button>}
        </div>
      </div>
    </div>
  );
};


export default NewsItem;


