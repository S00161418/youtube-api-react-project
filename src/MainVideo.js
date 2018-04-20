import React from 'react'

/* This takes in the video property from the App component*/
const MainVideo = ({ video }) => {
	/*If the video hasnt loaded it will display this <div> */
	if (!video) {
		return <div>Waiting for Videos to Load </div>
	}
	/* gets the videoID for the url to the video which will display*/
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">

			<div className="embed-responsive embed-responsive-16by9">
				{/*Creates an Iframe and makes the source equal to the url above to display the video on the page*/}
				<iframe title="Youtube" className="embed-responsive-item" src={url}></iframe>
			</div>
			{/*get and displays the title and description of the video*/}
			<div className="details">

				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default MainVideo;