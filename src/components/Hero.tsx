export default function Hero() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green/10 text-green text-sm font-semibold px-3 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
              В наличии на складе в Москве
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text leading-tight">
              Двигатель <span className="text-primary">F8CV</span> 0.8L
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mt-4 max-w-xl mx-auto lg:mx-0">
              Два варианта исполнения — <strong className="text-text">под катушку зажигания</strong> и{' '}
              <strong className="text-text">под трамблёр</strong>. Для Daewoo&nbsp;Matiz, Chevrolet&nbsp;Spark.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-primary-dark transition text-base"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                Смотреть варианты
              </a>
              <a
                href="tel:+79001234567"
                className="inline-flex items-center justify-center gap-2 border-2 border-border text-text font-semibold px-7 py-3.5 rounded-xl hover:border-primary hover:text-primary transition text-base"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Позвонить
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-10 max-w-md mx-auto lg:mx-0">
              {[
                { icon: '🛡️', title: 'Гарантия', sub: '6 месяцев' },
                { icon: '🔍', title: 'Проверка', sub: 'Перед отправкой' },
                { icon: '🚚', title: 'Доставка', sub: 'По всей РФ' },
              ].map((b) => (
                <div key={b.title} className="text-center">
                  <div className="text-2xl mb-1">{b.icon}</div>
                  <div className="text-sm font-semibold text-text">{b.title}</div>
                  <div className="text-xs text-text-secondary">{b.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Engine illustration */}
          <div className="flex-1 flex justify-center">
            <img src="../src/images/F8CV.jpeg" alt=""  className="image-decor"/>
          </div>
        </div>
      </div>
    </section>
  );
}
