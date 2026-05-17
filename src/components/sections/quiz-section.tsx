import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const questions = [
  {
    question: "Когда мы впервые увидели друг друга?",
    options: ["2020 год", "2021 год", "2022 год", "2023 год"],
    correct: 1,
    emoji: "🕰️",
    allCorrect: false,
  },
  {
    question: "Что мы любим больше всего?",
    options: [
      "Петь песни на всю улицу",
      "Смеяться до коликов в животике",
      "Вспоминать Витала и Кэри в любом удобном случае",
      "Вкусно кушать ам ам",
    ],
    correct: 0,
    emoji: "🎉",
    allCorrect: true,
  },
  {
    question: "Где нас втроём можно найти?",
    options: ["На катьке", "Уединиться на унитазах", "В Галерее", "На фудкорте"],
    correct: 0,
    emoji: "📍",
    allCorrect: true,
  },
  {
    question: "Кого мы любим больше всего?",
    options: ["Ксению Осокину", "Ксюшкинс", "Ксению Сергеевну", "Ksuoch"],
    correct: 0,
    emoji: "💕",
    allCorrect: true,
  },
  {
    question: "Что мы тебе ещё НЕ дарили?",
    options: ["Торт", "Фильм", "Тупака", "Мюсли"],
    correct: 3,
    emoji: "🎁",
    allCorrect: false,
  },
]

const results = [
  {
    range: [0, 2],
    title: "Ну ничего, мы тебя всё равно любим!",
    description: "Главное — мы вместе, и это не изменить ❤️",
    emoji: "🌸",
  },
  {
    range: [3, 4],
    title: "Почти звезда квиза!",
    description: "Ты знаешь нас очень хорошо — и мы тебя тоже ✨",
    emoji: "💫",
  },
  {
    range: [5, 5],
    title: "Ты знаешь нас как никто!",
    description: "Настоящая подруга — именно такая. Берегём тебя ❤️",
    emoji: "🏆",
  },
]

export function QuizSection() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answered, setAnswered] = useState(false)

  const question = questions[current]

  const handleSelect = (idx: number) => {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    if (question.allCorrect || idx === question.correct) {
      setScore((s) => s + 1)
    }
  }

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
    setAnswered(false)
  }

  const result = results.find(
    (r) => score >= r.range[0] && score <= r.range[1]
  ) ?? results[1]

  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Квиз
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-serif text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Насколько хорошо ты нас знаешь?
        </motion.h2>

        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Progress */}
              <div className="flex gap-2 mb-8">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                      i <= current ? "bg-primary" : "bg-foreground/10"
                    }`}
                  />
                ))}
              </div>

              {/* Question */}
              <div className="bg-background rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">{question.emoji}</div>
                <p className="text-sm text-muted-foreground mb-2">
                  Вопрос {current + 1} из {questions.length}
                </p>
                {question.allCorrect && (
                  <p className="text-xs text-primary mb-2 uppercase tracking-wider">Все ответы правильные 🎉</p>
                )}
                <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                  {question.question}
                </h3>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3 mb-8">
                {question.options.map((option, idx) => {
                  let style = "bg-background text-foreground hover:bg-primary/10 cursor-pointer"
                  if (answered) {
                    if (question.allCorrect) {
                      style = "bg-green-500/20 text-green-700 dark:text-green-400 border-green-500 cursor-default"
                    } else if (idx === question.correct) {
                      style = "bg-green-500/20 text-green-700 dark:text-green-400 border-green-500 cursor-default"
                    } else if (idx === selected) {
                      style = "bg-red-500/20 text-red-700 dark:text-red-400 border-red-500 cursor-default"
                    } else {
                      style = "bg-background text-muted-foreground opacity-50 cursor-default"
                    }
                  }

                  return (
                    <motion.button
                      key={idx}
                      className={`w-full text-left rounded-xl px-6 py-4 border border-border transition-all font-sans text-base ${style}`}
                      whileHover={!answered ? { scale: 1.01 } : {}}
                      whileTap={!answered ? { scale: 0.99 } : {}}
                      onClick={() => handleSelect(idx)}
                    >
                      <span className="mr-3 text-muted-foreground font-mono text-sm">
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      {option}
                    </motion.button>
                  )
                })}
              </div>

              {answered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end"
                >
                  <button
                    onClick={handleNext}
                    className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
                  >
                    {current + 1 >= questions.length ? "Узнать результат →" : "Следующий →"}
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background rounded-2xl p-10 text-center"
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {result.emoji}
              </motion.div>

              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
                Твой результат: {score} из {questions.length}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                {result.title}
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                {result.description}
              </p>

              <div className="w-full h-2 bg-foreground/10 rounded-full mb-8 overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(score / questions.length) * 100}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>

              <button
                onClick={handleRestart}
                className="bg-secondary text-foreground px-8 py-3 rounded-xl font-medium hover:bg-accent/30 transition-colors border border-border"
              >
                Пройти ещё раз
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
