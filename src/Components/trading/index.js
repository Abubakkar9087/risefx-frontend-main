import React, { useEffect } from 'react';

const ForexCrossRatesWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
    script.async = true;
    script.innerHTML = `
      {
        "width": 900,
        "height": 400,
        "currencies": [
          "EUR",
          "USD",
          "JPY",
          "GBP",
          "CHF",
          "AUD",
          "CAD",
          "NZD"
        ],
        "isTransparent": false,
        "colorTheme": "light",
        "locale": "en",
        "backgroundColor": "#ffffff"
      }
    `;
    
    const targetDiv = document.getElementById('forex-cross-rates-widget');
    targetDiv.appendChild(script);

    return () => {
      // targetDiv.removeChild(script);
    };
  }, []);

  return (
    <div id="forex-cross-rates-widget" style={{textAlign: '-webkit-center'}} className='billbord'>
      {/* Placeholder for the widget */}
    </div>
  );
};

export default ForexCrossRatesWidget;
