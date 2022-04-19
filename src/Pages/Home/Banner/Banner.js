import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpeg';
import banner2 from '../../../images/banner/banner2.jpeg';
import banner3 from '../../../images/banner/banner3.jpeg';

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel className='w-100' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className='text-primary'>
                    <h3>Gum Problems</h3>
                    <p>You may not consider a gap between the front teeth a problem at all. Famous people who sport the look include singer Madonna, actress Anna Paquin, model Lauren Hutton, and football player turned TV co-host Michael Strahan. If you want to correct it, though, your options include orthodontics to move teeth closer together and cosmetic solutions like veneers or bonding.

                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='text-primary'>
                    <h3>No Room to Floss</h3>
                    <p>No matter how tight the fit, there should always be room for floss between your teeth. If not, you may need to switch to a thinner floss or a waxed one. You can also try a different kind of tool, such as a looped flosser or a dental pick. Experiment until you find a product that works for you, and then use it every day. Flossing is a must for good dental health.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className='text-primary'>
                    <h3>Wisdom Teeth Problems</h3>
                    <p>If your dentist says your wisdom teeth, or third molars, came in problem-free, count yourself lucky. Most people -- 90% -- have at least one wisdom tooth that’s impacted, or not able to fully grow in. Problems with your wisdom teeth can cause cavities, damage to neighboring teeth, and gum disease. Wisdom teeth generally come in between the ages of 17 and 25. Your dentist should track their progress. If they become a problem, you may need to get them removed.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;