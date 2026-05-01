import { ReactNode } from 'react';

interface Product {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  compatibility: string[];
  icon: ReactNode;
}

const products: Product[] = [
  {
    id: 'coil',
    badge: 'Под катушку',
    badgeColor: 'bg-primary text-white',
    title: 'F8CV под катушку зажигания',
    subtitle: 'Электронный модуль зажигания (без трамблёра)',
    description:
      'Версия двигателя с индивидуальными катушками зажигания. Устанавливается на поздние модели Daewoo Matiz и Chevrolet Spark. Более надёжная и современная система зажигания.',
    features: [
      'Электронный модуль зажигания',
      'Индивидуальные катушки на каждый цилиндр',
      'Улучшенная стабильность работы',
      'Не требует обслуживания трамблёра',
    ],
    compatibility: ['Daewoo Matiz (2000–2015)', 'Chevrolet Spark (2005–2010)', 'Daewoo Tico (некоторые модификации)'],
    icon: (
      <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'distributor',
    badge: 'Под трамблёр',
    badgeColor: 'bg-accent text-white',
    title: 'F8CV под трамблёр',
    subtitle: 'Классическая система зажигания с распределителем',
    description:
      'Версия двигателя с механическим трамблёром (распределителем зажигания). Устанавливается на ранние модели Daewoo Matiz. Проверенная временем конструкция.',
    features: [
      'Механический распределитель зажигания',
      'Классическая проверенная схема',
      'Простота обслуживания и ремонта',
      'Доступные запчасти для трамблёра',
    ],
    compatibility: ['Daewoo Matiz (1998–2005)', 'Daewoo Tico', 'Chevrolet Spark (ранние версии)'],
    icon: (
      <svg className="w-16 h-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

/* MAX Messenger icon — настоящая иконка приложения */
function MaxIcon({ className }: { className?: string }) {
  return (
    <img
      src="https://static.vecteezy.com/system/resources/previews/069/991/653/large_2x/max-app-icon-on-a-transparent-background-free-png.png"
      alt="MAX"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

const MAX_URL = 'https://max.ru/u/f9LHodD0cOLqAXpgA53WqMtakiGF0eK1GAp67QiTkmHbtmUjt9s7_BVCaEo';
const TELEGRAM_URL = 'https://t.me/+79382060824';

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.658-.643.136-.953l11.566-4.458c.538-.196 1.006.128.832.939z" />
    </svg>
  );
}

export default function Products() {
  return (
    <section id="products" className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">Выберите свой вариант двигателя</h2>
          <p className="text-text-secondary mt-3 max-w-2xl mx-auto">
            Двигатель F8CV выпускался в двух модификациях — с разной системой зажигания. Убедитесь, что выбираете нужный вариант для вашего автомобиля.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Badge & Icon */}
              <div className="flex items-start justify-between mb-5">
                <span className={`text-xl font-bold px-5 py-2 rounded-full ${p.badgeColor}`}>{p.badge}</span>
                {p.icon}
              </div>
              <p className="text-4xl font-bold text-[#1d4ed8] bg-bg-light py-3 px-4 rounded-xl inline-block mb-4"> 75 000 ₽ </p>
 
              <h3 className="text-xl font-bold text-text">{p.title}</h3>
              <p className="text-sm text-text-secondary mt-1">{p.subtitle}</p>
              <p className="text-sm text-text-secondary mt-3 leading-relaxed">{p.description}</p>

              {/* Features */}
              <div className="mt-5">
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-2">Особенности</p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text">
                      <svg className="w-4 h-4 text-green mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compatibility */}
              <div className="mt-5">
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-2">Совместимость</p>
                <div className="flex flex-wrap gap-2">
                  {p.compatibility.map((c) => (
                    <span key={c} className="bg-[#ffc107] text-text text-xs font-medium px-2.5 py-1 rounded-lg border border-border">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA — только звонок и MAX мессенджер */}
              <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+79382060824"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary-dark transition text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Позвонить
                </a>
                <a
                  href={MAX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold py-3 rounded-xl hover:bg-primary hover:text-white transition text-sm"
                >
                  <MaxIcon className="w-6 h-6" />
                  MAX
                </a>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-[#0088cc] text-[#0088cc] font-semibold py-3 rounded-xl hover:bg-[#0088cc] hover:text-white transition text-sm"
                >
                  <TelegramIcon className="w-5 h-5" />
                  Telegram
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* How to identify */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-3">❓ Как определить, какой вариант вам нужен?</h3>
          <div className="text-sm text-slate-600 leading-relaxed mb-5">
            <p className="font-semibold text-slate-900 mb-1">Напишите нам, отправьте фото вашего двигателя.</p>
            <p>Мы поможем определить нужную модификацию по фотографии или VIN-номеру автомобиля.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+79382060824"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-dark transition text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Позвонить и уточнить
            </a>
            <a
              href={MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition text-sm"
            >
              <MaxIcon className="w-6 h-6" />
              Написать в MAX
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#0088cc] text-[#0088cc] font-semibold px-6 py-3 rounded-xl hover:bg-[#0088cc] hover:text-white transition text-sm"
            >
              <TelegramIcon className="w-5 h-5" />
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
