import { PropsWithChildren } from 'react'
import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from 'remix'

const Document = ({ children }: PropsWithChildren<{}>) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === 'development' && <LiveReload />}
            </body>
        </html>
    )
}

export default Document
