export default function Delivery() {
  return (
    <section id="delivery" className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">Доставка</h2>
          <p className="text-text-secondary mt-3 max-w-xl mx-auto">
            Отправляем двигатели по Москве и всей России надёжными транспортными компаниями
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Москва */}
          <div className="border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text">По Москве</h3>
            <p className="text-sm text-text-secondary mt-2 leading-relaxed">
              Курьерская доставка по Москве и ближнему Подмосковью. Также можно забрать самовывозом со склада.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                'Доставка курьером — 1–2 дня',
                'Самовывоз со склада',
                'Проверка при получении',
                'Возможна оплата при получении',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text">
                  <svg className="w-4 h-4 text-green mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Деловые Линии */}
          <div className="border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text">Деловые Линии</h3>
            <p className="text-sm text-text-secondary mt-2 leading-relaxed">
              Крупнейшая транспортная компания России. Доставка в любой город с широкой сетью терминалов.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                'Более 250 терминалов по РФ',
                'Срок: 2–7 рабочих дней',
                'Отслеживание груза онлайн',
                'Доставка до терминала / до двери',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text">
                  <svg className="w-4 h-4 text-green mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ПЭК */}
          <div className="border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text">ПЭК</h3>
            <p className="text-sm text-text-secondary mt-2 leading-relaxed">
              Первая Экспедиционная Компания — надёжный перевозчик сборных грузов по России и СНГ.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                'Более 200 филиалов',
                'Срок: 2–8 рабочих дней',
                'Страхование груза',
                'Доставка до филиала / до адреса',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text">
                  <svg className="w-4 h-4 text-green mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Order Steps */}
        <div className="mt-14">
          <h3 className="text-xl font-bold text-text text-center mb-8">Как заказать</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Свяжитесь с нами',
                desc: 'Позвоните или напишите в WhatsApp, уточните наличие нужного варианта.',
              },
              {
                step: '2',
                title: 'Согласуйте детали',
                desc: 'Менеджер подтвердит наличие, уточнит адрес и способ доставки.',
              },
              {
                step: '3',
                title: 'Оплатите заказ',
                desc: 'Оплата на карту, по счёту или наложенным платежом при получении.',
              },
              {
                step: '4',
                title: 'Получите двигатель',
                desc: 'Заберите на складе, от курьера или в терминале ТК.',
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto">
                  {s.step}
                </div>
                <h4 className="text-sm font-bold text-text mt-3">{s.title}</h4>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
