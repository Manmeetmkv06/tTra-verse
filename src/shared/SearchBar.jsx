import React,{useRef} from "react";
import './search-bar.css';
import { Alert, Col,Form,FormGroup } from "reactstrap";
const SearchBar=()=>{
    const locationRef=useRef('');
    const distanceRef=useRef(0);
    const maxGroupSizeRef=useRef(0);

    const SearchHandler=()=>{
        const location=locationRef.current.value
        const distance=distanceRef.current.value
        const maxGroupSize=maxGroupSizeRef.current.value
        if(location===''|| distance===''|| maxGroupSize===''){
            return alert("All feilds are mandatory");
        }
    }


    return <Col lg='12'>
        <div className="search__bar">
            <Form className="d-flex align-items-center gap-4 ">
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span>
                    <i class="ri-map-pin-line"></i>
                    </span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder="Where do you plan to go?" ref={locationRef}></input>
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span>
                    <i class="ri-map-pin-time-line"></i>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder="Distance KMs" ref={distanceRef}></input>
                    </div>
                    </span>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form__group form__group-last">
                    <span>
                    <i class="ri-group-fill"></i>
                    <div>
                        <h6>Max People</h6>
                        <input type="number" placeholder="  0" ref={maxGroupSizeRef}></input>
                    </div>
                    </span>

                </FormGroup>
                <span className="search__icon" type='submit' onClick={SearchHandler}>
                <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
};
export default SearchBar;