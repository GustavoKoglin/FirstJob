import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


export default function Index() {
  return(
    <> 
      <body>
        <header>
          <nav>
            <a class="logo" href="/">First Job</a>
            <div class="mobile-menu">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line3"></div>
            </div>
            <ul class="nav-list">
              <li><Link to="/">Para Candidatos</Link></li>
              <li><Link to="/">Para Empresas</Link></li>
              <li><Link to="/">Para Instituições de Ensino</Link></li>
              <li><Link to="/">Sobre</Link></li>
              <li><Link to="/">Contato</Link></li>
              <li><Link to="/">Blog</Link></li>
            </ul>
          </nav>
        </header>
        <main></main>
        <script src="/mobile-navbar.js"></script>
      </body>
      <Outlet/>
    </>
  )
}  