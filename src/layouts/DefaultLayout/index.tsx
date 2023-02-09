import React from 'react'
import styles from './styles.module.scss'
import { defaultLayoutProps } from '../interface'
import cx from 'classnames'
import Navbar from '../../components/Shape/Navbar'

const DefaultLayout = (props: defaultLayoutProps) => {
  return (
    <>
      <div className={cx(styles.layout, props?.className)}>
        {props.children}
      </div>
      <Navbar activeLink={props.aciveNavbar} />
    </>
  )
}

export default DefaultLayout
