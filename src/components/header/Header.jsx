import React from 'react'
import { STitle, SHeader, SHeaderGrid, SPath, SImg } from './HeaderStyle'
import HamburguerBtnSvg from '../../img/svg/BarButton.svg'
import DevLogoSvg from '../../img/svg/Dev.svg'
import SignOutSvg from '../../img/svg/SignOut.svg'

function header({pageTitle='Publicação', path='Home / Publicação'}) {
  return (
    <SHeader>
        <SHeaderGrid>
            <div className='centralize'>
                <SImg src={HamburguerBtnSvg} alt="Sidebar button" />
            </div>
            <div className='logo_text'>
                <SImg src={DevLogoSvg} alt="Dev logo"/>
                <STitle>{pageTitle}</STitle>
            </div>
            <div className='path'>
                <SPath>{path}</SPath>
            </div>
            <div className='centralize'>
                <SImg src={SignOutSvg} alt="Sign out" />
            </div>
        </SHeaderGrid>
    </SHeader>
  )
}

export default header