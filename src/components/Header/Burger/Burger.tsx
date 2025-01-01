import css from './Burger.module.css'

interface BurgerProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function Burger({ isOpen, setIsOpen }: BurgerProps) {
  return (
    <button
      className={`${css.burger} ${isOpen ? css.open : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

