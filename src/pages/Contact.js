function ContactPage() {
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

        <div className="background-image">
          <h1 className="custom-h1">Kontaktdaten</h1>
        </div>
        <div id="page" className="container" style={{ textAlign: "center" }}>
          <div className="row">
            <div className="col-md-6 col-md-offset-3 mx-auto text-center">
              <div className="form-group">
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <section>
          <h2 className="custom-h2">Unser Engagement für die Umwelt:</h2>
          <p>
            Bei unserer Kleiderspendenaktion geht es nicht nur darum, Menschen
            in Krisengebieten zu helfen, sondern auch die Umwelt zu schonen.
            Indem Sie Ihre Kleidung bei uns spenden, tragen Sie dazu bei, den
            Lebenszyklus von Kleidungsstücken zu verlängern und die
            Ressourcenverschwendung zu reduzieren. Anstatt Kleidung wegzuwerfen,
            geben Sie ihr eine neue Chance und minimieren so den ökologischen
            Fußabdruck der Modeindustrie.
          </p>
        </section>

        <section>
          <h2 className="custom-h2">Nachhaltige Mode:</h2>
          <p>
            Unsere Kleiderspendenaktion geht über die reine Wohltätigkeit
            hinaus. Wir setzen uns für nachhaltige Mode ein und möchten
            Bewusstsein für die Umweltauswirkungen der Textilindustrie schaffen.
            Mithilfe ihrer Spende unterstützen Sie den Gedanken der
            Kreislaufwirtschaft. Ihre Kleidungsstücke werden an Bedürftige
            weitergegeben oder, falls nötig, recycelt, um ihre Ressourcen
            optimal zu nutzen und Abfall zu vermeiden.
          </p>
        </section>

        <section>
          <h2 className="custom-h2">Gemeinschaftliches Engagement:</h2>
          <p>
            Unsere Kleiderspendenannahme ist ein Ort des gemeinschaftlichen
            Engagements. Hier kommen Menschen mit unterschiedlichen
            Hintergründen und Geschichten zusammen, um etwas Gutes zu tun. Wir
            schaffen einen Raum, in dem gegenseitige Unterstützung und
            Solidarität gedeihen können. Wir laden Sie herzlich ein, Teil
            unserer Gemeinschaft zu werden und gemeinsam einen positiven
            Einfluss auf die Welt zu haben.
          </p>
        </section>

        <section>
          <h2 className="custom-h2">Vielen Dank für Ihre Unterstützung:</h2>
          <p>
            Ohne die großzügige Unterstützung unserer Spenderinnen und Spender
            wäre unsere Arbeit nicht möglich. Wir möchten Ihnen von Herzen für
            Ihr Vertrauen und Ihre Bereitschaft, etwas zu bewegen, danken. Jede
            Spende, sei es eine einzelne Bluse oder eine vollständige Garderobe,
            ist von unschätzbarem Wert und hat einen echten Einfluss auf das
            Leben anderer Menschen. Ihre Großzügigkeit und Mitmenschlichkeit
            sind inspirierend.
          </p>
        </section>
      </body>
    </div>
  );
}

export default ContactPage;
