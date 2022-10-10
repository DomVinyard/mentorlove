import React from 'react'
import CustomIntegrations from './pages/CustomIntegrations'
import NeedSupport from './pages/NeedSupport'
import ProductTour from './pages/ProductTour'
import RealTimeUpdates from './pages/RealTimeUpdates'

function MentorPage() {
  return (
    <div>
        <RealTimeUpdates/>
        <NeedSupport/>
        <CustomIntegrations/>
        <ProductTour/>
       
    </div>
  )
}

export default MentorPage