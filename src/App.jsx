import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Bike,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  Clock3,
  FileCheck2,
  HeartHandshake,
  Instagram,
  Landmark,
  LockKeyhole,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  Quote,
  Route,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Timer,
  Truck,
  Users,
  X,
  Zap,
} from 'lucide-react';
import { Suspense, useEffect, useRef, useState } from 'react';

const WHATSAPP_URL =
  'https://wa.me/573170428397?text=Hola%20Sur%20Env%C3%ADa%2C%20quiero%20solicitar%20un%20servicio%20de%20mensajer%C3%ADa.';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Empresas', href: '#empresas' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'Contacto', href: '#contacto' },
];

const services = [
  {
    icon: Bike,
    title: 'Mensajería express puerta a puerta',
    text: 'Recogemos y entregamos documentos, paquetes y diligencias urgentes el mismo día.',
    tag: 'Personas y comercios',
    filter: 'Urgente',
  },
  {
    icon: PackageCheck,
    title: 'Paquetería y encomiendas',
    text: 'Movemos tus envíos con trazabilidad, cuidado y confirmación clara al finalizar.',
    tag: 'Familias y tiendas',
    filter: 'Personas',
  },
  {
    icon: ShoppingBag,
    title: 'Última milla para tiendas online',
    text: 'Entregas locales para Instagram, TikTok Shop y negocios digitales que venden a diario.',
    tag: 'Emprendedores',
    filter: 'Empresas',
  },
  {
    icon: FileCheck2,
    title: 'Radicación de documentos',
    text: 'Gestionamos documentos ante EPS, entidades, notarías, constructoras y oficinas públicas.',
    tag: 'Abogados y EPS',
    filter: 'Empresas',
  },
  {
    icon: Route,
    title: 'Mensajería empresarial fija',
    text: 'Recorridos diarios programados para empresas que necesitan una operación constante.',
    tag: 'Convenios mensuales',
    filter: 'Empresas',
  },
  {
    icon: LockKeyhole,
    title: 'Entrega confidencial',
    text: 'Manejo discreto de documentos legales, clínicos y contables con confirmación segura.',
    tag: 'Clínicas y abogados',
    filter: 'Urgente',
  },
];

const differentiators = [
  {
    icon: HeartHandshake,
    title: 'Diligencias para adultos mayores',
    text: 'Apoyo humano para reclamar medicamentos, fórmulas y realizar trámites bancarios con respeto y paciencia.',
    className: 'md:col-span-2',
  },
  {
    icon: ShieldCheck,
    title: 'Entrega confidencial',
    text: 'Documentos sensibles tratados con reserva, confirmación y cuidado.',
    className: '',
  },
  {
    icon: Clock3,
    title: 'Recorridos empresariales fijos',
    text: 'Rutas diarias o semanales en horarios acordados para reducir carga operativa.',
    className: '',
  },
  {
    icon: Store,
    title: 'Alternativa local a domicilios',
    text: 'Entregas para restaurantes independientes con atención cercana y tarifas justas.',
    className: 'md:col-span-2',
  },
];

const reasons = [
  ['Rapidez comprobada', Timer],
  ['Atención humana real', Users],
  ['Manejo confidencial', LockKeyhole],
  ['Conocimiento local profundo', MapPin],
  ['Precios justos y transparentes', Banknote],
  ['Puntualidad garantizada', BadgeCheck],
];

const companyTypes = [
  'Abogados y estudios jurídicos',
  'Clínicas, EPS, IPS y farmacias',
  'Firmas contables y notarías',
  'Constructoras y comercios locales',
  'Tiendas online y emprendedores',
  'Restaurantes independientes',
];

const steps = [
  ['Nos contactas por WhatsApp', MessageCircle],
  ['Coordinamos recogida', PackageCheck],
  ['Entregamos con confirmación', Check],
  ['Pagas solo por lo que usas', Banknote],
];

const cities = [
  { name: 'Ipiales', note: 'Sede principal', featured: true },
  { name: 'Pasto', note: 'Cobertura activa' },
  { name: 'Pereira', note: 'Rutas disponibles' },
  { name: 'Dosquebradas', note: 'Servicio programado' },
];

const testimonials = [
  {
    name: 'Camilo R.',
    role: 'Abogado independiente',
    quote:
      'Me radican documentos y me confirman cada paso. Para términos urgentes, esa tranquilidad vale mucho.',
  },
  {
    name: 'Laura M.',
    role: 'Emprendedora online',
    quote:
      'Mis entregas locales ya no dependen de favores. Coordinan rápido y mis clientes reciben bien.',
  },
  {
    name: 'Dra. Natalia P.',
    role: 'Clínica privada',
    quote:
      'El manejo de documentos sensibles ha sido serio, puntual y con comunicación directa.',
  },
  {
    name: 'Andrés T.',
    role: 'Restaurante local',
    quote:
      'Nos ayudaron a entregar pedidos sin plataformas costosas. Es práctico y muy local.',
  },
];

function Section({ children, className = '', id }) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function LazySection({ children, minHeight = 320 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '380px' });

  return (
    <div ref={ref} style={{ minHeight: inView ? undefined : minHeight }}>
      {inView ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
}

function Counter({ value, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;

    let frameId;
    const start = performance.now();
    const duration = 1500;

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toLocaleString('es-CO')}
      {suffix}
    </span>
  );
}

function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  ariaLabel,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-4 focus:ring-accent/25';
  const styles =
    variant === 'primary'
      ? 'shimmer bg-accent text-white shadow-blue hover:bg-primary'
      : variant === 'light'
        ? 'bg-white text-primary shadow-premium hover:bg-neutralLight'
        : 'border border-white/18 bg-white/8 text-white backdrop-blur hover:bg-white/14';

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleLogoClick = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-dark/78 shadow-2xl backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
      >
        <a
          href="#inicio"
          onClick={handleLogoClick}
          className="flex items-center gap-3 text-white"
          aria-label="Sur Envía inicio"
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent shadow-blue">
            <PackageCheck size={21} aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-bold tracking-normal">
            Sur Envía
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-200 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href={WHATSAPP_URL} ariaLabel="Solicitar envío por WhatsApp">
            Solicitar envío <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/8 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </nav>

      {open ? (
        <div className="mx-5 mb-4 rounded-3xl border border-white/10 bg-dark/94 p-4 text-white shadow-2xl backdrop-blur-xl md:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-white/8"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={WHATSAPP_URL}
              className="mt-2 w-full"
              ariaLabel="Solicitar envío por WhatsApp desde menú"
            >
              Solicitar envío <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function RiderIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.25 }}
      className="relative mx-auto w-full max-w-[560px]"
      aria-hidden="true"
    >
      <div className="absolute inset-8 rounded-full bg-accent/20 blur-3xl" />
      <svg viewBox="0 0 560 470" role="img" className="relative h-auto w-full">
        <defs>
          <linearGradient
            id="road"
            x1="81"
            x2="470"
            y1="420"
            y2="420"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1E40AF" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient
            id="glass"
            x1="120"
            x2="420"
            y1="60"
            y2="330"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F8FAFC" stopOpacity=".95" />
            <stop offset="1" stopColor="#93C5FD" stopOpacity=".45" />
          </linearGradient>
        </defs>
        <path
          d="M73 322C116 243 154 196 196 119c28-51 67-72 111-23 49 55 82 76 133 127 41 41 56 86 22 126-40 47-118 54-214 54-102 0-211-13-175-81Z"
          fill="url(#glass)"
          opacity=".13"
        />
        <path
          d="M66 353c55-50 83-122 133-122 52 0 75 57 119 57 54 0 65-75 122-92 35-10 60 4 76 21v170H66v-34Z"
          fill="#172554"
        />
        <path
          d="M93 306c37-34 56-83 90-83 36 0 51 39 81 39 36 0 44-51 83-63 23-7 41 3 52 15v116H93v-24Z"
          fill="#1E40AF"
          opacity=".65"
        />
        <path
          d="M84 390h388"
          stroke="url(#road)"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          d="M126 411h305"
          stroke="#E0F2FE"
          strokeOpacity=".38"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="26 24"
        />
        <rect
          x="108"
          y="152"
          width="61"
          height="92"
          rx="10"
          fill="#E0F2FE"
          opacity=".9"
        />
        <rect
          x="188"
          y="121"
          width="71"
          height="123"
          rx="12"
          fill="#BFDBFE"
          opacity=".76"
        />
        <rect
          x="282"
          y="157"
          width="57"
          height="87"
          rx="10"
          fill="#DBEAFE"
          opacity=".82"
        />
        <rect
          x="366"
          y="107"
          width="79"
          height="137"
          rx="13"
          fill="#93C5FD"
          opacity=".68"
        />
        {[123, 143, 205, 229, 302, 384, 414].map((x) => (
          <path
            key={x}
            d={`M${x} 174h18M${x} 198h18M${x} 222h18`}
            stroke="#1E40AF"
            strokeOpacity=".42"
            strokeWidth="5"
            strokeLinecap="round"
          />
        ))}
        <motion.g
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <circle
            cx="210"
            cy="360"
            r="39"
            fill="#0F172A"
            stroke="#60A5FA"
            strokeWidth="9"
          />
          <circle
            cx="386"
            cy="360"
            r="39"
            fill="#0F172A"
            stroke="#60A5FA"
            strokeWidth="9"
          />
          <path
            d="M213 360h73l35-70h-67l-41 70Zm73 0h100l-44-86"
            fill="none"
            stroke="#E0F2FE"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M318 288l36-30h43"
            stroke="#E0F2FE"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M281 289h-47"
            stroke="#E0F2FE"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path d="M316 243l-28 48 43 12 26-51" fill="#3B82F6" />
          <circle cx="329" cy="219" r="22" fill="#BFDBFE" />
          <path d="M309 210c12-26 44-18 51 2-13 0-31-2-51-2Z" fill="#1E40AF" />
          <path
            d="M351 245l41 26"
            stroke="#BFDBFE"
            strokeWidth="13"
            strokeLinecap="round"
          />
          <path
            d="M286 290l-38 19"
            stroke="#BFDBFE"
            strokeWidth="13"
            strokeLinecap="round"
          />
          <rect x="356" y="203" width="75" height="54" rx="12" fill="#F8FAFC" />
          <path
            d="M376 229h34"
            stroke="#3B82F6"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </motion.g>
        <motion.g
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M91 111h52"
            stroke="#60A5FA"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M75 135h79"
            stroke="#BFDBFE"
            strokeWidth="8"
            strokeLinecap="round"
            opacity=".8"
          />
          <path
            d="M441 80h46"
            stroke="#60A5FA"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark px-5 pb-20 pt-32 text-white sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/26 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-accent/14 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(248,250,252,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(248,250,252,.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur"
          >
            <Zap size={16} className="text-accent" aria-hidden="true" />
            Tu envío, nuestra responsabilidad.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, delay: 0.08 }}
            className="font-display text-5xl font-bold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl"
          >
            Mensajería inteligente en el sur de Colombia.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            Entregas express, gestión de documentos y logística para empresas en
            Ipiales, Pasto y más. Rápido, confiable y humano.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              href={WHATSAPP_URL}
              className="px-6 py-4"
              ariaLabel="Solicitar servicio por WhatsApp"
            >
              <MessageCircle size={19} aria-hidden="true" /> Solicitar por
              WhatsApp
            </Button>
            <Button
              href="#servicios"
              variant="dark"
              className="px-6 py-4"
              ariaLabel="Ver servicios de Sur Envía"
            >
              Ver servicios <ChevronRight size={19} aria-hidden="true" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {['Mismo día', 'Servicio empresarial', 'Confidencial'].map(
              (badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-semibold text-slate-100 backdrop-blur"
                >
                  <Check size={16} className="text-accent" aria-hidden="true" />{' '}
                  {badge}
                </span>
              ),
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, delay: 0.4 }}
            className="mt-10 grid max-w-2xl grid-cols-3 gap-3"
          >
            {[
              { label: 'entregas', value: 200, prefix: '+' },
              { label: 'desde', value: 5000, prefix: '$' },
              { label: 'cobertura local', value: 100, suffix: '%' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur"
              >
                <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="mt-1 text-xs font-semibold uppercase text-slate-400 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-12 z-10 hidden rounded-3xl border border-white/12 bg-white/10 p-4 text-sm font-bold text-white shadow-2xl backdrop-blur-xl sm:block">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent">
                <Landmark size={19} aria-hidden="true" />
              </span>
              Entregas a domicilio
            </div>
          </div>
          <div className="absolute bottom-12 right-0 z-10 hidden rounded-3xl border border-white/12 bg-white/10 p-4 text-sm font-bold text-white shadow-2xl backdrop-blur-xl sm:block">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary">
                <Truck size={19} aria-hidden="true" />
              </span>
              Confirmación al entregar
            </div>
          </div>
          <RiderIllustration />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const filters = ['Empresas', 'Personas', 'Urgente'];

  return (
    <Section id="servicios" className="bg-neutralLight">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase text-accent">
          Servicios principales
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-normal text-dark sm:text-5xl">
          Lo que necesitas mover, hoy.
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Servicios pensados para empresas, profesionales y comercios que
          necesitan velocidad sin perder trato humano.
        </p>
      </Reveal>

      <Reveal className="mt-8 flex justify-center gap-2" delay={0.08}>
        {filters.map((filter) => (
          <span
            key={filter}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-textMain shadow-sm"
          >
            {filter}
          </span>
        ))}
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="group h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-accent/60 hover:shadow-premium"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-13 w-13 place-items-center rounded-2xl bg-blue-50 text-primary transition group-hover:bg-accent group-hover:text-white">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    {service.filter}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-normal text-dark">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  {service.tag} <ArrowRight size={15} aria-hidden="true" />
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function Differentiators() {
  return (
    <Section className="bg-white">
      <Reveal className="max-w-3xl">
        <span className="text-sm font-bold uppercase text-accent">
          Servicios diferenciadores
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-normal text-dark sm:text-5xl">
          Más que mensajería. Soluciones reales para tu día a día.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {differentiators.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal
              key={item.title}
              delay={index * 0.06}
              className={item.className}
            >
              <motion.article
                whileHover={{ y: -6 }}
                className="relative h-full overflow-hidden rounded-[30px] border border-slate-200 bg-gradient-to-br from-white to-blue-50 p-7 shadow-sm"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-accent/12 blur-2xl" />
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-dark text-white">
                  <Icon size={25} aria-hidden="true" />
                </span>
                <h3 className="relative mt-7 font-display text-2xl font-bold tracking-normal text-dark">
                  {item.title}
                </h3>
                <p className="relative mt-3 max-w-xl leading-7 text-slate-600">
                  {item.text}
                </p>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function Why() {
  return (
    <Section className="bg-neutralLight">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase text-accent">
          Por qué Sur Envía
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-normal text-dark sm:text-5xl">
          Confianza local con estándar profesional.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(([reason, Icon], index) => (
          <Reveal key={reason} delay={index * 0.04}>
            <div className="flex h-full items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-primary">
                <Icon size={22} aria-hidden="true" />
              </span>
              <p className="font-display text-lg font-bold tracking-normal text-dark">
                {reason}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function B2B() {
  return (
    <Section id="empresas" className="bg-white">
      <div className="grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
        <Reveal>
          <span className="text-sm font-bold uppercase text-accent">
            Para empresas
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-normal text-dark sm:text-5xl">
            Tu logística, tercerizada con profesionalismo.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Reducimos costos operativos con recorridos diarios, mensajería fija
            y entregas bajo demanda. Tu equipo se enfoca en vender y atender;
            Sur Envía se encarga de moverlo bien.
          </p>
          <Button
            href={WHATSAPP_URL}
            className="mt-8 px-7 py-4"
            ariaLabel="Solicitar convenio empresarial por WhatsApp"
          >
            Solicita un convenio empresarial{' '}
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-[32px] border border-slate-200 bg-dark p-6 text-white shadow-premium">
            <div className="flex items-center gap-3 border-b border-white/10 pb-5">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent">
                <BriefcaseBusiness size={23} aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-xl font-bold tracking-normal">
                  Empresas que pueden contratar
                </p>
                <p className="text-sm text-slate-400">
                  Convenios mensuales o servicios por demanda
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {companyTypes.map((type) => (
                <div
                  key={type}
                  className="flex items-center gap-3 rounded-2xl bg-white/7 p-4 text-sm font-semibold text-slate-100"
                >
                  <Check size={17} className="text-accent" aria-hidden="true" />{' '}
                  {type}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section className="bg-neutralLight">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase text-accent">
          Cómo funciona
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-normal text-dark sm:text-5xl">
          Simple, directo y confirmado.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-4">
        {steps.map(([step, Icon], index) => (
          <Reveal key={step} delay={index * 0.07}>
            <div className="relative h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-bold tracking-normal text-blue-100">
                  0{index + 1}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white">
                  <Icon size={22} aria-hidden="true" />
                </span>
              </div>
              <p className="mt-8 font-display text-xl font-bold tracking-normal text-dark">
                {step}
              </p>
              {index < steps.length - 1 ? (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-accent/50 md:block" />
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Coverage() {
  return (
    <Section id="cobertura" className="bg-white">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase text-accent">
          Cobertura
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-normal text-dark sm:text-5xl">
          Nos movemos donde tu negocio nos necesita.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cities.map((city, index) => (
          <Reveal key={city.name} delay={index * 0.05}>
            <div
              className={`h-full rounded-3xl border p-6 shadow-sm ${city.featured ? 'border-accent bg-primary text-white' : 'border-slate-200 bg-neutralLight text-dark'}`}
            >
              <div className="flex items-center justify-between">
                <MapPin
                  size={26}
                  className={city.featured ? 'text-white' : 'text-primary'}
                  aria-hidden="true"
                />
                {city.featured ? (
                  <Star
                    size={20}
                    className="fill-white text-white"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
              <h3 className="mt-7 font-display text-2xl font-bold tracking-normal">
                {city.name}
              </h3>
              <p
                className={`mt-2 font-semibold ${city.featured ? 'text-blue-100' : 'text-slate-600'}`}
              >
                {city.note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 text-center">
        <p className="text-lg font-semibold text-slate-600">
          ¿Tu ciudad no está? Escríbenos, ampliamos cobertura.
        </p>
      </Reveal>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section className="bg-neutralLight">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase text-accent">
          Testimonios
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-normal text-dark sm:text-5xl">
          Clientes que necesitan cumplir, no improvisar.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.05}>
            <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Quote size={34} className="text-blue-100" aria-hidden="true" />
              <p className="mt-5 leading-7 text-slate-600">“{item.quote}”</p>
              <div className="mt-7 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-accent font-display font-bold text-white">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-dark">{item.name}</p>
                  <p className="text-sm font-semibold text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-dark px-5 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,.32),transparent_34%),radial-gradient(circle_at_80%_80%,rgba(30,64,175,.28),transparent_32%)]" />
      <Reveal className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-bold text-blue-100 backdrop-blur">
          <Sparkles size={16} aria-hidden="true" /> Atención directa por
          WhatsApp
        </span>
        <h2 className="mt-6 font-display text-4xl font-bold tracking-normal sm:text-6xl">
          Tu primer envío está a un mensaje de distancia.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Sin contratos. Sin complicaciones. Solo resultados.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            href={WHATSAPP_URL}
            className="px-8 py-4"
            ariaLabel="Contactar por WhatsApp"
          >
            <MessageCircle size={20} aria-hidden="true" /> WhatsApp
          </Button>
          <Button
            href={WHATSAPP_URL}
            variant="dark"
            className="px-8 py-4"
            ariaLabel="Solicitar servicio de mensajería"
          >
            Solicitar servicio <ArrowRight size={20} aria-hidden="true" />
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <a
            href="#inicio"
            className="flex items-center gap-3"
            aria-label="Sur Envía inicio"
          >
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent">
              <PackageCheck size={21} aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-bold tracking-normal">
              Sur Envía
            </span>
          </a>
          <p className="mt-4 max-w-sm text-slate-400">
            Tu envío, nuestra responsabilidad.
          </p>
          <p className="mt-6 text-sm text-slate-500">
            Copyright 2025 Sur Envía · Ipiales, Nariño
          </p>
        </div>
        <div>
          <p className="font-display font-bold tracking-normal">
            Links rápidos
          </p>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-400 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-display font-bold tracking-normal">Contacto</p>
          <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-400">
            <a
              className="flex items-center gap-2 hover:text-white"
              href={WHATSAPP_URL}
              aria-label="WhatsApp de Sur Envía"
            >
              <Phone size={16} aria-hidden="true" /> WhatsApp
            </a>
            <a
              className="flex items-center gap-2 hover:text-white"
              href="tel:+573170428397"
              aria-label="Llamar a Sur Envía"
            >
              <Phone size={16} aria-hidden="true" /> 3170428397
            </a>
            <a
              className="flex items-center gap-2 hover:text-white"
              href="https://surenvia.co"
              aria-label="Sitio web surenvia.co"
            >
              <Building2 size={16} aria-hidden="true" /> surenvia.co
            </a>
            <a
              className="flex items-center gap-2 hover:text-white"
              href="https://instagram.com/"
              aria-label="Instagram de Sur Envía"
            >
              <Instagram size={16} aria-hidden="true" /> Redes sociales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div
      id="inicio"
      className="min-h-screen overflow-x-hidden bg-neutralLight font-body"
    >
      <Navbar />
      <main>
        <Hero />
        <Services />
        <LazySection>
          <Differentiators />
        </LazySection>
        <LazySection>
          <Why />
        </LazySection>
        <LazySection>
          <B2B />
        </LazySection>
        <LazySection>
          <HowItWorks />
        </LazySection>
        <LazySection>
          <Coverage />
        </LazySection>
        <LazySection>
          <Testimonials />
        </LazySection>
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
