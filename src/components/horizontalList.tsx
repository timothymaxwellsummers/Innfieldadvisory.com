import React, { Component, RefObject } from "react";
import Slider from "react-slick";
import listStyle from "../styles/list.module.css";
import { Stack } from '@mui/joy';
import { ArrowBack, ArrowForward } from '@mui/icons-material';



interface SliderSettings {
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    arrows: boolean;
    responsive?: Array<{breakpoint: number, settings: Partial<SliderSettings>}>;
}

export default class PreviousNextMethods extends Component {
    private slider: RefObject<Slider>;

    constructor(props: {}) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.slider = React.createRef();
    }

    next() {
        if (this.slider && this.slider.current) {
            this.slider.current.slickNext();
        }
    }

    previous() {
        if (this.slider && this.slider.current) {
            this.slider.current.slickPrev();
        }
    }

    render() {
        const settings: SliderSettings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,  // breakpoint from window width, you can adjust this value
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false
                    }
                }
            ]
        };

        return (
            <div>
                <Slider ref={this.slider} {...settings}>
                    <div key={1} className={listStyle.centeredSlideContent}>
                        <Stack direction="column" alignItems={"center"} justifyContent={"center"} minHeight={"100px"}>
                            <img src="/LSE_Logo.svg.png" alt="I F A Logo" style={{ width: "50px", opacity:"0.7" }} />
                        </Stack>
                    </div>
                    <div key={2} className={listStyle.centeredSlideContent}>
                        <Stack direction="column" alignItems={"center"} justifyContent={"center"} minHeight={"100px"}>
                            <img src="/UNCDF_logo.svg.png" alt="I F A Logo" style={{ width: "60px", opacity:"0.6" }} />
                        </Stack>
                    </div>
                    <div key={3} className={listStyle.centeredSlideContent}>
                        <Stack direction="column" alignItems={"center"} justifyContent={"center"} minHeight={"100px"}>
                            <img src="/OHCHRlogo.jpg" alt="I F A Logo" style={{ width: "100px", opacity:"0.6" }} />
                        </Stack>
                    </div>
                    <div key={4} className={listStyle.centeredSlideContent}>
                        <Stack direction="column" alignItems={"center"} justifyContent={"center"} minHeight={"100px"}>
                            <img src="/unhabitat.png" alt="I F A Logo" style={{ width: "60px" }} />
                        </Stack>
                    </div>
                    <div key={5} className={listStyle.centeredSlideContent}>
                        <Stack direction="column" alignItems={"center"} justifyContent={"center"} minHeight={"100px"}>
                            <img src="/logo_ch_print.png" alt="I F A Logo" style={{ width: "130px", opacity:"0.7"  }} />
                        </Stack>
                    </div>
                    <div key={6} className={listStyle.centeredSlideContent}>
                        <Stack direction="column" alignItems={"center"} justifyContent={"center"} minHeight={"100px"}>
                            <img src="/Hrw_logo.svg.png" alt="I F A Logo" style={{ width: "60px", opacity:"0.7" }} />
                        </Stack>
                    </div>
                    <div key={7} className={listStyle.centeredSlideContent}>
                        <Stack direction="column" alignItems={"center"} justifyContent={"center"} minHeight={"100px"}>
                            <img src="/giz logo.jpeg" alt="I F A Logo" style={{ width: "70px", opacity:"0.7" }} />
                        </Stack>
                    </div>
                    <div key={8} className={listStyle.centeredSlideContent}>
                        <Stack direction="column" alignItems={"center"} justifyContent={"center"} minHeight={"100px"}>
                            <img src="/EY_logo_2019.svg.png" alt="I F A Logo" style={{ width: "50px", opacity:"0.5" }} />
                        </Stack>
                    </div>
                    <div key={9} className={listStyle.centeredSlideContent}>
                        <Stack direction="column" alignItems={"center"} justifyContent={"center"} minHeight={"100px"}>
                            <img src="/Acc_Logo_Black_Purple_RGB.png" alt="I F A Logo" style={{ width: "100px", opacity:"0.5" }} />
                        </Stack>
                    </div>
                </Slider>
                <Stack direction={"row"} alignItems={"center"}>
                    <div style={{flexGrow:"1"}} />
                    <ArrowBack onClick={this.previous} />
                    <ArrowForward onClick={this.next} />
                </Stack>
            </div>
        );
    }
}
