import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header/index'
import { LayoutContainer } from '../../../src/layouts/defaultLayout/styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
