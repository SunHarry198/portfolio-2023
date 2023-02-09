import React, { useState, useEffect } from 'react'
import { navbar } from './common/data'
import styles from './styles.module.scss'
import cx from 'classnames'
import { navbarProps } from './common/interface'

const Navbar = (props: navbarProps) => {
  const [activeLink, setActiveLink] = useState(props.activeLink || '')

  function actionScroll(e: React.MouseEvent<HTMLButtonElement>, test?: string) {
    const { name } = e.currentTarget
    if (name) {
      setActiveLink(name)
      window.scrollTo({
        top: (document.getElementById(`${name}`) as any).offsetTop,
        behavior: 'smooth'
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (props?.activeLink !== activeLink) {
      setActiveLink(props?.activeLink)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.activeLink])

  return (
    <div className={styles.navbar}>
      <ul>
        {navbar?.map((item, index) => (
          <li
            key={index}
            className={cx(
              styles.navbar__item,
              item?.link === activeLink ? styles.active : ''
            )}
          >
            <button onClick={actionScroll} name={item.link}>
              <article className='cursor_small'>{item.element}</article>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
