import React from "react";
import { connect } from "react-redux";
import "../assets/styles/container/Home.scss";
import Search from "../components/Search";
import Categories from "../components/Categories";
import RenderVideos from "../components/RenderVideos";

const Home = ({myList, trends, originals}) => {

  return  (
    <div className="App">
      <Search/>
      {myList.length > 0 &&
      (<Categories title="Mi lista">
        <RenderVideos list={myList}/>
      </Categories>
      )}

      <Categories title="Tendencias">
        <RenderVideos list={trends}/>
      </Categories>

      <Categories title="Originales">
        <RenderVideos list={originals}/>
      </Categories>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    myList: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect (mapStateToProps, null)(Home);