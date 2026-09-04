export interface CountryType{
    name: {
        common: string,
        official: string
    },
    ccn3: {
        ccn3: number,
    },
    capital: {
        capital: string
    },
    population: {
        population: number
    },
    region: {
        region: string
    },
    flags: {
        flags: {
            png: string,
            alt: string
        }
    }
}