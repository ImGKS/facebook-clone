import React from 'react';
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
        <Story
            image="https://i.pinimg.com/736x/df/ab/99/dfab9961c596d5b0ecfebde85381419a.jpg"
            profileSrc="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"
            title="Ananya"
         />
        <Story
            image="https://cdn.statusqueen.com/dpimages/thumbnail/dp_images_8-1279.jpg"
            profileSrc="https://i.pinimg.com/564x/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg"
            title="Sarthak"
         />
        <Story
            image="https://i0.wp.com/www.kahanihindi.com/wp-content/uploads/2021/06/Girls-profile-picture-8.jpg?resize=450%2C400&ssl=1"
            profileSrc="https://c4.wallpaperflare.com/wallpaper/266/736/881/silhouette-sunlight-profile-hands-wallpaper-thumb.jpg"
            title="Komal"
         />
        <Story
            image="https://cdn.statusqueen.com/dpimages/thumbnail/Alone_boy-1498.jpg"
            profileSrc="https://blogginggyan.com/wp-content/uploads/2017/06/love-dp-for-boy.jpg"
            title="Viswas"
         />
        <Story
            image="https://s2.dmcdn.net/v/O6z_t1RJ8mWFm-KDH/x720"
            profileSrc="https://i.pinimg.com/736x/85/3d/7c/853d7c4d38eb8923e88b9c9980b42a26.jpg"
            title="Suraj"
         />
        <Story
            image="https://1fid.com/wp-content/uploads/2022/07/cute-profile-picture-1024x1024.jpg"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLlKU7MJmN1bQFlyMRZmIKSy-DP82X-Ahjg&usqp=CAU"
            title="Payal"
         />
    </div>
  )
}

export default StoryReel