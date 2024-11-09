:root{
    --PrimaryColor: hsl(26,93%,50%);
    --HoverColor: hsl(26,90%,42%);
    --WhiteColor: hsl(0,0%,100%);
    --blackColor: hsl(0,0%,18%);
    --textColor: hsl(240,1%,48%);
    --WhiteColorDeam: hsl(0,0%,93%);
    --greyBg: hsl(0,0%,96%);
    --greyText: rgb(190,190,190);
    --inputColor: hsl(330,12%,97%);
}

.navBarSection{
    .header{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: transparent;
        width: 100%;
        padding: 1 rem;
        z-index: 1000;

        .logoDiv{
            .logo{
                color: var(--PrimaryColor);
                font-weight: 500;
                cursor: pointer;
                align-items: center;
                justify-content: center;

                .icon{
                    color: var(--WhiteColor);
                    font-size: 25px;
                }
            }
        }
        @media screen and (max-width: 768px) {

            .navBar{
                background: var(--greyBg);
                position: absolute;
                height: max-content;
                padding: 1rem;
                width: 100%;
                top: 0;
                left :0;
                box-shadow: 0 2px 4px rgba(209,209,209,0.904);
                transition: .5s ease;
                z-index: 1000;


                .navLists{
                    flex-direction: column;
                    justify-content: center;
                    width:100%;
                    margin: auto;

                    .navItem{
                        padding: 1rem 0;
                
                        .navLink{
                            color: var(--textColor);
                            font-size: .9rem;
                            font-weight: 600;
                            &:hover{
                                color: var(--PrimaryColor);
                            }
                        }


                    }


                    .headerBtns{
                        flex-direction: column;
                        .btn{
                            margin-top: 1rem;
                            a{
                                font-weight: 600;
                                &:hover{
                                    color: var(--WhiteColor);
                                }
                            }
                        }

                        .loginBtn{
                            background: none;
                            border: 1px solid var(--PrimaryColor);
                            a{
                                color:var(--PrimaryColor);
                            }
                            &:hover{
                                background:var(--HoverColor);
                                a{
                                    color : var(--WhiteColor);
                                }
                            }

                        }
                    }
                }
                .closeNavbar{
                    position:absolute;
                    top: 1rem;
                    right:1.5 rem;
                    color:var(--PrimaryColor);
                    &:hover .icon{
                        color: var(--HoverColor);
                    }

                }
            }

            .activeNavbar{
                left:0;
            }
        }
            
        
    }
}
