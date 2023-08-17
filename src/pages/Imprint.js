import Navigation from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ImprintPage = () => {
  return (
    <div>
      <body>
        <div className="App">
          <header className="App-header">
            <Navigation />
          </header>
          <div className="background-image"></div>
        </div>
        <section>
          <h1 className="custom-h1">
            Willkommen auf der Homepage von Ihrer Kleiderspendenannahme
          </h1>
          <p>
            Gerne unterstützen wir Sie dabei, Ihren Beitrag zum Klimawandel zu
            leisten. Die Klamotten können entweder an der Geschäftsstelle des
            Vereins persönlich übergeben werden oder von einem Sammelfahrzeug
            abgeholt werden.
          </p>
        </section>

        <div class="background-image">
          <h1 class="custom-h1">Impressum</h1>
          <br />
        </div>
        <div id="page" class="container" style="text-align: center">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 mx-auto text-center">
              <div class="form-group">
                <table>
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>Gemeinnütziger Verein e. V.</td>
                    </tr>
                    <tr>
                      <td>Mustermannstraße 1</td>
                    </tr>
                    <tr>
                      <td>12345 Mustermannstadt</td>
                    </tr>
                    <tr>
                      <td>Deutschland</td>
                    </tr>
                    <tr>
                      <td>Handelsregister: HRB 123456</td>
                    </tr>
                    <tr>
                      <td>UST-ID: DE123456789</td>
                    </tr>
                    <tr>
                      <td>Kontakt:</td>
                    </tr>
                    <tr>
                      <td>E-Mail: mail@musterfirma.de</td>
                    </tr>
                    <tr>
                      <td>Telefon: +49 4711 12345</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </body>
    </div>
  );
};

export default ImprintPage;
