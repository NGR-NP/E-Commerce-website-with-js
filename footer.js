const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img class="logo" src="img/light-logo.png" alt="light-logo">
            <div class="footer-ul-container">

                <ul class="category">
                    <li class="category-title">Men</li>
                    <li><a href="#" class="footer-link">T-shirt</a></li>
                    <li><a href="#" class="footer-link">Shoes</a></li>
                    <li><a href="#" class="footer-link">Bag</a></li>
                    <li><a href="#" class="footer-link">Shoes</a></li>
                    <li><a href="#" class="footer-link">Vest</a></li>
                    <li><a href="#" class="footer-link">Vest</a></li>
                    <li><a href="#" class="footer-link">Pant</a></li>
                    <li><a href="#" class="footer-link">Pant</a></li>
                </ul>

                <ul class="category">
                    <li class="category-title">Women</li>
                    <li><a href="#" class="footer-link">Bag</a></li>
                    <li><a href="#" class="footer-link">Pant</a></li>
                    <li><a href="#" class="footer-link">Pant</a></li>
                    <li><a href="#" class="footer-link">Vest</a></li>
                    <li><a href="#" class="footer-link">Vest</a></li>
                    <li><a href="#" class="footer-link">Shoes</a></li>
                    <li><a href="#" class="footer-link">Shoes</a></li>
                    <li><a href="#" class="footer-link">T-shirt</a></li>
                </ul>
            </div>

        </div>
        <p class="footer-title">about comapany</p>
        <p class="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab numquam officia
            necessitatibus quae odit quis dolorum, assumenda voluptates at illo nam, pariatur voluptas corrupti,
            similique minima tempore officiis nisi.</p>
        <p class="info"><a class="info" href="mailto:ngr112001@gmail.com">Support email - ngr112001@gmail.com</a></p>
        <p class="info"><a href="tel:9800000000" class="info">telephone - 98-00-00-0000</a></p>

        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">Terms & services</a>
                <a href="#" class="social-link">Privicy page</a>
            </div>
            <div>
                <a href="#" class="social-link">E-Sathi</a>
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">Twitter</a>
            </div>
        </div>
        <a href="#" class="footer-credit">&copy; Tej karki aka NGR, online store</a>
    
    `;

}
createFooter();