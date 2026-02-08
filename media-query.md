@media (min-width: 1020px) {
   





    .mid-box > details > .last-detail::after {
        content: "";
        display: none;
        border-bottom: none;
        opacity: 0;
        margin: 0.1rem 0;
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
