import { use } from "react";
import type { CountryType } from "../../type";

export interface CountriesProps {
    countries: Promise<CountryType[]>;
}

export default function Countries({ countries }: CountriesProps) {
    const countriesLists = use(countries);
    return (
        <>
            <div className="container mx-auto p-4">
                <h3 className="text-3xl font-bold mb-6 text-gray-800">
                    Total Countries:{" "}
                    <span className="text-blue-600">{countriesLists.length}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                    countriesLists.map(country => <li>{country.name.common}</li>)
                    }
                    
                </div>
            </div>
        </>
    );
}
