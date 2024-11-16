import React from 'react'
import InstaLogo from './images/1000_F_298315933_FdK3b8wCs7EhYWlJqieSvmSgTOr9MSfR(2).png'
import GoogleLogo from './images/Google__G__logo.svg.png'
import GithubLogoLight from "./images/GitHub-Mark-ea2971cee799 (2).png"
import LinkdinLogo from "./images/sm_5b321c9756fc6.png"
import GithubLogoDark from './images/github-logo-git-hub-icon-with-text-on-white-and-black-background-free-vector-Dark.jpg'
import './SocialMediaStyle.css';
import leetcode from './images/152531278-5e01909d-0c2e-412a-8acc-4a06863c244d.png'
function SocialMedia() {
  return (
    <>
       <div className="icons">
        <a href="https://www.linkedin.com/in/adithya-sakthimani-0459a7281/"
        target='_blank' className={`linkdin-Light`}>
        <img src={LinkdinLogo} alt = 'LINKDINLogo'
          className='linkdin-logo'/>
        </a>
        <a href="https://leetcode.com/u/Midnight_Gamer/"
        target='_blank' className={`leetcode-Light`}>
        <img src={leetcode} alt = 'LINKDINLogo'
          className='linkdin-logo'/>
        </a>
        <a href="https://github.com/AdithyaSakthimani"
        target='_blank'
        className={`github-Light`}>
         <img src={GithubLogoLight} alt = 'LINKDINLogo'
          className='linkdin-logo'/>
        </a>
        <a href="https://www.instagram.com/adithya_sakthimani/profilecard/?igsh=b3Vhc3pna25oY3hk"
        target='_blank'
        className={`instagram-Light`}>
          <img src={InstaLogo} alt = 'InstaLogo'
          className='insta-logo'/></a>
        <a href="mailto:adithyasakthimani@gmail.com"
        target='_blank'
        className={`gmail-Light`}>
          <img src={GoogleLogo} alt = 'GoogleLogo'
          className='google-logo'/>
        </a>
        </div>
    </>
  )
}

export default SocialMedia