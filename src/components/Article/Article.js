import React, { useState } from 'react';

import "./Article.scss";

import Image from '../Image/Image';

import drawersImage from '../../images/drawers.jpg';
import avatarPerson from '../../images/avatar-michelle.jpg';
import shareIconImg from '../../images/icon-share.svg';

import fbIcon from '../../images/icon-facebook.svg';
import twIcon from '../../images/icon-twitter.svg';
import pintIcon from '../../images/icon-pinterest.svg';


function Article(props) {
    const [shareIcon, setShareIcon] = useState(false)

    const showShareIconHandler = () => {
        setShareIcon(!shareIcon)
    }


    return (
        <div className='Article'>
            <div className="Article-inner">
                <Image srcImage={drawersImage} alt="" width='100%' className='ImageLeftside' />
                <div className="Article-content">
                    <header>
                        <h2>
                            Shift the overall look and feel by
                            adding these wonderful touches to 
                            furniture in your home
                        </h2>
                    </header>
                    <p>
                        Ever been in a room and felt like something was missing?
                        Perhaps it felt slightly bare and uninviting I've got some
                        simple tips to help you make any room feel complete.
                    </p>
                    <div className="Article-footer">
                        <div className="Article-profile-info">
                            <Image srcImage={avatarPerson} alt="" className='img-circle'  />
                            <div className="Article-profile-desc">
                                <h5>Michelle Appleton</h5>
                                <p>28 Jun 2020</p>
                            </div>
                        </div>
                        <div className="Article-sharer">
                            <div className="sharer-icon-container">
                                <div className={`sharer-float ${shareIcon ? 'visible' : 'hidden'}`}>
                                    <div className="arrow_box"></div>
                                    <p>share</p>
                                    <div className="social-icons">
                                        <Image srcImage={fbIcon} alt="" />
                                        <Image srcImage={twIcon} alt="" />
                                        <Image srcImage={pintIcon} alt="" />
                                    </div>
                                </div>
                                <Image srcImage={shareIconImg} alt="" className='img-share' onClick={showShareIconHandler} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;
