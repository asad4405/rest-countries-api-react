import type { CountryType } from "../../type"

export interface VisitedCountriesProps {
    countries: CountryType[];
}

export default function VisitedCountries({ countries }: VisitedCountriesProps) {
    const visitedCountries = countries;
    return (
        <>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <span>✈️</span> Visited Countries
                    </h3>
                    <span className="bg-blue-50 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full border border-blue-100">
                        {visitedCountries.length} {visitedCountries.length === 1 ? 'Country' : 'Countries'}
                    </span>
                </div>

                {visitedCountries.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {visitedCountries.map((country) => (
                            <span
                                key={country.ccn3.ccn3}
                                className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-lg border border-gray-200/80 hover:bg-gray-100 transition-colors"
                            >
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                {country.name.common}
                            </span>
                        ))}
                    </div>
                ) : (
                    <p className="text-sm text-gray-400 italic">
                        No countries visited yet. Click "Visited" on a card to add one!
                    </p>
                )}
            </div>
        </>
    )
}