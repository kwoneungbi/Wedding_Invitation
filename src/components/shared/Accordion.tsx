import classNames from 'classnames/bind'
import styles from './Accordion.module.scss'
import { PropsWithChildren, useState } from 'react'

const cx = classNames.bind(styles)

interface AccordionProps {
  label: string
}

function Accordion({ label, children }: PropsWithChildren<AccordionProps>) {
  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <div className={cx(['wrap-accordion', expanded ? 'open' : ''])}>
      <div className={cx('wrap-header')} onClick={handleToggle}>
        <span>{label}</span>
        <IconArrowDown className={cx('icon-arrow-down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  )
}

export default Accordion

function IconArrowDown({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      height="20"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
