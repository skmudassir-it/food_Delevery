import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../styles/reels.css'
import ReelFeed from '../../components/ReelFeed'

const Home = () => {
    const [videos, setVideos] = useState([])
    // Autoplay behavior is handled inside ReelFeed

    useEffect(() => {
        // Changed port from 3000 to 4000 to match backend
        axios.get("http://localhost:4000/api/food", { withCredentials: true })
            .then(response => {

                console.log(response.data);

                setVideos(response.data.foodItems)
            })
            .catch(() => { /* noop: optionally handle error */ })
    }, [])

    // Using local refs within ReelFeed; keeping map here for dependency parity if needed

    async function likeVideo(item) {
        // Changed port from 3000 to 4000 to match backend
        const response = await axios.post("http://localhost:4000/api/food/like", { foodId: item._id }, { withCredentials: true })

        if (response.data.like) {
            console.log("Video liked");
            setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, likeCount: v.likeCount + 1 } : v))
        } else {
            console.log("Video unliked");
            setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, likeCount: v.likeCount - 1 } : v))
        }

    }

    async function saveVideo(item) {
        // Changed port from 3000 to 4000 to match backend
        const response = await axios.post("http://localhost:4000/api/food/save", { foodId: item._id }, { withCredentials: true })

        if (response.data.save) {
            setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, savesCount: v.savesCount + 1 } : v))
        } else {
            setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, savesCount: v.savesCount - 1 } : v))
        }
    }

    return (
        <ReelFeed
            items={videos}
            onLike={likeVideo}
            onSave={saveVideo}
            emptyMessage="No videos available."
        />
    )
}

export default Home
