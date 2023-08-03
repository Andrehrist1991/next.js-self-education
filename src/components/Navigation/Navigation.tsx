'use client'

// Modules
import Link from 'next/link';
import { Container, Nav } from 'react-bootstrap';
import { usePathname } from 'next/navigation';
import cx from 'classnames';

// Constants
import { ROUTES } from '@/constants/routes';

// Helpers
import cssModuleCXFactory from '@/helpers/cssModuleCXFactory';

// Styles
import styles from './Navigation.module.scss';

const getClassName = cssModuleCXFactory(styles);

type Props = {}

const Navigation = (props: Props) => {
  const pathname = usePathname();

  return (
    <Container>
      <Nav className="d-flex justify-content-center" variant="tabs" defaultActiveKey="/">
        <Nav.Item className={getClassName('menu-item')}>
          <Link
            className={cx('nav-link', {
              'active': pathname === ROUTES.home,
            })}
            href={ROUTES.home}
          >
            Home
          </Link>
        </Nav.Item>
        <Nav.Item className={getClassName('menu-item')}>
          <Link
            className={cx('nav-link', {
              'active': pathname === ROUTES.orders,
            })}
            href={ROUTES.orders}
          >
            Orders
          </Link>
        </Nav.Item>
        <Nav.Item className={getClassName('menu-item')}>
          <Link
            className={cx('nav-link', {
              'active': pathname === ROUTES.newOrder,
            })}
            href={ROUTES.newOrder}
          >
            New order
          </Link>
        </Nav.Item>
      </Nav>
    </Container>
  )
}

export default Navigation;
