import html from '../core.js';
import Header from './Header.js' 
import HeaderPanel from './HeaderPanel.js'
import Footer from './Footer.js' 
import { connect } from '../store.js';

function Home({ panelImgs }) {
    return html`
        ${Header()}
        ${HeaderPanel()}

        <div id="container">
            ${panelImgs.map(img => `
                <div class="image">
                    <a href="">
                        <img src=${img} alt="">
                    </a>
                </div>
            `)}
        </div>

        ${Footer()}
    `;
}

export default connect()(Home);
