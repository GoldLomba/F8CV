const specs = [
  { label: 'Модель', value: 'F8CV' },
  { label: 'Объём', value: '796 см³ (0.8 л)' },
  { label: 'Тип', value: 'Бензиновый, рядный' },
  { label: 'Кол-во цилиндров', value: '3' },
  { label: 'Клапанов', value: '6 (2 на цилиндр)' },
  { label: 'ГРМ', value: 'SOHC, ремень' },
  { label: 'Мощность', value: '51 л.с. при 6200 об/мин' },
  { label: 'Крутящий момент', value: '69 Нм при 3400 об/мин' },
  { label: 'Степень сжатия', value: '9.3 : 1' },
  { label: 'Топливо', value: 'АИ-92 / АИ-95' },
  { label: 'Система питания', value: 'Инжектор (MPI)' },
  { label: 'Масло', value: '5W-30 / 10W-40, 3.2 л' },
  { label: 'Ресурс', value: '~300 000 км' },
  { label: 'Вес двигателя', value: '~55 кг' },
];

export default function Specs() {
  return (
    <section id="specs" className="bg-bg-light py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">Технические характеристики</h2>
          <p className="text-text-secondary mt-3">Двигатель F8CV — компактный и экономичный мотор</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-border overflow-hidden">
          {specs.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center justify-between px-5 md:px-6 py-3.5 text-sm ${
                i % 2 === 0 ? 'bg-white' : 'bg-bg-light'
              } ${i < specs.length - 1 ? 'border-b border-border' : ''}`}
            >
              <span className="text-text-secondary font-medium">{s.label}</span>
              <span className="text-text font-semibold text-right">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
