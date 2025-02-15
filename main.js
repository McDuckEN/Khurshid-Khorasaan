class Mheader extends HTMLElement 
{
    connectedCallback()
    {
        this.innerHTML = 
              `
            <header>
            <link rel="icon" type="image/x-icon" href="./img/LOGO.png">
                <link rel="stylesheet" href="./style.css">
                <a href="./index.html">
                    <img src="./img/LOGO.png" alt="LOGO">
                </a>
                <h1>خورشید خراسان</h1>
                <nav>
                    <ul>
                        <li><a href="./index.html">صفحه اصلی</a></li>
                        <li><a href="./AboutMain.html">زندگی نامه</a></li>
                        <li><a href="./zirat.html">زیارت نامه</a></li>
                        <li><a href="./Hadisese.html">احادیث</a></li>
                        <li><a href="./History.html">تاریخچه</a></li>
                        <li><a href="./Gallery.html">تصاویر حرم مطهر</a></li>
                        <li><a href="./Contectus.html">ارتباط باما</a></li>
                        <li><a href="./About.html">درباره ما</a></li>
                    </ul>
                </nav>
            </header>
                `;
    }
}

class Mfooter extends HTMLElement 
{
    connectedCallback()
    {
        this.innerHTML = 
              `<br><br>
              <footer>
                  <h3>
                  <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://fa.wikipedia.org/wiki/%25D8%25B9%25D9%2584%25DB%258C_%25D8%25A8%25D9%2586_%25D9%2585%25D9%2588%25D8%25B3%25DB%258C_%25D8%25A7%25D9%2584%25D8%25B1%25D8%25B6%25D8%25A7&ved=2ahUKEwjV9_LdjsOLAxU71gIHHTQGAkYQFnoECBQQAQ&usg=AOvVaw0BCJJeWBA4xF60ensSEpCv" target="_blank">
                  منبع : ویکی پدیا
                  </a>
                  </h3>
                  <h3>
                  <a href="./Contectus.html">
                  ارتباط باما
                  </a>
                  </h3>
                  <h3>
                  <a href="./About.html">تمامی حقوق برای Mc Duck Enterprises محفوظ است - 2019-2025</a>
                  </h3>
              </footer>
                `;
    }
}

customElements.define('m-header',Mheader);
customElements.define('m-footer',Mfooter);