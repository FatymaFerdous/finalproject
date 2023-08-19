import React from 'react'
import png1 from "../../assets/images/mail.png";
import png2 from "../../assets/images/fb.png";
import png3 from "../../assets/images/wa.png";
import png4 from "../../assets/images/ig.png";

function Contact() {
    return (
        <>
            <div className="our-team">
                <div className="container">
                    <div className="section-heading text-center wow">
                        
                        <h3 className="GadgetsHead">Contact Us Through</h3>
                        <p>
                            Conveniently customize proactive web services for leveraged interfaces without Globally
                        </p>
                    </div>
                    <div className="section-wrapper">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="team-content text-center wow">
                                    <div className="team-thumb">
                                        <img src={png1} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h4>Email</h4>
                                      <a href="mailto:fatimafirdous003@gmail.com">fatimafirdous003@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="team-content text-center wow">
                                    <div className="team-thumb">
                                        <img src={png2} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h4>Facebook</h4>
                                        <a href="https://www.facebook.com/profile.php?id=100093100741716&mibextid=b06tZ0">https://rb.gy/11xsm</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="team-content text-center wow">
                                    <div className="team-thumb">
                                        <img src={png3} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h4>WhatsApp</h4>
                                        <a href="https://wa.me/03123456123">03123456123</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="team-content text-center wow">
                                    <div className="team-thumb">
                                        <img src={png4} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h4>Instagram</h4>
                                        <a href="https://www.instagram.com/flash_solutionss/?igshid=MzRlODBiNWFlZA%3D%3D">https://rb.gy/iezrq</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact