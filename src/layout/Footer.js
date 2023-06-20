import React from "react";
import '../styles/footer.css';
import {Icon} from 'antd';

function Footer() {
    return (
        <div className={'footer'}>
            <p>@copyright 2023, published by Tunki1201</p>
            <div>
                {/* TODO: change the github.com to my address */}
                <a href={'https://github.com/Tunki1201/Dashboard'} target={'_blank'} rel="noreferrer">
                    <img height={32} alt={'skill'} src="https://skillicons.dev/icons?i=github" />
                </a>
                <a href={'https://www.linkedin.com/in/Alan-Guerrero-171227277'} target={'_blank'} rel="noreferrer">
                    <img height={32} alt={'skill'} src="https://skillicons.dev/icons?i=linkedin"/>
                </a>
                <a href={'https://discord.com/channels/1118555672339026051/1118555673274368073'} target={'_blank'} rel="noreferrer">
                    <img height={32} alt={'skill'} src="https://skillicons.dev/icons?i=discord"/>
                </a>
            </div>

            <div id="go-top">
                <a className="smoothscroll" title="Back to Top" href="#home">
                    <i className="ArrowUpOutlined" />
                </a>
            </div>
        </div>
    )
}

export default Footer;