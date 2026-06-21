'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { Button } from './Button'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID
const HOTJAR_SV = process.env.NEXT_PUBLIC_HOTJAR_SV ?? '6'

export function CookieBanner() {
  const [consent, setConsent] = useState<'accepted' | 'declined' | 'pending'>('pending')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const storedConsent = localStorage.getItem('miux_cookie_consent') as 'accepted' | 'declined' | null
    if (storedConsent) {
      setConsent(storedConsent)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem('miux_cookie_consent', 'accepted')
    setConsent('accepted')
  }

  function handleDecline() {
    localStorage.setItem('miux_cookie_consent', 'declined')
    setConsent('declined')
  }

  if (!mounted) return null

  return (
    <>
      {/* Conditionally Load Analytics Scripts if Consent is Given */}
      {consent === 'accepted' && (
        <>
          {GA_ID && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `}
              </Script>
            </>
          )}

          {HOTJAR_ID && (
            <Script id="hotjar" strategy="afterInteractive">
              {`
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:${HOTJAR_ID},hjsv:${HOTJAR_SV}};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `}
            </Script>
          )}
        </>
      )}

      {/* Consent Banner UI */}
      {consent === 'pending' && (
        <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white/95 p-6 shadow-2xl backdrop-blur-md md:bottom-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">Privacidade e Cookies 🍪</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nós usamos cookies para melhorar sua experiência, analisar o tráfego do site e entender o comportamento de uso do framework MIUX. Seus dados são tratados em conformidade com a LGPD.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button variant="ghost" size="sm" onClick={handleDecline}>
                Recusar
              </Button>
              <Button variant="primary" size="sm" onClick={handleAccept}>
                Aceitar todos
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
