import React from 'react'
import SuccessBanner from './SuccessBanner';
import RefreshBanner from './RefreshBanner';
import ErrorBanner from './ErrorBanner';

const BannerDisplay = ({ showSuccess, showRefresh, showError, showPlaylistError, showSearchError }) => {
  return (
    <div className="fixed top-8 right-8 flex items-end flex-col gap-2 z-50">
        {showSuccess && <SuccessBanner />}
        {showRefresh && <RefreshBanner />}
        {showError && <ErrorBanner message={'You must enter at least one character!'}/>}
        {showPlaylistError && <ErrorBanner message={'Your playlist must have a name'}/>}
        {showSearchError && <ErrorBanner message={'No results have been found. Try another term'}/>}
    </div>
  )
}

export default BannerDisplay
