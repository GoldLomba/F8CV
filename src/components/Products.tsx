const products = [
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
                <span className={`text-4xl font-bold px-8 py-3 rounded-full ${p.badgeColor}`}>{p.badge}</span>
                {p.icon}
              </div>

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
                    <span key={c} className="bg-bg-light text-text text-xs font-medium px-2.5 py-1 rounded-lg border border-border">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+79001234567"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary-dark transition text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Позвонить
                </a>
                <a
                  href="https://wa.me/79001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-green text-green font-semibold py-3 rounded-xl hover:bg-green hover:text-white transition text-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.116 1.519 5.853L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.97 0-3.834-.53-5.445-1.453l-.39-.232-3.758.98.998-3.648-.254-.404A9.71 9.71 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* How to identify */}
        <div className="mt-12 bg-bg-light rounded-2xl border border-border p-6 md:p-8">
          <h3 className="text-lg font-bold text-text mb-3">❓ Как определить, какой вариант вам нужен?</h3>
          <div className="gap-4 text-sm text-text-secondary leading-relaxed">
            <div>
              <p className="font-semibold text-text mb-1">Напишите нам на телеграмм, отправьте фото вашего двигателя.</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
