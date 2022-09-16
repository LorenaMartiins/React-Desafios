import React from 'react';
import './StoryReel.css'

// component
import Story from './Story/Story';

// images (profile)
import pessoa1 from '../../../img/story/1.jpg';
import pessoa2 from '../../../img/story/2.jpg';
import pessoa3 from '../../../img/story/3.webp';
import pessoa4 from '../../../img/story/4.jpg';
import pessoa5 from '../../../img/story/5.webp';

// images (story)
import pessoa_1 from '../../../img/story/storyImage/1.jpg'
import pessoa_2 from '../../../img/story/storyImage/2.jpg'
import pessoa_3 from '../../../img/story/storyImage/3.png'
import pessoa_4 from '../../../img/story/storyImage/4.jpg'
import pessoa_5 from '../../../img/story/storyImage/5.jpg'


const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story 
                image={pessoa_1}
                profileSrc={pessoa1}
                title="Chris Evans"
            />
            <Story 
                image={pessoa_2}
                profileSrc={pessoa2}
                title="Gal Gadot"
            />
            <Story 
                image={pessoa_3}
                profileSrc={pessoa3}
                title="Robert Downey Jr."
            />
            <Story 
                image={pessoa_4}
                profileSrc={pessoa4}
                title="Tom Holland"
            />
            <Story 
                image={pessoa_5}
                profileSrc={pessoa5}
                title="Zendaya"
            />
        </div>
    )
}

export default StoryReel;
