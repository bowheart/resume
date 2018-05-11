import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  getRoutes: () => {
    return [
      {
        path: '/',
        component: 'src/pages/Home'
      },
      {
        is404: true,
        component: 'src/pages/404'
      }
    ]
  },

  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))

    meta.styleTags = sheet.getStyleElement()

    return html
  },

  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Montserrat"
              rel="stylesheet"
            />
            <link
              href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
              rel="stylesheet"
            />
            <title>Josh Claunch - Resume</title>
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  }
}
