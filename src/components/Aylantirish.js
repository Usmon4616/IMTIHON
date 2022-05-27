
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Belgilash from './Belgilash'

export default function Right() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/movie/popular?api_key=e4894b2b29308e45b8f1005d5e129b08&language=en-US&page=1")
            .then((response) => {
                console.log(response.data.results);
                const data = response.data;
                setCustomers(response.data.results);
                console.log(response.data)
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        console.log(customers);
    }, [customers]);

    return (
        <>
            <div className="container">
                {
                    customers.map((element) => {
                        return (
                            <div className="aylantir">
                                <img className="rasmchla" src={`https://image.tmdb.org/t/p/w500${element.backdrop_path}`} alt="rasm" />
                                <Belgilash/>

                                <h4>{element.original_title}</h4>
                                


                                
                            </div>
                        );

                    })
                }
            </div>
        </>
    );
}
