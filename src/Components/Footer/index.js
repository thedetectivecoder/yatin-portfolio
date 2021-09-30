import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights, IconSupp, IconSuppLink} from './FooterElements'

export const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
      };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Y.B.
                        </SocialLogo>
                        <WebsiteRights> YATIN BURHMI © {new Date().getFullYear()}
                        </WebsiteRights> 
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/yatinburhmi/" target="_blank"
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
                            <SocialIconLink href="https://www.linkedin.com/in/yatin-burhmi-122612149/" target="_blank"
                            aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
                <IconSupp>
                Icons made by&nbsp;
                <IconSuppLink href="https://www.freepik.com" title="Freepik">
                 Freepik
                </IconSuppLink> from
                <IconSuppLink href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</IconSuppLink>
                </IconSupp>
            </FooterWrap>
        </FooterContainer>
    )
}

