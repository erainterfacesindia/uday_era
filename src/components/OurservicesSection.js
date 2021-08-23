
 import React from 'react'
 import styled from "styled-components"
 import {useStaticQuery, grahql} from 'gatsby'
 import Imag from 'gatsby-image'
 import {Button} from './Button'
 import {ImLocation} from "react-icons/im"
 
 const OurservicesSection = () => {
     const data= useStaticQuery(graphql`
     query OurservicesQuery {
        allOurservicesJson {
          edges {
            node {
              alt
              button
              name
              img {
                childrenImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
     `)

     function getOurservices(data)
     {
         const servicesArray =[]
         data.allOurservicesJson.edges.forEach((item, index) =>{
             servicesArray.push(
                 <ProductCard key={index}>
                     <Img 
                     src={item.node.img.childrenImageSharp.fluid.src}
                     alt={item.node.alt}
                     fluid={item.node.img,childrenImageSharp.fluid}/>
                     <productInfo>
                         <TextWrap>
                             <Imlocation />
                             <ProductTitle>{item.node.name}</ProductTitle>
                         </TextWrap>
                         <Button to="/services">{item.node.button}</Button> 
                     </productInfo>
                 </ProductCard>
             )
         })
         return servicesArray
     }
     return (
         <ProductsContainer>
             <ProductsHeading>Heading</ProductsHeading>
             <ProductWrapper>{getOurservices(data)}</ProductWrapper>
         </ProductsContainer>
     )
 }
 
 export default OurservicesSection
 


 const ProductsContainer = styled.div`
 min-height:100vh;
 padding:5rem calc((100vw - 1300px)/2);
 background: red;
 color:#fff;
 `

 const ProductHeading = styled.div`
 font-size: clamp(1.2rem,5vw,3rem);
 text-align: center;
 margin-bottom: 5rem;
 color: #000;
 `
 const ProductsHeading = styled.div``
 const ProductCard = styled.div``
 const ProductINfo = styled.div``
 const TextWrap = styled.div``
 const ProductTitle = styled.div``
 