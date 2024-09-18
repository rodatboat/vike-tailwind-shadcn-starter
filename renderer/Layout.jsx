export { Layout }

import React from 'react'
import PropTypes from 'prop-types'
import { childrenPropType } from '../src/lib/PropTypeValues'
import { PageContextProvider } from '../src/lib/usePageContext'
import '../../renderer/css/index.css'
import '../../renderer/css/Layout.css'
import Content from '@/components/Content'

Layout.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
}
function Layout({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
          <Content>{children}</Content>
      </PageContextProvider>
    </React.StrictMode>
  )
}
