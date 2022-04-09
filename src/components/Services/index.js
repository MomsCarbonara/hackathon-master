import React from 'react' 
import Icon1 from '../../images/connection.svg'
import Icon2 from '../../images/drone.svg'
import Icon3 from '../../images/sync.svg'
import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './ServicesElements';

export const Services = () => {
    return (
      <ServicesContainer id="services">
          <ServicesH1>Activities map</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    
                        <ServicesIcon src={Icon1}/>
                        <h2>Register</h2>
                        <ServicesH2>You can help people in need in your area!</ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                    
                        <ServicesIcon src={Icon2}/>
                        <h2>We use State-Of-The-Art Technologies.</h2>
                        <ServicesH2>Our organization cooperates with the services. We generate special Id QR codes bands. In case of getting lost or separation, the band contains all of the necessary data. </ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                    
                        <ServicesIcon src={Icon3}/>
                        <h2>We implement the newest technological achivements of IT.</h2>
                        <ServicesH2>Thanks to our use of AI we are able to searching trough the social services and finding missing people. </ServicesH2>
                    </ServicesCard>
            </ServicesWrapper>

         




      </ServicesContainer>  
    )
};

export default Services;