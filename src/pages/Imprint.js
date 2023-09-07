const ImprintPage = () => {
  return (
    <div>
      <body>
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

        <div bordered hover className="table-container">
          <table>
            <thead>
              <h1 class="custom-h1">Impressum</h1>
            </thead>
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
                <td>Kontakt: Maximilian Mustermann</td>
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
      </body>
    </div>
  );
};

export default ImprintPage;
