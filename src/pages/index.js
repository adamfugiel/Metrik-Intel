import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

export default () => (
  <>
    <Layout>
      <Banner />
      <TextBlock
        id="about"
        title="Powering performance-driven ad campaigns"
        paragraph="Using our own proprietary analytics tools, we have developed a keen comprehension of traffic, behavior, and ROI. 
        Your campaign will be brought to the next level through our innovative use of media marketing."
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="See How" anchor={true}/>
        </Link>
      </TextBlock>
      <TextBlockImg
        id="perks"
        title="We have the tools to help you succeed"
        subtitle="We optimize constantly in order to bring about the highest ROI"
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk3Img}
            alt="Creation"
            title="Creation"
            content="Aiming to nurture our unique and meticulous methods; we craft our own websites, creative placements, landing pages, etc."
          />
          <Perk
            img={perk1Img}
            alt="Performance"
            title="Performance"
            content="Metrik Intel is dedicated to ensuring that each campaign will run at maximum efficiency. We accomplish this by providing a considerable number of valuable leads to our advertisers, thus securing a formidable foothold in the market."
          />
          <Perk
            img={perk2Img}
            alt="Inspire"
            title="Inspiration"
            content="Our company is wholeheartedly committed to securing constant growth and improvement without reservation. We make every effort to continue the ambitious mentality that launched Metrik Intel."
          />
        </div>
      </TextBlockImg>
      <Packages
        title="Our Promise"
        para="To provide the utmost satisfaction, while simultaneously elevating clientele profits. Our company will preserve a mutual relation oriented on your company’s success."
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Relationships">
            <ul>
              <li>
              - Vanguard of regulatory compliance and best practices
              </li>
              <li>
              - Focused on long term goals and success
                
              </li>
              <li className="linethrough">
                
                
              </li>
              <li className="linethrough">
               
                
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="Learn More" anchor={true}/>
            </Link>
          </Package>
          <Package title="Innovation" active={true}>
            <ul>
              <li>
                
              We work tirelessly to optimize all aspects of campaigns to assure the highest quality for our advertisers and publishers.
              </li>
              <li>
               
              </li>
              <li>
                
              </li>
              <li>
                
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="Discover How" cta="Discover How" anchor={true}/>
            </Link>
          </Package>
          <Package title="Performance">
            <ul>
              <li>
              - High volume and quality leads to our clients
              </li>
              <li>
                
              </li>
              <li>
              - Consistently ahead of other performance advertisers
              </li>
              <li className="linethrough">
              
                
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="Learn More" anchor={true}/>
            </Link>
          </Package>
        </IconContext.Provider>
      </Packages>
      <Contact
        id="contact"
        title="Contact Us"
        subtitle="Leave us a message at: contact@metrikintel.com"
      />
    </Layout>
  </>
)
