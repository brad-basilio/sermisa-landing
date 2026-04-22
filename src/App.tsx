// @ts-nocheck
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FaPhoneAlt, FaWhatsapp, FaBars, FaTimes, FaChevronLeft, FaChevronRight, 
  FaFacebookF, FaInstagram, FaStar, FaChevronDown, FaCheckCircle, 
  FaEnvelope, FaMapMarkerAlt, FaWrench, FaExclamationTriangle
} from 'react-icons/fa';

const COLORS = {
  primary: '#0C499E',    // Deep Blue
  secondary: '#F6A71B',  // Orange/Yellow
  darkBlue: '#1a365d',   // Darker blue
};

const PHONE_CENTRAL = "(01) 276 1763";
const PHONE_SOPORTE = "(+51) 998 160 326";
const WHATSAPP_URL = `https://wa.me/51998160326?text=${encodeURIComponent('Hola Sermisa, necesito solicitar una cotización.')}`;
const WHATSAPP_EMERGENCY = `https://wa.me/51998160326?text=${encodeURIComponent('🚨 EMERGENCIA: Necesito soporte técnico urgente.')}`;

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen overflow-x-hidden pt-[110px] md:pt-[130px]">
      
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md border-b-2 border-[#0C499E]' : 'border-b border-slate-100'}`}>
        {/* Top Logo Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="#" className="flex-shrink-0">
            <img 
              src="https://www.serviciotecnicoyreparacion.com/wp-content/uploads/2024/10/logo-sermisa-tec-color-web-400px.webp" 
              alt="Sermisa Técnicos" 
              className="h-10 md:h-14 w-auto"
            />
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-3 group">
              <FaPhoneAlt className="text-[#0C499E] text-xl group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs font-bold text-[#0C499E] uppercase leading-tight">Central</p>
                <a href="tel:012761763" className="text-sm font-bold text-slate-700 hover:text-[#0C499E]">{PHONE_CENTRAL}</a>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <FaWhatsapp className="text-[#25D366] text-2xl group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs font-bold text-[#0C499E] uppercase leading-tight">Soporte Técnico</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-700 hover:text-[#0C499E]">{PHONE_SOPORTE}</a>
              </div>
            </div>
            <a href="#contacto" className="bg-[#F6A71B] text-[#0C499E] px-6 py-3 font-bold text-sm tracking-widest hover-sharp-shadow border-2 border-transparent">
              COTIZAR AHORA
            </a>
          </div>

          <button className="md:hidden text-[#0C499E] border-2 border-[#0C499E] p-2" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="border-t-2 border-slate-100 hidden md:block bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-center space-x-12 py-3 text-sm font-bold text-slate-600 uppercase tracking-wide">
               <a href="#quienes-somos" className="link-underline hover:text-[#0C499E] transition-colors pb-1">Quiénes Somos</a>
               <a href="#servicios" className="link-underline hover:text-[#0C499E] transition-colors pb-1">Servicios</a>
               <a href="#testimonios" className="link-underline hover:text-[#0C499E] transition-colors pb-1">Testimonios</a>
               <a href="#faq" className="link-underline hover:text-[#0C499E] transition-colors pb-1">Preguntas Frecuentes</a>
               <a href="#contacto" className="link-underline hover:text-[#0C499E] transition-colors pb-1">Contáctenos</a>
            </nav>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[80px] z-40 bg-white shadow-xl border-t-2 border-[#0C499E] md:hidden overflow-hidden"
          >
            <nav className="flex flex-col text-sm font-bold text-slate-700 uppercase tracking-wide">
              {['Quienes Somos', 'Servicios', 'Testimonios', 'FAQ', 'Contacto'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setMobileMenu(false)} className="px-6 py-4 border-b border-slate-100 hover:bg-[#0C499E] hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <div className="p-6 bg-slate-50 flex flex-col gap-4 border-t-2 border-slate-200">
               <a href="tel:012761763" className="flex items-center gap-3 text-slate-800 font-bold border-2 border-slate-200 p-3 hover:bg-white">
                  <FaPhoneAlt className="text-[#0C499E]" /> Central: {PHONE_CENTRAL}
               </a>
               <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-800 font-bold border-2 border-slate-200 p-3 hover:bg-white">
                  <FaWhatsapp className="text-[#25D366] text-xl" /> Soporte: {PHONE_SOPORTE}
               </a>
               <a href="#contacto" onClick={() => setMobileMenu(false)} className="w-full text-center bg-[#F6A71B] text-[#0C499E] border-2 border-[#162440] py-4 font-bold tracking-widest uppercase hover-sharp-shadow">
                 COTIZAR SERVICIO
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO BANNER (Parallax) */}
      <section className="relative h-[600px] md:h-[700px] w-full group bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-fixed bg-cover bg-center border-b-8 border-[#F6A71B]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C499E]/95 to-black/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-blueprint-dark opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-left border-l-8 border-[#F6A71B] pl-6 md:pl-10 relative">
            
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight uppercase">
              Tecnología y<br/>
              Precisión <span className="text-[#F6A71B]">In-House</span>.
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-lg font-medium leading-relaxed bg-black/20 p-4 border-l-2 border-white/30 backdrop-blur-sm">
              Solucionamos cualquier incidencia mecánica o electrónica en tus equipos de lavandería industrial para que tu negocio nunca se detenga.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <a href="#contacto" className="inline-flex items-center justify-center bg-[#F6A71B] hover:bg-[#e09413] text-[#0C499E] font-bold px-10 py-5 text-sm uppercase tracking-[0.2em] hover-sharp-shadow border-2 border-transparent">
                Solicitar Cotización
              </a>
              <a href={WHATSAPP_EMERGENCY} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 border-4 border-white text-white hover:bg-white hover:text-[#0C499E] font-bold px-8 py-5 text-sm uppercase tracking-widest transition-all">
                <FaExclamationTriangle className="text-lg" /> Emergencia 24/7
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUIENES SOMOS (With Tech Pattern) */}
      <section id="quienes-somos" className="py-20 md:py-32 bg-white relative bg-tech-pattern border-b-2 border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#0C499E] text-white px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-[#0C499E] hover-sharp-shadow">
              Nosotros
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-800 mb-8 leading-tight tracking-tighter uppercase uppercase">
              Sermisa <span className="text-[#0C499E]">Técnicos</span><br/>Línea Industrial
            </h2>
            <div className="bg-white p-8 border-4 border-slate-100 shadow-[8px_8px_0_0_#F6A71B]">
               <p className="text-slate-800 font-bold mb-6 text-lg leading-relaxed border-l-4 border-[#0C499E] pl-4 uppercase tracking-wide">
                 +15 años reparando y manteniendo tecnología de lavado industrial y comercial.
               </p>
               <p className="text-slate-600 mb-6 leading-relaxed text-base font-medium">
                 Trabajamos con el objetivo de cubrir las más altas exigencias del sector hotelero, hospitalario y de lavanderías. Ofrecemos servicios integrales de instalación, evaluación electrónica, tableros de control y suministro de repuestos originales.
               </p>
               <p className="text-xl font-bold text-[#0C499E] italic border-t-2 border-dashed border-slate-200 pt-6 mt-4">
                 "... más que un servicio somos una solución técnica total."
               </p>
            </div>
            <div className="mt-10">
              <a href="#contacto" className="inline-block bg-[#162440] hover:bg-[#0C499E] text-white font-bold px-10 py-5 text-sm flex items-center gap-3 uppercase tracking-[0.2em] hover-sharp-shadow-blue w-fit">
                <FaWrench /> Conectar Técnico
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2 px-4 md:px-0 relative group">
             <div className="relative z-10">
                <div className="absolute top-[-30px] right-[-30px] w-64 h-64 border-8 border-slate-200 -z-10 group-hover:border-[#F6A71B] transition-colors duration-500"></div>
                <div className="absolute bottom-[-30px] left-[-30px] w-64 h-64 border-8 border-[#0C499E] -z-10 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Técnico trabajando" 
                  className="w-[85%] h-auto object-cover border-4 border-white shadow-xl translate-x-12 -translate-y-12 absolute z-0 opacity-100 right-0 top-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Técnico reparando placa" 
                  className="w-[90%] h-auto object-cover border-4 border-white shadow-[12px_12px_0_0_#162440] relative z-10 mt-20 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>
        </div>
      </section>

      {/* MARCAS SECTION (Sharp borders) */}
      <section className="py-12 bg-[#162440] border-y-[12px] border-[#0C499E] relative z-20 overflow-hidden text-white/50">
         <div className="absolute inset-0 bg-blueprint-dark opacity-10"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <p className="text-center text-xs font-bold text-white uppercase tracking-[0.3em] mb-10 w-fit mx-auto border-b border-white pb-2">Especialistas Multimarca</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 transition-opacity">
               <span className="text-2xl font-bold font-serif italic hover:text-white transition-colors cursor-default">Wascomat</span>
               <span className="text-2xl font-black uppercase tracking-widest hover:text-white transition-colors cursor-default">Dexter</span>
               <span className="text-3xl font-bold hover:text-white transition-colors cursor-default">BRAUN</span>
               <span className="text-2xl font-medium tracking-tight hover:text-white transition-colors cursor-default">Westinghouse</span>
               <span className="text-4xl font-black hover:text-[#F6A71B] transition-colors cursor-default">ADC</span>
               <span className="text-2xl font-bold tracking-[0.2em] hover:text-white transition-colors cursor-default">MAYTAG</span>
               <span className="text-2xl font-black uppercase tracking-wider font-serif hover:text-white transition-colors cursor-default">SPEED QUEEN</span>
            </div>
         </div>
      </section>

      {/* BANNER REASSURANCE (Parallax) */}
      <section className="py-24 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-fixed bg-cover bg-center relative border-b-2 border-white">
        <div className="absolute inset-0 bg-[#0C499E]/90 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FaWrench className="text-[#F6A71B] text-5xl mx-auto mb-8 animate-bounce" />
          <h2 className="text-3xl md:text-5xl text-white font-black mb-8 leading-tight tracking-tight uppercase">
            "Cada diagnóstico preciso es una garantía para <br className="hidden md:block"/> la continuidad de tu negocio."
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
             <span className="bg-[#162440] text-white px-4 py-2 font-bold tracking-widest text-sm uppercase">Más de 15 años exp.</span>
             <span className="bg-[#162440] text-white px-4 py-2 font-bold tracking-widest text-sm uppercase">Repuestos 100% Originales</span>
             <span className="bg-[#162440] text-white px-4 py-2 font-bold tracking-widest text-sm uppercase">Garantía In-House</span>
          </div>
          <a href="#contacto" className="inline-block bg-[#F6A71B] text-[#162440] px-10 py-5 font-black uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-[#0C499E] hover-sharp-shadow shadow-xl border-4 border-transparent hover:border-[#162440]">
            AGENDAR REVISIÓN
          </a>
        </div>
      </section>

      {/* NUESTROS SERVICIOS */}
      <section id="servicios" className="py-32 bg-slate-50 border-b-2 border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left md:text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-6 tracking-tighter uppercase">Nuestros <span className="text-[#0C499E] border-b-8 border-[#F6A71B]">Sistemas</span></h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mt-10 p-6 bg-white border-l-4 border-[#0C499E] md:border-l-0 md:bg-transparent md:p-0">
              Personal certificado en reparación <span className="text-slate-800 font-bold bg-[#F6A71B]/20">mecánica y de placas electrónicas</span>. Mantenimiento intensivo para calderas, contactores de potencia y sistemas de presión.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Box 1: Lavadoras */}
            <div id="lavadoras" className="bg-[#162440] text-white p-12 text-left flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:-translate-y-4 hover:shadow-[12px_12px_0_0_#F6A71B] border-4 border-transparent hover:border-[#F6A71B]">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <span className="text-9xl font-black italic">01</span>
              </div>
              <div className="relative z-10 w-full">
                <div className="mb-10 w-20 h-20 bg-white/10 flex items-center justify-center p-4 border border-white/20 group-hover:bg-[#F6A71B] group-hover:border-[#F6A71B] transition-colors duration-500">
                  <img src="https://cdn-icons-png.flaticon.com/512/3003/3003984.png" alt="Lavadora Icon" className="w-full h-full invert opacity-100 group-hover:brightness-0 transition-all duration-500" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-white tracking-tight uppercase">Lavadoras<br/>Extractores</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-10 text-lg">
                  Calibración de variadores de frecuencia, rodamientos, retenes y válvulas de desagüe de alto caudal.
                </p>
              </div>
              <a href="#contacto" className="inline-block border-2 border-white/30 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] transition-all hover:bg-white hover:border-white hover:text-[#162440] w-fit">
                Consultar Ficha
              </a>
            </div>

            {/* Box 2: Secadoras */}
            <div id="secadoras" className="bg-[#1a2d4f] text-white p-12 text-left flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:-translate-y-4 hover:shadow-[12px_12px_0_0_#F6A71B] border-4 border-transparent hover:border-[#F6A71B]">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <span className="text-9xl font-black italic">02</span>
              </div>
              <div className="relative z-10 w-full">
                <div className="mb-10 w-20 h-20 bg-white/10 flex items-center justify-center p-4 border border-white/20 group-hover:bg-[#F6A71B] group-hover:border-[#F6A71B] transition-colors duration-500">
                  <img src="https://cdn-icons-png.flaticon.com/512/2916/2916304.png" alt="Secadora Icon" className="w-full h-full invert opacity-100 group-hover:brightness-0 transition-all duration-500" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-white tracking-tight uppercase">Secadoras<br/>Industriales</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-10 text-lg">
                  Revisión de quemadores de gas, resistencia eléctrica, termostatos de seguridad y motores extractores.
                </p>
              </div>
              <a href="#contacto" className="inline-block border-2 border-white/30 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] transition-all hover:bg-white hover:border-white hover:text-[#162440] w-fit">
                Consultar Ficha
              </a>
            </div>

            {/* Box 3: Planchas (Orange highlight) */}
            <div id="planchas" className="bg-[#F6A71B] text-[#162440] p-12 text-left flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:-translate-y-4 hover:shadow-[12px_12px_0_0_#162440] border-4 border-[#162440]">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <span className="text-9xl font-black italic">03</span>
              </div>
              <div className="relative z-10 w-full">
                <div className="mb-10 w-20 h-20 bg-[#162440] flex items-center justify-center p-4 group-hover:scale-110 transition-transform duration-500">
                  <FaWrench className="w-8 h-8 text-[#F6A71B]" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-[#162440] tracking-tight uppercase">Planchas y<br/>Calandrias</h3>
                <p className="text-[#162440]/80 font-bold leading-relaxed mb-10 text-lg">
                   Mantenimiento de cilindros, cintas y revisión de trampillas de vapor para acabados industriales exigentes.
                </p>
              </div>
              <a href="#contacto" className="bg-[#162440] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-[#162440] border-2 border-[#162440] w-fit">
                Requiere Técnico
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-24 bg-white relative overflow-hidden bg-tech-pattern border-b-2 border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black text-center text-slate-800 mb-6 uppercase tracking-tighter">Impacto <span className="text-[#0C499E] border-b-4 border-[#F6A71B]">Comprobado</span></h2>
            <p className="text-center text-slate-500 mb-16 font-bold uppercase tracking-widest max-w-2xl mx-auto text-sm">Reseñas TÉCNICAS VERIFICADAS.</p>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { name: "Ing. Carlos Mendoza", empresa: "Lavandería Express Service", txt: "Teníamos 2 secadoras paradas por fallo en placa madre. Los contacté por la tarde y al mediodía siguiente tenían las placas reparadas y calibradas. Tolerancia cero a las demoras." },
                  { name: "Jefe de Mantenimiento", empresa: "Hotel Casa Andina", txt: "Proveedor indispensable para las calandrias de vapor. Rápida lectura de diagramas eléctricos y repuestos listos. Operación reactivada en temporada alta." },
                  { name: "Operaciones Generales", empresa: "Clínica Local", txt: "Una fuga severa en extractor bloqueó nuestros procesos el domingo. Su equipo de intervención llegó equipado y anuló el fallo de retén en 2 horas." }
               ].map((testimonio, i) => (
                  <div key={i} className="bg-white p-10 border-4 border-slate-200 transition-all hover:border-[#0C499E] relative pt-14 group">
                     <div className="absolute -top-6 left-10 bg-[#0C499E] px-4 py-2 border-2 border-slate-200 text-[#F6A71B] flex gap-1 group-hover:-translate-y-2 transition-transform">
                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                     </div>
                     <p className="text-slate-700 mb-8 font-medium leading-relaxed text-lg border-l-4 border-slate-200 pl-4 group-hover:border-[#F6A71B] transition-colors">"{testimonio.txt}"</p>
                     <div className="border-t-2 border-dashed border-slate-200 pt-6 mt-auto">
                        <h4 className="font-black text-[#162440] uppercase tracking-wide">{testimonio.name}</h4>
                        <p className="text-xs font-bold text-[#0C499E] uppercase tracking-widest mt-1">{testimonio.empresa}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* FAQS */}
      <section id="faq" className="py-24 bg-slate-50 border-b-8 border-[#0C499E]">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <span className="text-xs font-black text-[#F6A71B] uppercase tracking-[0.2em] bg-[#162440] px-4 py-2">Consultas Técnicas</span>
               <h2 className="text-4xl md:text-5xl font-black text-[#162440] mt-8 uppercase tracking-tighter">Base de Conocimiento</h2>
            </div>

            <div className="space-y-4">
               {[
                  { q: "TIEMPOS / ¿Cuánto demora el arribo frente a emergencias?", a: "Para planta industrial o comercial en Lima, despachamos técnicos en menos de 90 minutos con furgoneta equipada con pañol de repuestos básicos." },
                  { q: "COMPONENTES / ¿El reemplazo de motores o placas es original?", a: "Todo componente electrónico, contactor, motor o variador es importado 100% original según la marca (Speed Queen, Maytag, etc.) con sus debidos certificados." },
                  { q: "PRESUPUESTO / ¿El diagnóstico técnico tiene recargo final?", a: "La viabilidad del equipo se tasa in-situ. El coste de la evaluación inicial es nulo si autoriza y prosigue con la reparación planificada en nuestra orden de trabajo." },
                  { q: "LEGAL / ¿Proporcionan protocolos y firmas certificadas?", a: "Por supuesto. Cada intervención crítica finaliza con actas de operatividad, garantía escrita del componente reparado y factura corporativa." }
               ].map((faq, i) => (
                  <div key={i} className="bg-white border-2 border-slate-200 hover:border-[#0C499E] transition-colors">
                     <button 
                        onClick={() => toggleFaq(i)}
                        className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors focus:outline-none"
                     >
                        <span className="font-black text-slate-800 pr-4 tracking-wide">{faq.q}</span>
                        <FaChevronDown className={`text-[#0C499E] transition-transform duration-300 shrink-0 ${activeFaq === i ? 'rotate-180' : ''}`} />
                     </button>
                     <AnimatePresence>
                        {activeFaq === i && (
                           <motion.div 
                              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                              className="px-8 pb-8 text-slate-600 font-medium leading-relaxed pt-4 border-t-2 border-slate-100 bg-slate-50"
                           >
                              {faq.a}
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CONTACT FORM SECTION (Brutalist Form) */}
      <section id="contacto" className="py-24 bg-white relative bg-tech-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-5 gap-0 border-8 border-slate-100 bg-white shadow-2xl">
               
               {/* Contact Form Details Box */}
               <div className="lg:col-span-2 bg-blueprint-dark p-10 md:p-14 text-white flex flex-col justify-between relative border-r-4 border-slate-100 lg:border-r-0 lg:border-r-8 lg:border-[#F6A71B]">
                  <div className="relative z-10 h-full flex flex-col">
                     <div className="mb-12 border-b-2 border-white/20 pb-8">
                        <span className="text-[#F6A71B] font-black uppercase tracking-[0.3em] text-xs">Contacto Directo</span>
                        <h3 className="text-4xl font-black mt-4 uppercase">Mesa de <br/>Ayuda</h3>
                     </div>
                     
                     <div className="space-y-10 flex-grow">
                        <div className="flex items-start gap-4">
                           <div className="bg-[#F6A71B] p-4 text-[#162440] font-black"><FaPhoneAlt className="text-xl"/></div>
                           <div>
                              <p className="text-xs text-white/50 font-black uppercase tracking-[0.2em] mb-1">Central Operativa</p>
                              <a href={`tel:${PHONE_CENTRAL}`} className="text-2xl font-black hover:text-[#F6A71B] transition-colors">{PHONE_CENTRAL}</a>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="bg-[#25D366] p-4 text-white font-black"><FaWhatsapp className="text-xl"/></div>
                           <div>
                              <p className="text-xs text-white/50 font-black uppercase tracking-[0.2em] mb-1">Despacho Urgencias</p>
                              <a href={WHATSAPP_EMERGENCY} target="_blank" rel="noreferrer" className="text-2xl font-black hover:text-[#25D366] transition-colors">{PHONE_SOPORTE}</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Form Layout */}
               <div className="lg:col-span-3 bg-white p-10 md:p-14">
                  <h3 className="text-3xl font-black text-[#162440] mb-10 pb-4 border-b-4 border-slate-200 uppercase tracking-tighter">Ticket de Reparación</h3>
                  
                  {formStatus === 'success' ? (
                     <div className="bg-[#F6A71B]/10 border-4 border-[#F6A71B] text-slate-800 p-8 flex items-start gap-6">
                        <FaCheckCircle className="text-4xl text-[#F6A71B] mt-1" />
                        <div>
                           <h4 className="font-black text-2xl mb-2 uppercase">Ticket Ingresado</h4>
                           <p className="font-medium text-lg leading-relaxed">Nuestra central técnica procesará los datos. Un responsable llamará a su contacto en menos de 10 min. Para S.O.S., use WhatsApp.</p>
                        </div>
                     </div>
                  ) : (
                     <form onSubmit={handleFormSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                           <div>
                              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Empresa / RUC *</label>
                              <input required type="text" className="w-full bg-slate-50 border-2 border-slate-200 px-5 py-4 focus:outline-none focus:border-[#0C499E] focus:bg-white text-lg font-medium transition-colors" placeholder="Denominación..." />
                           </div>
                           <div>
                              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Teléfono de Cont. *</label>
                              <input required type="tel" className="w-full bg-slate-50 border-2 border-slate-200 px-5 py-4 focus:outline-none focus:border-[#0C499E] focus:bg-white text-lg font-medium transition-colors" placeholder="Línea directa..." />
                           </div>
                        </div>
                        
                        <div>
                           <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Maquinaria Afectada *</label>
                           <div className="relative">
                              <select required className="w-full bg-slate-50 border-2 border-slate-200 px-5 py-4 focus:outline-none focus:border-[#0C499E] focus:bg-white text-lg font-medium transition-colors appearance-none pr-10">
                                 <option value="" className="text-slate-400">Seleccione el equipo en falla...</option>
                                 <option value="Lavadora">Lavadora Industrial EXT</option>
                                 <option value="Secadora">Secadora Industrial de Tambor</option>
                                 <option value="Plancha">Plancha de Rodillo / Calandria de Vapor</option>
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-slate-400">
                                 <FaChevronDown />
                              </div>
                           </div>
                        </div>

                        <div>
                           <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Análisis Preliminar</label>
                           <textarea rows={4} className="w-full bg-slate-50 border-2 border-slate-200 px-5 py-4 focus:outline-none focus:border-[#0C499E] focus:bg-white text-lg font-medium transition-colors resize-none" placeholder="Indique error en display o anomalía técnica..."></textarea>
                        </div>

                        <button type="submit" className="w-full bg-[#162440] text-white font-black py-6 text-lg uppercase tracking-[0.2em] border-b-4 border-[#0C499E] hover-sharp-shadow-blue transition-all">
                           Generar Orden de Trabajo
                        </button>
                     </form>
                  )}
               </div>
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#10192e] pt-20 pb-10 text-white relative border-t-[16px] border-[#0C499E]">
         <div className="absolute inset-0 bg-tech-pattern opacity-5 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
             
             {/* Info Column */}
             <div className="col-span-1 lg:col-span-1">
                <img 
                  src="https://www.serviciotecnicoyreparacion.com/wp-content/uploads/2024/10/logo-sermisa-tec-color-web-400px.webp" 
                  alt="Sermisa Técnicos" 
                  className="h-14 w-auto brightness-0 invert mx-0 mb-8"
                />
                <p className="text-slate-400 text-sm leading-loose mb-10 font-medium">
                   Soporte técnico exclusivo de nivel 3 para infraestructura de lavandería empresarial. Mantenimiento y prevención 24/7.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F6A71B] hover:border-[#F6A71B] hover:text-[#162440] transition-colors"><FaFacebookF /></a>
                  <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F6A71B] hover:border-[#F6A71B] hover:text-[#162440] transition-colors"><FaInstagram /></a>
                </div>
             </div>

             {/* Links */}
             <div className="col-span-1 lg:col-span-1 flex flex-col pt-4">
                <h4 className="text-lg font-black mb-8 text-white uppercase tracking-widest border-b border-white/10 pb-4">Navegación</h4>
                <div className="flex flex-col gap-4 font-bold text-slate-400">
                  <a href="#quienes-somos" className="hover:text-white hover:translate-x-2 transition-all w-fit">Quiénes Somos</a>
                  <a href="#servicios" className="hover:text-white hover:translate-x-2 transition-all w-fit">Laboratorio / Servicios</a>
                  <a href="#testimonios" className="hover:text-white hover:translate-x-2 transition-all w-fit">Casos de Éxito</a>
                </div>
             </div>

             {/* Contact */}
             <div className="col-span-1 lg:col-span-1 flex flex-col pt-4">
                <h4 className="text-lg font-black mb-8 text-[#F6A71B] uppercase tracking-widest border-b border-white/10 pb-4">Despacho Automático</h4>
                <a href={`tel:${PHONE_CENTRAL}`} className="text-3xl font-black mb-4 hover:text-white transition-colors">{PHONE_CENTRAL}</a>
                <a href={WHATSAPP_EMERGENCY} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 font-bold hover:text-white transition-colors mb-8">
                   <FaWhatsapp className="text-[#25D366] text-2xl" /> (+51) 998 160 326
                </a>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                   Atención nacional sujeta a cotización de viáticos técnicos. <br/>Lima Metropolitana cobertura estándar.
                </p>
             </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-bold pt-8 border-t-2 border-white/10 uppercase tracking-widest gap-4">
            <p>© {new Date().getFullYear()} SERMISA INDUSTRIAL CORP.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Normativa</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATERS (Brutalist WhatsApp button) */}
      <a 
        href={WHATSAPP_URL} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 group flex flex-col items-end gap-2"
      >
        <div className="bg-white border-4 border-[#162440] text-[#162440] p-3 shadow-[8px_8px_0_0_#162440] opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 text-right">
          <p className="font-black text-[10px] uppercase tracking-widest text-[#F6A71B]">Atención 24h</p>
          <p className="text-xs font-bold mt-1">Conectar con Operador</p>
        </div>
        <div className="bg-[#25D366] text-white p-5 shadow-[8px_8px_0_0_#162440] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_0_#162440] transition-all relative border-4 border-[#162440]">
          <FaWhatsapp className="text-5xl" />
          <span className="absolute -top-3 -right-3 w-6 h-6 bg-[#eb3223] border-4 border-[#162440] animate-pulse"></span>
        </div>
      </a>

    </div>
  );
}
