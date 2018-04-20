import React, { Component } from 'react';
import SearchBox from './SearchBox';
import MainVideo from './MainVideo';
import VideoList from './VideoList';


/*Declare API key and number of results to search for */
const API = 'AIzaSyBB7i-HBioa8L8hfS2eACFpjglLBfl64mY';
const result = 5;

class App extends Component {

  constructor(props) {
    super(props);
    /*Add state to store videos, item your are searching for and the video that you will select */
    this.state = {
      videos: [],
      searchText: 'React.Js',
      selectedVideo: null

    };
    this.clicked = this.clicked.bind(this)
    this.onChildChanged = this.onChildChanged.bind(this)
  }
  /*When a value is entered in the search, update the state of searchText to that value */
  onChildChanged(newState) {
    this.setState({ searchText: newState })
  }

  /*This will run the clicked function before the component loads */
  componentWillMount() {
    this.clicked()
  }


  clicked() {
    /*finalUrl takes in the result and api variables and the state of the search to get the videos you are looking for */
    const finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result}&q=${this.state.searchText}&key=${API}`

    /*fetch uses the api url to get the items of the api and return them in json */
    fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {

        /*sets the state of the video array with the items that came from fetch */
        this.setState({ videos: responseJson.items });
        /* sets the state of the selectedVideo to the first video in the videos array*/
        this.setState({ selectedVideo: this.state.videos[0] })

      })
      .catch((error) => {
        console.error(error);
      });


  }



  render() {


    return (
      <div >
        {/*Renders and returns the SearcBox component which takes in the state of searchText*/}
        <nav className="navbar navbar-light bg-light">
          <div className="form-inline ">
            <SearchBox search={this.state.searchText} callbackP={(newState) => this.onChildChanged(newState)} />
            {/*When this  button is clicked it will run the clicked function*/}
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.clicked}>Get youtube videos</button>
          </div>
        </nav>


        {/*Renders the Mainvideo which will be equal to the selected video array*/}
        <div className="row w-100 p-3">
          <MainVideo video={this.state.selectedVideo} />
          {/*Renders the VideoList which will display all videos in the videos array*/}
          <VideoList video={this.state.videos}
            onSelectVideo={selectedVideo => this.setState({ selectedVideo })} />
        </div>



        {/*
          this.state.videos.map((url, i) => {
            console.log(url);

            var frame = <div key={i} className="video-detail col-md-8">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}>
                </iframe>
              </div>
              <div className="details">

               
              </div>
            </div>
            return frame
          })

          {this.frame}
        */}







      </div>
    );
  }
}


export default App;
