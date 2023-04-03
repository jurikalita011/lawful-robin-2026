import React from "react";
import { useEffect,useReducer,useState } from "react";
import styles from "../../styles/Wproducts.module.css";
import axios from "axios";
import reducer from "./reducer";
import ProductCard from "./ProductCards";
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,Box,Spinner} from "@chakra-ui/react";
import { AddIcon, MinusIcon} from "@chakra-ui/icons";
import ProductsNav from "../navbar/productsNav";
import { getData } from "./api";

const initialstate={
  loading:false,
  data:[],
  err:false
}


const ProductsW = () => {
  const [state,dispatch]=useReducer(reducer,initialstate);
  const [order,setOrder]=useState("")
  const [filterBy,setFilterBy]=useState("");
  const [brand,setBrand]=useState("");
  useEffect(()=>{
    dispatch({type:"FETCH_loading"});
getData({
  sort:"offer",
  order:order,
  type:filterBy,
  stylist:brand
}).then((res)=>{
  dispatch({type:"FETCH_success",payload:res?.data});
})
.catch(()=> {
  dispatch({type:"FETCH_error"})
})
  },[order,filterBy,brand]);
  const {loading,err,data}=state;
  const handleBrand=(e)=>{
setBrand(e.target.value);
  }
  return (
    <>
    <ProductsNav/>
    <div className={styles.productContainer}>
      {/*Left */}

      <div className={styles.productLeft}>
        <div className={styles.productLeftTop}>
          <h5>Clothing</h5>
          <p>186185 products</p>
        </div>
        <div className={styles.sorting_section}>
          <h4
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              color: "black",
              padding: "10px 5px",
            }}
          >
            FILTER & SORT
          </h4>
          <Accordion allowMultiple>
            
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={15}
                        
                      >
                        Sort By
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="11px" />
                      ) : (
                        <AddIcon fontSize="11px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={2}
                    cursor="pointer"
                    
                    onClick={()=>setFilterBy("saree")}
                  >
                    SAREES
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    cursor="pointer"
                    // value="Kurta Kurtis"
                    onClick={() => setFilterBy("Kurta Kurtis")}
                  >
                    KURTA
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    cursor="pointer"
                    value="tops"
                    onClick={(e) => setFilterBy(e.target.value)}
                  >
                    DRESSES
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    cursor="pointer"
                    onClick={() => setOrder("desc")}
                  >
                    Offer High to Low
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    cursor="pointer"
                    onClick={() => setOrder("asc")}
                  >
                    Offer Low to High
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={15}
                        
                      >
                        Discounts
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="11px" />
                      ) : (
                        <AddIcon fontSize="11px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={2}>1% to 20%</AccordionPanel>
                  <AccordionPanel pb={2}>21% To 50%</AccordionPanel>
                  <AccordionPanel pb={2}>51% & above</AccordionPanel>
                </>
              )}
            </AccordionItem>
            
            <AccordionItem
              className={styles.overflow}
              style={{
                overflowY: "scroll",
                height: "350px",
                position: "sticky",
              }}
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={15}
                        
                      >
                        brand
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="11px" />
                      ) : (
                        <AddIcon fontSize="11px" />
                      )}
                    </AccordionButton>
                  </h2>
                  
                  <AccordionPanel value="Trillmixa" onChange={handleBrand} pb={2}>Trillmixa</AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* right */}
      <div className={styles.productRight}>
        
        <div className={styles.allproducts}>
          {loading?(<Spinner/>):err?<h1>Oops!Something Went Wrong!</h1>:
            data.map((el) => <ProductCard key={el.id} {...el} />)}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductsW;
