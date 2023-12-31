function ContactPage() {
  return (
    <div>
      <h1 className="custom-h1">
        Willkommen auf der Homepage von Ihrer Kleiderspendenannahme
      </h1>
      <p>
        Gerne unterstützen wir Sie dabei, Ihren Beitrag zum Klimawandel zu
        leisten. Die Klamotten können entweder an der Geschäftsstelle des
        Vereins persönlich übergeben werden oder von einem Sammelfahrzeug
        abgeholt werden.
      </p>

      <section>
        <h2 className="custom-h2">Schreiben Sie uns!</h2>
        <p>Wir freuen uns auf ihre Nachricht.</p>
      </section>

      <h1 className="custom-h1">Kontaktdaten</h1>
      <div className="table-container">
        <table>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactPage;
