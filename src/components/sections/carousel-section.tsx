import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/files/ef250ad1-3c23-4e33-8bbe-4baec078184a.jpg",
  "https://cdn.poehali.dev/files/310e8d19-4ae5-4540-afff-297c00141043.jpg",
  "https://cdn.poehali.dev/files/6829146d-a2a2-45b4-80d0-f092c7022636.jpg",
  "https://cdn.poehali.dev/files/3ce595fd-ed4a-47c8-9483-eb669468e08f.jpg",
  "https://cdn.poehali.dev/files/62237eaf-e13f-4290-856a-b86ff29f6577.jpg",
  "https://cdn.poehali.dev/files/d1000a2c-fcf7-4aec-a0be-719b8c97e3f5.jpg",
  "https://cdn.poehali.dev/files/0fb24a2f-5174-4f46-950f-80861810d87b.jpg",
  "https://cdn.poehali.dev/files/06ea7ef2-0a59-49d6-a9a6-6f1813db06cf.jpg",
  "https://cdn.poehali.dev/files/41e9263a-a92e-4750-923f-6026eb312f73.jpg",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Пример портфолио ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}