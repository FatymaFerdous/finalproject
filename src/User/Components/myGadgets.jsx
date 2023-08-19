import React from 'react'
import img1 from "../../assets/images/number-plate.png";
import img2 from "../../assets/images/111.png";
import img3 from "../../assets/images/222.png";
import img4 from "../../assets/images/333.png";
import img5 from "../../assets/images/444.png";
import img6 from "../../assets/images/interior.jpeg"
import img7 from "../../assets/images/interior2.jpeg"
import Carousel from "react-bootstrap/Carousel";

export default function myGadgets() {
    return (
        <>
            <div className="text-center container-fluid">
                <h1 className="GadgetsHead" data-aos="flip-up">
                    GADGETS
                </h1>
                <img
                    src={img1}
                    alt=""
                    className="mx-auto"
                    height="150px"
                    width="150px"
                    data-aos="zoom-in-up"
                />
            </div>
            <div className="container-fluid">
                {/* 1 */}
                <div className="row featurette d-flex justify-content-center align-items-center my-5">
                    <div className="col-md-7 px-5 " data-aos="zoom-out-right">
                        <h2 className="featurette-heading fw-normal lh-1">
                            HOTO Flashlight Lite <span className="badge">New</span>
                        </h2>
                        <p className="lead">
                            This compact flashlight became an instant favorite of ours by
                            offering an impossibly elegant aluminum build, incredible
                            versatility, excellent battery life, and a USB-C connector for
                            recharging it. Thanks to a bundled light diffuser, the gadget can
                            quickly transform from a high-powered flashlight with stellar zoom
                            capabilities to a lamp for use while camping or on the road. <br />
                            We like the flashlight's integrated hook for attaching it to items.
                            its intuitive button controls include an SOS button for use during
                            emergencies.
                        </p>
                    </div>
                    <div className="col-md-5" data-aos="zoom-out-right">
                        <img
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width={500}
                            height={500}
                            src={img3}
                            alt=""
                        />
                    </div>
                </div>
                {/* 2 */}
                <div className="row featurette d-flex justify-content-center align-items-center my-5">
                    <div className="col-md-7 px-5 order-md-2" data-aos="zoom-in-down">
                        <h2 className="featurette-heading fw-normal lh-1">
                            Belkin MagSafe 2-in-1 Wireless Charger
                        </h2>
                        <p className="lead">
                            This 2-in-1 wireless charger by Belkin is a must-have MagSafe
                            accessory for new iPhone 12 and iPhone 13 owners. It can
                            simultaneously charge an iPhone and a set of AirPods with a wireless
                            charging case. <br />
                            Available in black or white, the accessory has a minimalist design
                            and exceptional build quality. Belkin backs it with a 2-year
                            warranty. here.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1" data-aos="zoom-in-down">
                        <img
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width={500}
                            height={500}
                            src={img2}
                            alt=""
                        />
                    </div>
                </div>
                {/* 3 */}
                <div className="row featurette d-flex justify-content-center align-items-center my-5">
                    <div className="col-md-7 px-5" data-aos="zoom-out-right">
                        <h2 className="featurette-heading fw-normal lh-1">
                            Anker 737 Power Bank
                        </h2>
                        <p className="lead">
                            Anker's 737 Power Bank can charge your laptop via a fast USB-C
                            connector with a maximum power output of 140 watts. It has a battery
                            pack with ample capacity, and rather impressively, a color screen to
                            help you keep tabs on the charging process. The accessory rocks a
                            pair of USB-C ports and a USB-A connector, so you can simultaneously
                            charge up to three devices.
                        </p>
                    </div>
                    <div className="col-md-5" data-aos="zoom-out-right">
                        <img
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width={500}
                            height={500}
                            src={img5}
                            alt=""
                        />
                    </div>
                </div>
                {/* 4 */}
                <div className="row featurette d-flex justify-content-center align-items-center my-5 ">
                    <div className="col-md-7 px-5 order-md-2" data-aos="zoom-in-down">
                        <h2 className="featurette-heading fw-normal lh-1">
                            Apple AirTag Tracker
                        </h2>
                        <p className="lead">
                            Apple's affordable AirTag tracker is a must-have tech gadget for any
                            iPhone owner because it can seamlessly keep tabs on just about
                            anything you attach it to. <br />
                            When out of your iPhone's range, the AirTag will update its location
                            when it comes in proximity to a device that's part of Apple's Find
                            My network (there are almost a billion of them). The AirTag is
                            water- and dust-resistant with an IP67 rating, and its replaceable
                            battery can last up to a year.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1" data-aos="zoom-in-down">
                        <img
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width={500}
                            height={500}
                            src={img4}
                            alt=""
                        />
                    </div>
                </div>

            </div>
            <Carousel className='beforefoot'>
            <Carousel.Item>
            <img className="slide-content" src={img6} alt="" />
          </Carousel.Item>
            <Carousel.Item>
            <img className="slide-content" src={img7} alt="" />
          </Carousel.Item>
        </Carousel>

        </>
    )
}
