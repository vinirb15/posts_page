import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './styles.css'

export default function Footer() {

  return (
    <footer className="footer">
    <div className="footer-social">
      <a href="https://www.linkedin.com/in/vbueno15">
        <FaLinkedin size="40"  color="#fff"/>
      </a>
      <a href="https://github.com/vinirb15">
        <FaGithub size="40"  color="#fff"/>
      </a>  
    </div>
    <p className="footer-text">Desafio Full Stack</p>
  </footer>

  )
}
