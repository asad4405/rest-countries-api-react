import { use, useState } from "react";
import type { CountryType } from "../../type";
import Country from "../Country/Country";
import VisitedCountries from "./VisitedCountries";

export interface CountriesProps {
    countries: Promise<CountryType[]>;
}

export default function Countries({ countries }: CountriesProps) {
    const countriesLists = use(countries);
    const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);

    const handleVisitedCountries = (country: CountryType):void => {
        const exists = visitedCountries.find(c => c.ccn3.ccn3 === country.ccn3.ccn3);

        if(exists){
            const remainingCountries = visitedCountries.filter(c => c.ccn3.ccn3 !== country.ccn3.ccn3);
            setVisitedCountries(remainingCountries);
        }else{
            const newVisitedCountries = [...visitedCountries, country];
            setVisitedCountries(newVisitedCountries);
        }
    }
    return (
        <>
            <div className="container mx-auto p-4">
                <h3 className="text-3xl font-bold mb-6 text-gray-800">
                    Total Countries:{" "}
                    <span className="text-blue-600">{countriesLists.length}</span>
                </h3>

                {/* ======= visited countries ==== */}
                <VisitedCountries countries={visitedCountries} />
                

                {/* ========== countries =========== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        countriesLists.map(country => <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                    }
                    
                </div>
            </div>
        </>
    );
}
