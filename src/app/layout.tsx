"use client";

import './globals.css'
import { Inter } from 'next/font/google'
import { type ReactNode } from 'react'

import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicContextProvider
          settings={{
            environmentId: '--- env id ---',
            walletConnectors: [EthereumWalletConnectors]
          }}
          >
          <DynamicWagmiConnector>
            {props.children}
          </DynamicWagmiConnector>
        </DynamicContextProvider>

      </body>
    </html>
  )
}
