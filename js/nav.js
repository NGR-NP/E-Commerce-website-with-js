const createNav = () =>{
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo-c.png" class="brand-logo" alt="logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/user.png" alt="user"></a>
                <a href="#"><img src="img/cart.png" alt="cart"></a>
            </div>
        </div>
        <ul class="links-contaner">
            <li class="link-items"><a href="#" class="link">Home</a></li>
            <li class="link-items"><a href="#" class="link">Women</a></li>
            <li class="link-items"><a href="#" class="link">Men</a></li>
            <li class="link-items"><a href="#" class="link">kids</a></li>
            <li class="link-items"><a href="#" class="link">Accessories</a></li>
        </ul>
    `;
}
createNav();