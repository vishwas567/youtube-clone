const info = [
    {
        id : Math.random,
        video : {
            page : "https://www.youtube.com/watch?v=n2RNcPRtAiY",
            thumbnail : "thumbnails/thumbnail-1.webp",
            videoTime : '14:20',
            videoTitle :  "Talking Tech and AI with Google CEO Sundar Pichai!",
            VideoStats : "3.4M views · 6 months ago"
        },
        channel : {
            channelProfilePicture : "channel-DP/channel-1.jpeg",
            videoAuthor : "Marques Brownlee",
            subscribers : "15M subscribers"
        }
    },
    {
        id : Math.random,
        video : {
            page : "https://www.youtube.com/watch?v=mP0RAo9SKZk",
            thumbnail : "thumbnails/thumbnail-2.webp",
            videoTime : '8:22',
            videoTitle :  "Try Not To Laugh Challenge #9",
            VideoStats : "19M views · 4 years ago"
        },
        channel : {
            channelProfilePicture : "channel-DP/channel-2.jpeg",
            videoAuthor : "Markiplier",
            subscribers : "12M subscribers"
        }
    },
    {
        id : Math.random,
        video : {
            page : "https://www.youtube.com/watch?v=FgjPQQeTh1w",
            thumbnail : "thumbnails/thumbnail-3.webp",
            videoTime : '9:13',
            videoTitle :  "Crazy Tik Toks Taken Moments Before DISASTER",
            VideoStats : "12M views · 1 year ago"
        },
        channel : {
            channelProfilePicture : "channel-DP/channel-3.jpeg",
            videoAuthor : "SSSniperWolf",
            subscribers : "10.5M subscribers"
        }
    },
    {
        id : Math.random,
        video : {
            page : "https://www.youtube.com/watch?v=094y1Z2wpJg",
            thumbnail : "thumbnails/thumbnail-4.webp",
            videoTime : '22:09',
            videoTitle :  "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
            VideoStats : "18M views · 4 months ago"
        },
        channel : {
            channelProfilePicture : "channel-DP/channel-4.jpeg",
            videoAuthor : "Veritasium",
            subscribers : "22M subscribers"
        }
    },
    {
        id : Math.random,
        video : {
            page : "https://www.youtube.com/watch?v=86CQq3pKSUw",
            thumbnail : "thumbnails/thumbnail-5.webp",
            videoTime : '11:17',
            videoTitle :  "Kadane's Algorithm to Maximum Sum Subarray Problem",
            VideoStats : "1519K views · 5 years ago"
        },
        channel : {
            channelProfilePicture : "channel-DP/channel-5.jpeg",
            videoAuthor : "CS Dojo",
            subscribers : "8M subscribers"
        }
    },
    {
        id : Math.random,
        video : {
            page : "https://www.youtube.com/watch?v=yXWw0_UfSFg",
            thumbnail : "thumbnails/thumbnail-6.webp",
            videoTime : '19:59',
            videoTitle :  "Anything You Can Fit In The Circle I'll Pay For ",
            VideoStats : "141M views · 1 year ago"
        },
        channel : {
            channelProfilePicture : "channel-DP/channel-6.jpeg",
            videoAuthor : "MrBeast",
            subscribers : "42M subscribers"
        }
    },
    {
        id : Math.random,
        video : {
            page : "https://www.youtube.com/watch?v=fNVa1qMbF9Y",
            thumbnail : "thumbnails/thumbnail-7.webp",
            videoTime : '10:13',
            videoTitle :  "Why Planes Don't Fly Over Tibet",
            VideoStats : "16.6M views · 1 year ago"
        },
        channel : {
            channelProfilePicture : "channel-DP/channel-7.jpeg",
            videoAuthor : "RealLifeLore",
            subscribers : "7.8M subscribers"
        }
    },
    {
        id : Math.random,
        video : {
            page : "https://www.youtube.com/watch?v=lFm4EM1julsY",
            thumbnail : "thumbnails/thumbnail-8.webp",
            videoTime : '7:12',
            videoTitle :  "Inside The World's Biggest Passenger Plane",
            VideoStats : "3.7M views · 10 months ago"
        },
        channel : {
            channelProfilePicture : "channel-DP/channel-8.jpeg",
            videoAuthor : "Tech Vision",
            subscribers : "129K subscribers"
        }
    },
    {
        id : Math.random,
        video : {
            page : "https://www.youtube.com/watch?v=ixmxOlcrlUc",
            thumbnail : "thumbnails/thumbnail-9.webp",
            videoTime : '13:17',
            videoTitle :  "The SECRET to Super Human STRENGTH",
            VideoStats : "20M views · 3 year ago"
        },
        channel : {
            channelProfilePicture : "channel-DP/channel-9.jpeg",
            videoAuthor : "ThenX",
            subscribers : "3.4M subscribers"
        }
    },
    {
        id : Math.random,
        video : {
            page : "https://www.youtube.com/watch?v=R2vXbFp5C9o",
            thumbnail : "thumbnails/thumbnail-10.webp",
            videoTime : '7:53',
            videoTitle :  "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
            VideoStats : "14M views · 1 year ago"
        },
        channel : {
            channelProfilePicture : "channel-DP/channel-10.jpeg",
            videoAuthor : "Business Insider",
            subscribers : "2M subscribers"
        }
    },
    {
        id : Math.random,
        video : {
            page : "https://www.youtube.com/watch?v=0nZuYyXET3s",
            thumbnail : "thumbnails/thumbnail-11.webp",
            videoTime : '4:10',
            videoTitle :  "Dubai's Crazy Underwater Train and Other Things #Only in Dubai",
            VideoStats : "3M views · 1 year ago"
        },
        channel : {
            channelProfilePicture : "channel-DP/channel-11.jpeg",
            videoAuthor : "Destination Tips",
            subscribers : "1.9M subscribers"
        }
    },
    {
        id : Math.random,
        video : {
            page : "https://www.youtube.com/watch?v=9iMGFqMmUFs",
            thumbnail : "thumbnails/thumbnail-12.webp",
            videoTime : '4:51',
            videoTitle :  "What would happen if you didn’t drink water? - Mia Nacamulli",
            VideoStats : "12M views · 5 years ago"
        },
        channel : {
            channelProfilePicture : "channel-DP/channel-12.jpeg",
            videoAuthor : "TED-Ed",
            subscribers : "12.9M subscribers"
        }
    }
];

let loadHTML = '';
info.forEach((content) => {

    const HTML = `
        <div class="video-preview">
            <div class="thumbnail-row">
                <a href="${content.video.page}">
                    <img class="thumbnail" src="${content.video.thumbnail}">
                </a>
                <div class="video-time">${content.video.videoTime}</div>
            </div>
            <div class="video-info-grid">
                <div class="channel-dp">
                    <img class="profile" src="${content.channel.channelProfilePicture}">
                    <div class="channel-tooltip">
                        <img class="profile-tooltip" src="${content.channel.channelProfilePicture}">
                        <div>
                            <div class="channel-tooltip-author">${content.channel.videoAuthor}</div>
                            <div class="channel-tooltip-subscribers">${content.channel.subscribers}</div>
                        </div>
                    </div>
                </div>
                <div class="video-info">
                    <p class="video-title">
                        ${content.video.videoTitle}
                    </p>
                    <p class="video-author">
                        ${content.channel.videoAuthor}
                    </p>
                    <p class="video-stats">
                        ${content.video.VideoStats}
                    </p>
                </div>
                
                
            </div>  
        </div>
    `;
    loadHTML += HTML;
    document.querySelector('.video-grid').innerHTML = loadHTML;
    //console.log(loadHTML)
})