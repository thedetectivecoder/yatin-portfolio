import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights} from './FooterElements'

export const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
      };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    {/* <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">Option 1</FooterLink>
                                <FooterLink to="/signin">Option 1</FooterLink>
                                <FooterLink to="/signin">Option 1</FooterLink>
                                <FooterLink to="/signin">Option 1</FooterLink>
                                <FooterLink to="/signin">Option 1</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">Option 1</FooterLink>
                                <FooterLink to="/signin">Option 1</FooterLink>
                                <FooterLink to="/signin">Option 1</FooterLink>
                                <FooterLink to="/signin">Option 1</FooterLink>
                                <FooterLink to="/signin">Option 1</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">Option 1</FooterLink>
                                <FooterLink to="/signin">Option 1</FooterLink>
                                <FooterLink to="/signin">Option 1</FooterLink>
                                <FooterLink to="/signin">Option 1</FooterLink>
                                <FooterLink to="/signin">Option 1</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">Option 1</FooterLink>
                                <FooterLink to="/signin">Option 1</FooterLink>
                                <FooterLink to="/signin">Option 1</FooterLink>
                                <FooterLink to="/signin">Option 1</FooterLink>
                                <FooterLink to="/signin">Option 1</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper> */}
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            F. A. C.
                        </SocialLogo>
                        <WebsiteRights> F. A. C. © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights> 
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

