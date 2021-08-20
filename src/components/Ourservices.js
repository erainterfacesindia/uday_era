 import React from 'react'
 import styled from "styled-components"
 import { useStaticQuery } from 'gatsby'
 import{graphql} from 'gatsby'
 import Img from 'gatsby'
 import {Button} from './Button'
 import {ImLocation} from "react-icons/im"
 
 const Ourservices = () => {
     const data= useStaticQuery(graphql`
     query OurservicesQuery {
        allOurservicesJson {
          edges {
            node {
              alt
              button
              name
              img {
                childImageSharp {
                  fluid{
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
         const ServicesArray = []
         data.allOurservicesJson.edges.forEach((item, index) =>{
             ServicesArray.push(
                 <ProductCard key={index}>
                     <Img 
                     src={item.node.img.childImageSharp.fluid.src}
                     alt={item.node.alt}
                     fluid={item.node.img.childImageSharp.fluid}
                     />
                     <ProductInfo>
                         <TextWrap>
                             <ImLocation />
                             <ProductTitle>{item.node.name}</ProductTitle>
                         </TextWrap>
                         <Button to="/services">{item.node.button}</Button> 
                     </ProductInfo>
                 </ProductCard>
             )
         })
         return ServicesArray
     }
     return (
         <ProductsContainer>
             <ProductsHeading>Heading</ProductsHeading>
             <ProductWrapper>{getOurservices(data)}</ProductWrapper>
         </ProductsContainer>
     )
 } 
 
 export default Ourservices
 


 const ProductsContainer = styled.div`
 min-height:100vh;
 padding: 5rem calc((100vw - 1300px)/2);
 background: red;
 color:#fff;
 `

 const ProductsHeading = styled.div`
 font-size: clamp(1.2rem,5vw,3rem);
 text-align: center;
 margin-bottom: 5rem;
 color: #000;
 `
 const ProductWrapper = styled.div``

 const ProductCard = styled.div``

 const ProductInfo = styled.div``

 const TextWrap = styled.div``

 const ProductTitle = styled.div``
 