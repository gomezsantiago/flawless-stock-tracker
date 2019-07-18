import * as React from 'react';
import { Header } from './headerSelector';
import { PriceSearchLayout } from '../layout-components/priceSearchLayout';
import { CompanyTags } from '../tags/companyTags';
import { LogoTabsLayout } from '../layout-components/logoTabsLayout';
import { MarketStatus } from '../market-status/marketStatus';
import { isMarketOpen } from '../../util/marketStatusUtil';
import './header.css';

interface HeaderFunctionsProps {
  getLatestUpdate: (symbol: string) => void;
  getFavorites: () => void;
}

type HeaderLayoutProps = HeaderFunctionsProps & Header;

export const HeaderLayout: React.FunctionComponent<HeaderLayoutProps> = ({
  latestPrice,
  change,
  changePercent,
  sector,
  exchange,
  companyName,
  symbol,
  timeOfLatestUpdate,
  getLatestUpdate,
  getFavorites,
}) => {
  React.useEffect(() => {
    const intervalID = setInterval(() => {
      if (isMarketOpen(timeOfLatestUpdate)) {
        if (symbol) getLatestUpdate(symbol);
        getFavorites();
      }
    }, 2000);
    return () => clearInterval(intervalID);
  }, [symbol]);

  return (
    <div className="header-wrapper">
      <LogoTabsLayout />
      <PriceSearchLayout
        latestPrice={latestPrice}
        change={change}
        changePercent={changePercent}
        symbol={symbol}
        companyName={companyName}
      />
      {sector && (
        <div className="header-bottom">
          <CompanyTags sector={sector} exchange={exchange} />
          <MarketStatus timeOfLatestUpdate={timeOfLatestUpdate} />
        </div>
      )}
    </div>
  );
};
