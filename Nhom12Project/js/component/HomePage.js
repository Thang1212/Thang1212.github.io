import html from '../core.js';
import Header from './Header.js';
import NavBar from './NavBar.js';
import HeaderPanel from './HeaderPanel.js'
import Footer from './Footer.js' 
import { connect } from '../store.js';

function Home({ panelImgs }) {
    return html`
        ${Header()}
        ${NavBar()}
        ${HeaderPanel()}

        <main>
            <section class="container-fluid mt-4 bg-black mt-3">
                <div class="row mt-3">
                    ${panelImgs.map(img => `
                        <a href="#" class="col-sm-6 mb-4">
                            <img src=${img} alt="" class="h-100 w-100 object-fit-cover">
                        </a>
                    `)}
                </div>
            </section>
        </main>

        ${Footer()}
    `;
}

export default connect()(Home);
