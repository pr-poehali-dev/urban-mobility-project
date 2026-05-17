import { motion } from "framer-motion"

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 via-purple-200 to-pink-200 opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-6xl md:text-8xl font-serif text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          С любовью. 💜
        </motion.h2>

        <motion.p
          className="text-muted-foreground mt-6 text-lg max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Пусть этот год станет самым ярким, тёплым и счастливым в твоей жизни.
        </motion.p>

        <motion.div
          className="mt-12 text-4xl"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring" }}
          animate={{ y: [0, -10, 0] }}
        >
          🎂🎉🎁
        </motion.div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">Сделано с ❤️ специально для тебя</p>
        </div>
      </div>
    </footer>
  )
}
