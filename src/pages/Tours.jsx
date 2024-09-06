import React, { useEffect, useState } from "react";
import '../styles/tours.css';
import { Container,Row,Col } from "reactstrap";
import TourCard from "../shared/Tourcard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import tourData from "../assets/data/tours"


const Tours=()=>{
    const[pageCount,setPageCount]=useState(0);
    const [page,setPage]=useState(0);
    useEffect(()=>{
        const pages=Math.ceil(5/8);
        setPageCount(pages);
    },[page]);
    return<>
    <section>
        
        <Container>
            <Row> 
                <SearchBar/>
            </Row>
        </Container>
    </section>
    <section className="pt-5">
        <Container>
            <Row>
                {
                    tourData?.map(tour=>(<Col lg='3' key={tour.id} className="mb-4">
                        <TourCard tour={tour}/></Col>))
                }
                <Col lg="12">

                    <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                        {[... Array(pageCount).keys()].map(number =>(
                            <span key={number} onClick={()=> setPage(number)}className={page === number? "active_page": ""}>
                                {number + 1}
                            </span>))}</div>
                </Col>
            </Row>
        </Container>
    </section>
    <Newsletter/>
    </>;
};
export default Tours;