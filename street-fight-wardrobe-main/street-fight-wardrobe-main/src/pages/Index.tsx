import { useState, useEffect } from 'react';
import { AuthPage } from '@/components/AuthPage';
import { Navigation } from '@/components/Navigation';
import { ProductSection } from '@/components/ProductSection';
import { CartSection } from '@/components/CartSection';

// Import sample images

import burberryBiancoBurberry from '../assets/BURBERRY_tshirt_BiancoBurberry.jpg';
import burberryBiancoSpalleBurberry from '../assets/BURBERRY_tshirt_BiancoSpalleBurberry.jpg';
import burberryBiancoStrisceBurberry from '../assets/BURBERRY_tshirt_BiancoStrisceBurberry.jpg';
import burberryNeroBurberry from '../assets/BURBERRY_tshirt_NeroBurberry.jpg';
import burberryNeroScrittaBianca from '../assets/BURBERRY_tshirt_NeroScrittaBianca.jpg';
import burberryNeroScrittaBurberry from '../assets/BURBERRY_tshirt_NeroScrittaBurberry.jpg';
import burberryNeroSpalleBurberry from '../assets/BURBERRY_tshirt_NeroSpalleBurberry.jpg';
import burberryNeroStrisceBurberry from '../assets/BURBERRY_tshirt_NeroStrisceBurberry.jpg';
import bapeAzzurro from '../assets/BAPE_shorts_Azzurro.jpg';
import bapeRosa from '../assets/BAPE_shorts_Rosa.jpg';
import bapeVerdeMilitare from '../assets/BAPE_shorts_VerdeMilitare.jpg';
import bapeViola from '../assets/BAPE_shorts_Viola.png';
import burberryAzzurro from '../assets/BURBERRY_shorts_Azzurro.jpg';
import burberryBeigeNero from '../assets/BURBERRY_shorts_BeigeNero.jpg';
import burberryBeigeNeroBigger from '../assets/BURBERRY_shorts_BeigeNeroBigger.jpg';
import burberryViole from '../assets/BURBERRY_shorts_Viola.png';
import corteizBluBianco from '../assets/CORTEIZ_shorts_BluBianco.jpg';
import corteizGrigio from '../assets/CORTEIZ_shorts_Grigio.jpg';
import corteizJeansAzzurro from '../assets/CORTEIZ_shorts_jeansAzzurro.jpg';
import corteizJeansBianco from '../assets/CORTEIZ_shorts_jeansBianco.jpg';
import corteizJeansGrigio from '../assets/CORTEIZ_shorts_jeansGrigio.jpg';
import corteizJeansNero from '../assets/CORTEIZ_shorts_jeansNero.jpg';
import corteizNeroBianco from '../assets/CORTEIZ_shorts_NeroBianco.jpg';
import corteizNeroGiallo from '../assets/CORTEIZ_shorts_NeroGiallo.jpg';
import corteizNeroNero from '../assets/CORTEIZ_shorts_NeroNero.jpg';
import corteizNeroRosa from '../assets/CORTEIZ_shorts_NeroRosa.jpg';
import corteizTutaceleste from '../assets/CORTEIZ_shorts_TutaCeleste.jpg';
import corteizTutaRosa from '../assets/CORTEIZ_shorts_TutaRosa.jpg';
import corteizVerdeMilitare from '../assets/CORTEIZ_shorts_VerdeMilitare.jpg';
import corteizTelaGrigio from '../assets/CORTIEZ_shorts_TelaGrigio.jpg';
import corteizTelaNero from '../assets/CORTIEZ_shorts_TelaNero.jpg';
import corteizTelaNeroGiallo from '../assets/CORTIEZ_shorts_TelaNeroGiallo.jpg';
import corteizTelaRosa from '../assets/CORTIEZ_shorts_TelaRosa.jpg';
import corteizTelaVerde from '../assets/CORTIEZ_shorts_TelaVerde.jpg';
import nbaBucksBianchi from '../assets/NBA_shorts_BucksBianchi.jpg';
import nbaBucksVerde from '../assets/NBA_shorts_BucksVerde.jpg';
import nbaCavsRosso from '../assets/NBA_shorts_CavsRosso.jpg';
import nbaChicagoNero from '../assets/NBA_shorts_ChicagoNero.jpg';
import nbaChicagoRosso from '../assets/NBA_shorts_ChicagoRosso.jpg';
import nbaDenverRosso from '../assets/NBA_shorts_DenverRosso.jpg';
import nbaHornetsVerdeAcqua from '../assets/NBA_shorts_HornetsVerdeAcqua.jpg';
import nbaLakersBiancoViola from '../assets/NBA_shorts_LakersBiancoViola.jpg';
import nbaLakersGialloViola from '../assets/NBA_shorts_LakersGialloViola.jpg';
import nbaLakersNeroViola from '../assets/NBA_shorts_LakersNeroViola.jpg';
import nbaLakersViolaAzzurro from '../assets/NBA_shorts_LakersViolaAzzurro.jpg';
import nbaMemphisBlu from '../assets/NBA_shorts_MemphisBlu.jpg';
import nbaMemphisNero from '../assets/NBA_shorts_MemphisNero.jpg';
import nbaMiamiNeroRosso from '../assets/NBA_shorts_MiamiNeroRosso.jpg';
import nbaMiamiRosa from '../assets/NBA_shorts_MiamiRosa.jpg';
import nbaPhoenixNero from '../assets/NBA_shorts_PhoenixNero.jpg';
import nbaPhoenixViola from '../assets/NBA_shorts_PhoenixViola.jpg';
import nikeBiancogrigio from '../assets/NIKE_shorts_BiancoGrigio.jpg';
import nikeNero from '../assets/NIKE_shorts_Nero.jpg';
import nikeNylonGrigioVerdePanna from '../assets/NIKE_shorts_NylonGrigio-VerdePanna.jpg';
import nikeNylonMarronePanna from '../assets/NIKE_shorts_NylonMarronePanna.jpg';
import nikeNylonNeroPanna from '../assets/NIKE_shorts_NylonNeroPanna.jpg';
import nikeVerdeMilitare from '../assets/NIKE_shorts_VerdeMilitare.jpg';
import prlBiancoblu from '../assets/PRL_shorts_Bianco(blu).jpg';
import prlBlu from '../assets/PRL_shorts_Blu.jpg';
import prlBluBianco from '../assets/PRL_shorts_Blu(bianco).jpg';
import prlBlurosso from '../assets/PRL_shorts_Blu(rosso).jpg';
import prlBluRosso from '../assets/PRL_shorts_BluRosso.jpg';
import prlBluVerde from '../assets/PRL_shorts_BluVerde.jpg';
import prlGrigioBlu from '../assets/PRL_shorts_Grigio(blu).jpg';
import prlNero from '../assets/PRL_shorts_Nero.jpg';
import prlNerobianco from '../assets/PRL_shorts_Nero(bianco).jpg';
import prlNerorosso from '../assets/PRL_shorts_Nero(rosso).jpg';
import prlRosso from '../assets/PRL_shorts_Rosso.jpg';
import rhudeBluAcceso from '../assets/RHUDE_shorts_BluAcceso.jpg';
import rhudeBluOcra from '../assets/RHUDE_shorts_BluOcra.jpg';
import rhudeBluScritta from '../assets/RHUDE_shorts_BluScritta.jpg';
import rhudeGialloBianco from '../assets/RHUDE_shorts_GialloBianco.jpg';
import rhudeGrigio from '../assets/RHUDE_shorts_Grigio.jpg';
import rhudeNero from '../assets/RHUDE_shorts_Nero.jpg';
import rhudeNeroBianco from '../assets/RHUDE_shorts_NeroBianco.jpg';
import rhudeNeroGiallo from '../assets/RHUDE_shorts_NeroGiallo.jpg';
import rhudeNeroOcra from '../assets/RHUDE_shorts_NeroOcra.jpg';
import rhudeNeroRosso from '../assets/RHUDE_shorts_NeroRosso.jpg';
import rhudeNeroScritta from '../assets/RHUDE_shorts_NeroScritta.jpg';
import rhudeNeroVerde from '../assets/RHUDE_shorts_NeroVerde.jpg';
import rhudeRosso from '../assets/RHUDE_shorts_Rosso.jpg';
import rhudeRossoBianco from '../assets/RHUDE_shorts_RossoBianco.jpg';
import rhudeRossoOcra from '../assets/RHUDE_shorts_RossoOcra.jpg';
import rhudeVerdeBianco from '../assets/RHUDE_shorts_VerdeBianco.jpg';
import rhudeverdeOcra from '../assets/RHUDE_shorts_VerdeOcra.jpg';
import synaAzzurro from '../assets/SYNA_shorts_Azzurro.jpg';
import synaLillaRosa from '../assets/SYNA_shorts_LillaRosa.jpg';
import synaMarrone from '../assets/SYNA_shorts_Marrone.jpg';
import synaNero from '../assets/SYNA_shorts_Nero.jpg';
import synaRosso from '../assets/SYNA_shorts_Rosso.jpg';
// ...importa anche le altre immagini che ti servono...

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState('magliette');

  useEffect(() => {
    // Check if user is already authenticated
    const authVerified = localStorage.getItem('auth_verified');
    if (authVerified === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Sample product data - replace with your actual products
  const productData = {
    magliette: [
      { id: 'TSH001', name: 'Burberry t-shirt', image: burberryBiancoBurberry},
      { id: 'TSH001', name: 'Burberry t-shirt', image: burberryBiancoSpalleBurberry },
      { id: 'TSH001', name: 'Burberry t-shirt', image: burberryBiancoStrisceBurberry },
      { id: 'TSH001', name: 'Burberry t-shirt', image: burberryNeroBurberry },
      { id: 'TSH001', name: 'Burberry t-shirt', image: burberryNeroScrittaBianca },
      { id: 'TSH001', name: 'Burberry t-shirt', image: burberryNeroScrittaBurberry },
      { id: 'TSH001', name: 'Burberry t-shirt', image: burberryNeroSpalleBurberry },
      { id: 'TSH001', name: 'Burberry t-shirt', image: burberryNeroStrisceBurberry },
    ],
    felpe: [
      { id: 'HDY001', name: 'Dark Alliance Hoodie', image: nikeNero },
      { id: 'HDY002', name: 'Red Storm Hoodie', image: nbaBucksVerde },
      { id: 'HDY003', name: 'Street Kings Hoodie', image: rhudeNeroGiallo },
    ],
    giacconi: [
      { id: 'JKT001', name: 'Warrior Leather Jacket', image: nbaHornetsVerdeAcqua },
      { id: 'JKT002', name: 'Combat Elite Jacket', image: synaRosso },
      { id: 'JKT003', name: 'Neon Strike Jacket', image: prlNerorosso },
    ],
    pantaloncini: [
      { id: 'SHT001', name: 'Bape shorts', image: bapeAzzurro },
      { id: 'SHT002', name: 'Bape shorts', image: bapeRosa },
      { id: 'SHT003', name: 'Bape shorts', image: bapeVerdeMilitare },
      { id: 'SHT001', name: 'Bape shorts', image: bapeViola },
      { id: 'SHT002', name: 'Burberry shorts', image: burberryAzzurro },
      { id: 'SHT003', name: 'Burberry shorts', image: burberryBeigeNero },
      { id: 'SHT001', name: 'Burberry shorts', image: burberryBeigeNeroBigger },
      { id: 'SHT002', name: 'Burberry shorts', image: burberryViole },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizBluBianco },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizGrigio },
      
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizJeansAzzurro },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizJeansBianco },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizJeansGrigio },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizJeansNero },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizNeroBianco },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizNeroGiallo },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizNeroNero },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizNeroRosa },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizTutaceleste },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizTutaRosa },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizVerdeMilitare },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizTelaGrigio },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizTelaNero },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizTelaNeroGiallo },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizTelaRosa },
      { id: 'SHT003', name: 'Corteiz shorts', image: corteizTelaVerde },
      { id: 'SHT003', name: 'NBA shorts', image: nbaBucksBianchi },
      { id: 'SHT003', name: 'NBA shorts', image: nbaBucksVerde },
      { id: 'SHT003', name: 'NBA shorts', image: nbaCavsRosso },
      { id: 'SHT003', name: 'NBA shorts', image: nbaChicagoNero },
      { id: 'SHT003', name: 'NBA shorts', image: nbaChicagoRosso },
      { id: 'SHT003', name: 'NBA shorts', image: nbaDenverRosso },
      { id: 'SHT003', name: 'NBA shorts', image: nbaHornetsVerdeAcqua },
      { id: 'SHT003', name: 'NBA shorts', image: nbaLakersBiancoViola },
      { id: 'SHT003', name: 'NBA shorts', image: nbaLakersGialloViola },
      { id: 'SHT003', name: 'NBA shorts', image: nbaLakersNeroViola },
      { id: 'SHT003', name: 'NBA shorts', image: nbaLakersViolaAzzurro },
      { id: 'SHT003', name: 'NBA shorts', image: nbaMemphisBlu },
      { id: 'SHT003', name: 'NBA shorts', image: nbaMemphisNero },
      { id: 'SHT003', name: 'NBA shorts', image: nbaMiamiNeroRosso },
      { id: 'SHT003', name: 'NBA shorts', image: nbaMiamiRosa },
      { id: 'SHT003', name: 'NBA shorts', image: nbaPhoenixNero },
      { id: 'SHT003', name: 'NBA shorts', image: nbaPhoenixViola },
      { id: 'SHT003', name: 'Nike shorts', image: nikeBiancogrigio },
      { id: 'SHT003', name: 'Nike shorts', image: nikeNero },
      { id: 'SHT003', name: 'Nike shorts', image: nikeNylonGrigioVerdePanna },
      { id: 'SHT003', name: 'Nike shorts', image: nikeNylonMarronePanna },
      { id: 'SHT003', name: 'Nike shorts', image: nikeNylonNeroPanna },
      { id: 'SHT003', name: 'Nike shorts', image: nikeVerdeMilitare },
      { id: 'SHT003', name: 'Polo Ralph Lauren shorts', image: prlBiancoblu },
      { id: 'SHT003', name: 'Polo Ralph Lauren shorts', image: prlBlu },
      { id: 'SHT003', name: 'Polo Ralph Lauren shorts', image: prlBluBianco },
      { id: 'SHT003', name: 'Polo Ralph Lauren shorts', image: prlBlurosso },
      { id: 'SHT003', name: 'Polo Ralph Lauren shorts', image: prlBluRosso },
      { id: 'SHT003', name: 'Polo Ralph Lauren shorts', image: prlBluVerde },
      { id: 'SHT003', name: 'Polo Ralph Lauren shorts', image: prlGrigioBlu },
      { id: 'SHT003', name: 'Polo Ralph Lauren shorts', image: prlNero },
      { id: 'SHT003', name: 'Polo Ralph Lauren shorts', image: prlNerobianco },
      { id: 'SHT003', name: 'Polo Ralph Lauren shorts', image: prlNerorosso },
      { id: 'SHT003', name: 'Polo Ralph Lauren shorts', image: prlRosso },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeBluAcceso },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeBluOcra },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeBluScritta },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeGialloBianco },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeGrigio },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeNero },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeNeroBianco },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeNeroGiallo },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeNeroOcra },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeNeroRosso },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeNeroScritta },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeNeroVerde },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeRosso },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeRossoBianco },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeRossoOcra },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeVerdeBianco },
      { id: 'SHT003', name: 'Rhude shorts', image: rhudeverdeOcra },
      { id: 'SHT003', name: 'SYNA shorts', image: synaAzzurro },
      { id: 'SHT003', name: 'SYNA shorts', image: synaLillaRosa },
      { id: 'SHT003', name: 'SYNA shorts', image: synaMarrone },
      { id: 'SHT003', name: 'SYNA shorts', image: synaNero },
      { id: 'SHT003', name: 'SYNA shorts', image: synaRosso },
    ],
    pantaloni: [
      { id: 'PNT001', name: 'Tactical Combat Pants', image: corteizTutaRosa },
      { id: 'PNT002', name: 'Street Warrior Pants', image: nbaLakersViolaAzzurro },
      { id: 'PNT003', name: 'Urban Fighter Pants', image: burberryViole },
    ],
    scarpe: [
      { id: 'SHO001', name: 'Combat Boots', image: nbaChicagoNero },
      { id: 'SHO002', name: 'Street Fighter Boots', image: prlNerobianco },
      { id: 'SHO003', name: 'Warrior Sneakers', image: prlBlurosso },
    ],
    accessori: [
      { id: 'ACC001', name: 'Fighter Gloves', image: corteizJeansGrigio },
      { id: 'ACC002', name: 'Combat Belt', image: synaMarrone },
      { id: 'ACC003', name: 'Street Cap', image: rhudeVerdeBianco },
    ]
  };

  const sectionTitles = {
    magliette: 'MAGLIETTE',
    felpe: 'FELPE',
    giacconi: 'GIACCONI',
    pantaloncini: 'PANTALONCINI',
    pantaloni: 'PANTALONI',
    scarpe: 'SCARPE',
    accessori: 'ACCESSORI'
  };

  if (!isAuthenticated) {
    return <AuthPage onTokenVerified={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-dark)' }}>
      <Navigation 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      <main>
        {activeSection === 'carrello' ? (
          <CartSection />
        ) : (
          <ProductSection
            title={sectionTitles[activeSection as keyof typeof sectionTitles]}
            products={productData[activeSection as keyof typeof productData]}
            category={activeSection}
          />
        )}
      </main>
    </div>
  );
};

export default Index;
