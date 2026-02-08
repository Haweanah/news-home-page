@media (min-width: 1020px) {
    body {
        padding: 3rem 6rem;
    }

    .overlay, 
    .menu-btn, 
    .close-btn {
        display: none;
    }

    nav > h1 {
        font-size: 5rem;
    }

    .mobile-menu {
        position: static;
        transform: none;
        width: auto;
        height: auto;
        padding: 0;
        background: transparent;
        -webkit-transform: none;
        -moz-transform: none;
        -ms-transform: none;
        -o-transform: none;
}
     .menu {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        margin: 0;
        font-size: 8px;
    }

    .menu a {
        color: hsl(233, 8%, 79%);
    }

    nav {
        display: flex;
        justify-content: space-between;
    }





    .top-box > .web3-mobile {
        display: none;
    }


.top-box > .web3-desktop {
    display: block;
}

    main {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: auto auto auto;
      gap: 2rem;
  }
    .top-box {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
    
      .top-box > .web3-desktop {
        grid-column: 1 / -1;
      }
    
      .top-box > h2 {
        grid-column: 1 / 2;
      }
    
      .top-box > p {
        grid-column: 2 / 3;
      }
    
      .top-box > button {
        grid-column: 2 / 3;
      }

      .mid-box {
        grid-area: sidebar;
        margin-top: 0;
    }
    
    .bottom-box {
        grid-area: bottom;
        flex-direction: row;
        gap: 2rem;
    }
    
    }
