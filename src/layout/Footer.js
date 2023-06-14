import React from "react";
import '../styles/footer.css';
import {Icon} from 'antd';

function Footer() {
    return (
        <div className={'footer'}>
            <p>@copyright 2023, published by Tunki</p>
            <div>
                {/* TODO: change the github.com to my address */}
                <a href={'https://github.com/Tunki1201/Dashboard'} target={'_blank'} rel="noreferrer">
                    <img height={32} alt={'skill'} src="https://skillicons.dev/icons?i=github" />
                </a>
                <a href={'https://www.linkedin.com/in/morgan-mastrangelo-171227277'} target={'_blank'} rel="noreferrer">
                    <img height={32} alt={'skill'} src="https://skillicons.dev/icons?i=linkedin"/>
                </a>
                <a href={'https://discord.com/channels/1098706391377662076/1098706392099078145'} target={'_blank'} rel="noreferrer">
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