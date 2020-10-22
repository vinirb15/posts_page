import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './styles.css'

export default function Footer() {

  return (
    <footer className="footer">
    <div className="footer-social">
      <a href="">
        <FaLinkedin size="40"  color="#fff"/>
      </a>
      <a href="">
        <FaGithub size="40"  color="#fff"/>
      </a>  
    </div>
    <p className="footer-text">Made with by  Speak up Tech</p>
  </footer>

  )
}
