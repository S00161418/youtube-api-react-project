import React from 'react';
import VideoListItem from './VideoListItem'

const VideoList = (props) => {

	/*This maps the videos in the videos array to a different list item in the VideoListItem component */
	const videoItems = props.video.map((video) => {
		return (
			<VideoListItem
				onSelectVideo={props.onSelectVideo}
				video={video}
				key={video.etag} />
		);
	});
	return (
		<ul className="col-md-4   list-group">
			{videoItems}
		</ul>
	);
}

export default VideoList;