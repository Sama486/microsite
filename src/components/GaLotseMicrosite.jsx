import React, { useEffect, useState } from 'react';
import { XCircle } from 'lucide-react';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


// Add this at the top of your main CSS file or in a <style> tag in your HTML
const FontLoader = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Poppins:wght@400;500&display=swap');
  `}</style>
);

const GaLotseMicrosite = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <>
      <FontLoader />
      <div className="font-poppins text-black">
        {/* Header */}
        <header className="header py-4 px-6">
          <div className="max-w-6xl mx-auto flex justify-between items-end">
            <div className="flex items-center">
              <img src="images/ga-ffm_logo.svg" alt="GA-Lotse Logo" className="h-12" />
            </div>
            <nav className="">
              <ul className="flex space-x-6">
                <li><a href="#hintergrund" className="headerSingles font-medium">Hintergrund</a></li>
                <li><a href="#features" className="headerSingles font-medium">Features</a></li>
                <li><a href="#technical" className="headerSingles font-medium">Technik</a></li>
                <li><a href="#betrieb" className="headerSingles font-medium">Betrieb</a></li>
                <li><a href="#contact" className="headerSingles font-medium">Kontakt</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="startIMG relative h-[600px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('images/bg_gradients_horizontal_arrows.png')" }}
          ></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('images/arrows/bg_arrows_layer_a_solid.svg')" }}
          ></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('images/arrows/bg_arrows_layer_b_solid.svg')" }}
          ></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('images/arrows/bg_arrows_layer_c_solid.svg')" }}
          ></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('images/arrows/bg_arrows_all_solid.svg')" }}
          ></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('images/arrows/bg_arrows_all_blur.svg')" }}
          ></div>

          <div className="max-w-5xl mx-auto text-center relative z-10 px-6">

            <img src="images/ga-lotse_logo-bold.svg" alt="GA-Lotse Logo" className="h-40 mx-auto mb-10" />

            <p className="text-3xl mb-10 schriftaufBild font-semibold drop-shadow-lg">
              Die Einheitliche Software für Gesundheitsämter
            </p>
            <a
              href="#contact"
              className="bg-primary-solid-Bg text-primary-solid-Color px-8 py-4 rounded-md text-xl font-bold hover:bg-primary-soft-Color transition duration-300 shadow-lg"
            >
              Mehr erfahren
            </a>
          </div>
        </section>

        {/* Background/Context */}
        <section id='hintergrund' className="py-8 px-6 ">
          <div className=" mx-auto card" data-aos= "fade-right">
            <h2 className=" text-3xl mb-6"><span>HINTERGRUNDINFORMATION</span></h2>
            <p className=" mb-4"><strong>GA-Lotse ist die einheitliche Software für die Gesundheitsämter</strong>, die gerade entwickelt wird. Sie besteht aus einem Grundmodul mit gemeinsamen Funktionen und spezialisierten Modulen für die jeweiligen Abteilungen der Gesundheitsämter.
            <br/>
            <br/>
              Ziel ist es, nach und nach in den Gesundheitsämtern die vielen Einzellösungen und Papierarbeit zu ersetzen. Der Start ist für den 01.10.2024 geplant, beginnend mit dem Grundmodul und einigen ersten Fachmodulen.</p>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="py-8 px-6 ">
          <div className="card mx-auto" data-aos= "fade-left">
            <h2 className="text-3xl mb-6"><span>FEATURES</span></h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Anpassbar</strong>: Software skalierbar für kleine und große Gesundheitsämter</li>
              <li><strong>Desktop & Mobile</strong>: Arbeiten mit PC, Laptop, Tablet und Smartphone leicht möglich</li>
              <li><strong>Überall dabei</strong>: Einsatz sowohl offline als auch online</li>
              <li><strong>Grundmodul</strong>: Interne Prozesse, Chatfunktion, Statistik, Bürgerportal mit Terminmodul</li>
              <li><strong>Erste Fachmodule</strong>: Einschulung, Begehungen, Masernimpfung, Impfberatung</li>
              <li><strong>Weiterbildung</strong>: Schulungs- und Einführungsprogramme für Mitarbeiter</li>
            </ul>
          </div>
        </section>

        {/* Technical Background */}
        <section id="technical" className="py-8 px-6 ">
          <div className="card mx-auto" data-aos= "fade-right">
            <h2 className="text-3xl mb-6"><span>TECHNIK</span></h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Open Source</strong></li>
              <li><strong>Agile Entwicklung</strong> der Module unter Einbeziehung der Anwender</li>
              <li><strong>Datensicherheit</strong> auf maximalem Niveau - "Zero Trust"</li>
              <li><strong>Schnittstellenausbau</strong></li>
              <li><strong>Hosting als Service Plus</strong> (Datenmenge/Geschwindigkeit)</li>
              <li><strong>Sichere Updates</strong></li>
              <li><strong>Kontinuierliche Verbesserung</strong> und Erweiterung der Module</li>
            </ul>
          </div>
        </section>

        {/* Pricing Options */}
        <section id='betrieb' className="py-8 px-6 ">
          <div className="card mx-auto" data-aos= "fade-left">
            <h2 className="font-cairo font-semibold text-3xl mb-6"><span>KOSTENVERTEILUNGSVERSIONEN</span></h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Software as a Service (SaaS)</strong></li>
              <li><strong>SaaS mit Servicehotline</strong></li>
              <li><strong>Optional mit Hosting und Servicehotline</strong></li>
            </ul>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-8 px-6 ">
          <div className="card mx-auto" data-aos= "fade-right">
            <h2 className="font-cairo font-semibold text-3xl mb-6"><span>KONTAKT</span></h2>
            <p className="mb-4">Sie wollen mehr Details wissen? Kontaktieren Sie uns:</p>
            <a href="mailto:gesundheitsamt.einheitliche-software@stadt-frankfurt.de" className="text-primary-plain-Color hover:underline"><a href='mailt&#111;&#58;&#103;&#37;6&#53;sundheit&#37;7&#51;amt&#46;e&#105;nh&#101;itlic%68e&#45;&#37;73&#37;6&#70;&#102;%7&#52;ware&#64;%7&#51;&#116;%61d%7&#52;-&#102;%7&#50;a%&#54;Ek&#102;&#37;75&#37;&#55;2t&#37;2E%64&#101;'>g&#101;sundheit&#115;&#97;mt&#46;ei&#110;he&#105;t&#108;ich&#101;-&#115;o&#102;t&#119;a&#114;e&#64;sta&#100;t-frankfurt&#46;&#100;&#101;</a></a>
          </div>
        </section>

        {/* Footer */}
        <Footer setShowModal={setShowModal} />

        {/* Imprint Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full relative">
              <h2 className="font-cairo font-semibold text-2xl mb-4">Impressum</h2>
              <p>Hier kommt der Inhalt des Impressums...</p>
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-neutral-700 hover:text-danger-outlined-Color">
                <XCircle size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GaLotseMicrosite;