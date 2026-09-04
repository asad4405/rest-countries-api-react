import { useState } from "react"
import type { CountryType } from "../../type"

export interface CountryProps {
    country: CountryType,
    handleVisitedCountries: (country: CountryType) => void
    handleVisitedFlag: (flag: string) => void
}

export default function Country({ country, handleVisitedCountries, handleVisitedFlag }: CountryProps) {
    const [visited, setVisited] = useState<boolean>(false);
    const [isFlagAdded, setIsFlagAdded] = useState<boolean>(false); 

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    const handleFlagClick = () => {
        setIsFlagAdded(!isFlagAdded);
        handleVisitedFlag(country.flags.flags.png);
    }

    return (
        <>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-44 w-full bg-gray-100 overflow-hidden">
                    <img
                        src={country.flags.flags.png}
                        alt={country.flags.flags.alt}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-5">
                    <h4 className="text-2xl font-bold text-gray-800 mb-1">
                        {country.name.common}
                    </h4>
                    <p className="text-xs text-gray-400 italic mb-4">
                        {country.name.official}
                    </p>

                    <div className="space-y-2 text-sm text-gray-600">
                        <p>
                            <span className="font-semibold text-gray-800">
                                Capital:
                            </span>{" "}
                            {country.capital.capital}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-800">
                                Region:
                            </span>{" "}
                            {country.region.region}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-800">
                                Population:
                            </span>{" "}
                            {country.population.population}+ Peoples
                        </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-100 flex gap-2">
                        <button onClick={handleVisited} className="flex-1 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-lg text-xs transition-colors">
                            {visited ? 'Visited' : 'Mark as visited'} 
                        </button>
                        
                        
                        <button 
                            onClick={handleFlagClick} 
                            className={`flex-1 cursor-pointer font-medium py-2 px-3 rounded-lg text-xs transition-colors border ${
                                isFlagAdded 
                                    ? 'bg-amber-500 hover:bg-amber-600 border-amber-500 text-white' 
                                    : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                            }`}
                        >
                            {isFlagAdded ? 'Flag Added' : 'Add Flag'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}