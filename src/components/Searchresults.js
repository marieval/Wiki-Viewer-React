import React from "react";
import Searchresult from "./Searchresult";

const Searchresults = (props) => {
    return (
        <div>
            {
                props.results.map(item => {
                    return (
                        <Searchresult
                            key={item.pageid}
                            title={item.title}
                            snippet={item.snippet}
                        />
                    )
                })
            }
        </div>
    )
}

export default Searchresults;