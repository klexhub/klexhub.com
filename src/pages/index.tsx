import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <section
          className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2  py-20"
          id="welcome-section"
        >
          <div className="col-span-2">
            <h3 className="text-klexp-500 text-xl mb-5 uppercase">Entwicklung</h3>
            <h1 className="text-black text-4xl mb-5">Kundenspezifische Software-Lösungen</h1>
            <p className="text-black">
              Wir entwickeln kundenspezifische Software – digitale Lösungen, die begeistern. Unsere
              individuellen Anwendungen helfen Unternehmen jeder Größe dabei, ihre Prozesse zu
              vereinfachen oder ausgefallene digitale Kommunikationsideen erlebbar zu machen.
              <br />
              <br />
              Durch einsatz neuster Technologie sind sie nicht nur up-to-date sondern auch Ihrer
              Konkurenz einen Schritt vorraus.
              <br />
              <br />
              Fordern Sie Ihr unverbindlichen Angebot an.
            </p>
            <button
              onClick={() => {
                Router.push('/contact')
              }}
              className="rounded-sm text-white bg-klexp-500 px-4 py-2 my-3 hover:bg-klexp-600 focus:outline-none"
            >
              Angebot anfordern
            </button>
          </div>
          <div className="col-start-4">
            <img
              className=""
              src="https://www.redhat.com/cms/managed-files/isometric_ansible.svg"
              alt="KlexHub Development Header Image"
            />
          </div>
        </section>

        <div className="pb-10 border-b border-gray-200 mb-10"></div>

        <section id="welcome-section" className="pb-20">
          <div className="grid grid-cols-5">
            <div className="col-start-3 col-span-2">
              <h3 className="text-klexp-500 text-xl mb-5 uppercase">1. Angebot</h3>
              <h1 className="text-black text-4xl mb-5">Ihr Projekt, unser Angebot!</h1>
              <p className="text-black">
                Teilen Sie uns Details über Ihr Projekt mit. Vom Funktionsumfang bis hin zum Budget.
                Durch unsere jahrelange Erfahrung in der Softwareentwicklung unterbreiten wir Ihnen
                gerne ein unvernindliches und zugleich attraktives Festpreisangebot.
                <Link href="/angebot">
                  <a
                    className="pt-2 inline-flex text-md sm:text-md font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-klexp-500 hover:text-klexp-600"
                    href="/angebot"
                  >
                    Angebot anfragen -&gt;
                  </a>
                </Link>
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2  ">
            <div className="mt-12 ml-12" style={{ marginTop: '36rem' }}>
              <h3 className="text-klexp-500 text-xl mb-5 uppercase">2. Auftragserteilung</h3>
              <h1 className="text-black text-4xl mb-5">Ihre Starterlaubnis!</h1>
              <p className="text-black">
                Erteilen Sie uns das oke, starten wir unverzüglich mit der Realisierung Ihres
                Projektes. Hierbei stehen wir im ständigen Austausch und Kontakt mit Ihnen.
                <br /> Durch unser "Fridayupdate" bringen wir Sie kurz vor dem Wochende auf den
                aktuellen Entwicklungsstand.
                <br />
                <br />
                <Link href="/lets-hacking#freitag-ist-fridayupdate">
                  <a
                    className="pt-2 inline-flex text-md sm:text-md font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-klexp-500 hover:text-klexp-600"
                    href="/lets-hacking#freitag-ist-fridayupdate"
                  >
                    Fridayupdate -&gt;
                  </a>
                </Link>
              </p>
            </div>
            <div className="col-start-2">
              <img style={{ height: '140rem' }} src="/path34.png" />
            </div>
            <div className="mt-12 ml-12">
              <h3 className="text-klexp-500 text-xl mb-5 uppercase">1. Beratung</h3>
              <h1 className="text-black text-4xl mb-5">Wir beraten Sie gerne!</h1>
              <p className="text-black">
                Sie haben eine Idee, aber keine Ahnung wie Sie Ihr vorhaben realisieren könnten?
                Gerne stehen wir Ihnen mit unserer Erfahrung und technichem Wissen für eine
                ausführliche und zugleich verständliche Beratung zur Verfügung.
                <br />
                <br />
                Zusammen finden wir ein Lösung um Ihr Vorhaben umzusetzen!
                <br />
                <Link href="/beratung">
                  <a
                    className="pt-2 inline-flex text-md sm:text-md font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-klexp-500 hover:text-klexp-600"
                    href="/beratung"
                  >
                    Beratung anfragen -&gt;
                  </a>
                </Link>
              </p>
              <div className="mt-12 ml-12" style={{ marginTop: '48rem' }}>
                <h3 className="text-klexp-500 text-xl mb-5 uppercase">4. Entwicklung</h3>
                <h1 className="text-black text-4xl mb-5">Let`s hacking!</h1>
                <p className="text-black">
                  Wir sind schnell und zuverlässig in der Entwicklung. Durch den einsatz neuster
                  Technologien und Frameworks, sind wir Ihrer Konkurenz mindesten einem Schritt
                  vorraus!
                  <br />
                  <br />
                  Überzeuchen Sie sich selbst von unseren Ergebnisen
                  <br />
                  <Link href="/lets-hacking">
                    <a
                      className="pt-2 inline-flex text-md sm:text-md font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-klexp-500 hover:text-klexp-600"
                      href="/lets-hacking"
                    >
                      Entwicklung -&gt;
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5">
            <div className="col-start-2 col-span-3">
              <h3 className="text-klexp-500 text-xl mb-5 uppercase">5. Fertigstellung</h3>
              <h1 className="text-black text-4xl mb-5">Hey, Fertig!</h1>
              <p className="text-black">
                In einer rasenden Geschwinndigkeit und im Rahmen des Angebotes, stellen wir Ihr
                Projekt fertig. Nach ausführlichen Test erhalten Sie die Software und eine passende
                Dokumentation von uns ausgeliefert. Bilder sagen mehr als tausende Worte, nach
                diesem Motto ergänzen wir die Dokumentation gerne mit Videos.
                <br />
                Und natürlich stehen wir Ihnen mit unserem freundlichen Support-Team zur Verfügung.
                <Link href="/finish-project">
                  <a
                    className="pt-2 inline-flex text-md sm:text-md font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-klexp-500 hover:text-klexp-600"
                    href="/angebot"
                  >
                    Realisierte Projekte -&gt;
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
