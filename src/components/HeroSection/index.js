import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements';
import {Button} from '../ButtonElement';

const HeroSection = () => {
const [hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

    return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>
                Search for your relatives and help people in your neighbourhood.
            </HeroH1>
            <HeroP>
                We hope our website will come in handy.
            </HeroP>
            <HeroBtnWrapper>
                <Button to='discover'
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary = 'true'
                dark = 'true'
                >
                    Check our activities {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
    );
};

export default HeroSection;