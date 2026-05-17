import { motion } from "framer-motion"

const memories = [
  {
    title: "Мы познакомились — будто это было вчера",
    category: "Начало",
  },
  {
    title: "Ты всегда рядом! В счастливые и трудные дни — СПАСИБО тебе за это",
    category: "Дружба",
  },
  {
    title: "Наши совместные приключения — лучшее, что было!",
    category: "Воспоминания",
  },
  {
    title: "С твоим смехом любой день становится праздником!",
    category: "Эмоции",
  },
]

export function InsightsSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Мы хотим сказать тебе
        </motion.p>

        <div className="divide-y divide-border">
          {memories.map((item, i) => (
            <motion.div
              key={i}
              className="group flex items-center justify-between py-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
            >
              <div className="flex-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.category}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
              <span className="text-2xl ml-4">❤️</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
