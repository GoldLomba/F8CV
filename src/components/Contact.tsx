export default function Contact() {
  return (
    <section id="contact" className="bg-bg-light py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">Свяжитесь с нами</h2>
          <p className="text-text-secondary mt-3">Ответим на все вопросы, поможем с выбором двигателя</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Phone */}
          <a
            href="tel:+79001234567"
            className="border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow bg-white"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-text">Телефон</h3>
            <p className="text-primary font-bold text-lg mt-2">+7 (900) 123-45-67</p>
            <p className="text-xs text-text-secondary mt-1">Пн–Сб: 9:00–19:00</p>
          </a>

          {/* WhatsApp */}
          <div className="flex flex-col sm:flex-row gap-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/79001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow bg-white"
          >
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.116 1.519 5.853L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.97 0-3.834-.53-5.445-1.453l-.39-.232-3.758.98.998-3.648-.254-.404A9.71 9.71 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-slate-800">WhatsApp</h3>
            <p className="text-green-500 font-bold text-lg mt-2">Написать</p>
            <p className="text-xs text-slate-400 mt-1">Ответим за 10 минут</p>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/your_telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow bg-white"
          >
            <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-slate-800">Telegram</h3>
            <p className="text-sky-500 font-bold text-lg mt-2">Написать</p>
            <p className="text-xs text-slate-400 mt-1">Ответим за 10 минут</p>
          </a>
        </div>

          {/* Address */}
          <div className="border border-border rounded-2xl p-6 text-center bg-white">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-text">Склад / Самовывоз</h3>
            <p className="text-text font-semibold mt-2">г. Москва</p>
            <p className="text-xs text-text-secondary mt-1">Адрес уточняйте по телефону</p>
          </div>
        </div>

        {/* Big CTA */}
        <div className="mt-14 bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-xl md:text-2xl font-extrabold">Нужна консультация?</h3>
          <p className="text-white/80 mt-2 max-w-lg mx-auto text-sm md:text-base">
            Поможем определить нужную модификацию двигателя F8CV для вашего автомобиля. Звоните или пишите!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a
              href="tel:+79001234567"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +7 (900) 123-45-67
            </a>
            <a
              href="https://wa.me/79001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition"
            >
              WhatsApp
            </a>
            <a
              href="https://t.me/---"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
