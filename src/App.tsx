import { Suspense } from "react";
import "./App.css";
import type { CountryType } from "./type";
import Countries from "./components/Countries/Countries";

const fetchCountries = async (): Promise<CountryType[]> => {
    const res = await fetch('https://openapi.programming-hero.com/api/all');
    const data = await res.json();
    return data.countries;
};

const countriesPromise = fetchCountries();

function App() {
    return (
        <>
            <header className="text-center my-8 px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                    World <span className="text-blue-600">Explorer</span>
                </h1>
                <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-md mx-auto">
                    Explore countries around the globe, track your visited destinations, and collect flags!
                </p>
            </header>

            <Suspense 
                fallback={
                    <div className="flex justify-center items-center py-20">
                        <p className="text-lg font-semibold text-blue-600 animate-pulse">
                            Loading Countries...
                        </p>
                    </div>
                }
            >
                <Countries countries={countriesPromise} />
            </Suspense>
        </>
    );
}

export default App;