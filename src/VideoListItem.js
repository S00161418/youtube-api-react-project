import React from 'react'

/*gets the properties of the video and the onselectvideo function */
const VideoListItem = ({ video, onSelectVideo }) => {

	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		/*when a video is selected from this list it will run the function to display the video in the MainVideo */
		<li onClick={() => onSelectVideo(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					{/*Displays the thumbnail and title of video in the list*/}
					<img className="media-object" src={imageUrl} alt={video.snippet.title} />
				</div>

				<div className="media-body">
					<div className="media-heading">
						{video.snippet.title}
					</div>
				</div>
			</div>
		</li>);
};

export default VideoListItem