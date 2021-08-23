import React from "react"
 import styled from "styled-components"
 import { useStaticQuery } from 'gatsby'
 import {graphql} from 'gatsby'
 import { Card } from '@material-ui/core';
 import Img from 'gatsby'
 import {Button} from './Button'
 import Carousel from "react-material-ui-carousel";
 import {ImLocation} from "react-icons/im"
 

 const getOurservices = (data) => {
  const ServicesArray = []
           data.allOurservicesJson.edges.forEach((item, index) =>{
             const src=item.node.img.childImageSharp.fluid.src
             console.log(src)
               ServicesArray.push(
                 <div style={{backgroundImage: `url(${src})`, marginLeft: "15px", backgroundSize: "contain", width: 450, height: 450, backgroundRepeat: "no-repeat", padding: "30px"}}>{item.node.name}</div>
                  //  <ProductCard key={index}>
                  //      <Img 
                  //      src={item.node.img.childImageSharp.fluid.src}
                  //      alt={item.node.alt}
                  //      fluid={item.node.img.childImageSharp.fluid}
                  //      />
                  //      <ProductInfo>
                  //          <TextWrap>
                  //              <ImLocation />
                  //              <ProductTitle>{item.node.name}</ProductTitle>
                  //          </TextWrap>
                  //          <Button to="/">{item.node.button}</Button> 
                  //      </ProductInfo>
                  //  </ProductCard>
               )
           })
           return ServicesArray
        
 }

 
 export default function Ourservices() {
  const data= useStaticQuery(
    graphql`
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
               src
               }
             }
           }
         }
       }
     }
   }
  `)

  console.log(data);
    return (
      <ProductsContainer>
      <ProductsHeading>Heading</ProductsHeading>
      <ProductWrapper style={{display: "flex", flexDirection: "row"}}>
      <Carousel
        index={index}
        onChange={handleChange}
        interval={4000}
        animation="slide"
        indicators={false}
        stopAutoPlayOnHover
        swipe
        className="my-carousel"
      >
        {getOurservices(data)}
        </Carousel>
        </ProductWrapper>
      </ProductsContainer>
    )
}
//  const Ourservices = () => {
//     //  const data= useStaticQuery(
//     //    graphql`
//     //  query OurservicesQuery {
//     //     allOurservicesJson {
//     //       edges {
//     //         node {
//     //           alt
//     //           button
//     //           name
//     //           img {
//     //             childImageSharp {
//     //               fluid{
//     //               ...GatsbyImageSharpFluid
//     //               }
//     //             }
//     //           }
//     //         }
//     //       }
//     //     }
//     //   }
//     //  `)

//      function getOurservices(data)
//      {
//          const ServicesArray = []
//          data.allOurservicesJson.edges.forEach((item, index) =>{
//              ServicesArray.push(
//                  <ProductCard key={index}>
//                      <Img 
//                      src={item.node.img.childImageSharp.fluid.src}
//                      alt={item.node.alt}
//                      fluid={item.node.img.childImageSharp.fluid}
//                      />
//                      <ProductInfo>
//                          <TextWrap>
//                              <ImLocation />
//                              <ProductTitle>{item.node.name}</ProductTitle>
//                          </TextWrap>
//                          <Button to="/">{item.node.button}</Button> 
//                      </ProductInfo>
//                  </ProductCard>
//              )
//          })
//          return ServicesArray
//      }
//      return (
//        <>
//        hi
//        </>
//         //  <ProductsContainer>
//         //      <ProductsHeading>Heading</ProductsHeading>
//         //      <ProductWrapper>hi</ProductWrapper>
//         //  </ProductsContainer>
//      )
//  } 

 


 const ProductsContainer = styled.div`
 min-height:100vh;
 padding: 5rem calc((100vw - 1300px)/2);
 background: white;
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
 