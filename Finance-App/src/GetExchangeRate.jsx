export async function GetExchangeRate(oldCurrency, newCurrency){
    try {
        if(oldCurrency != newCurrency) {
            const response = await fetch(GetExchangeRateEndpointURL(oldCurrency, newCurrency));
            if (!response.ok) {
                throw new Error(`Exchange response status: ${response.status}`);
            }
            const data = await response.json();
            const rate = await data.rates[newCurrency];
            console.log('Exchange rate from ' +  oldCurrency + ' to ' + newCurrency + ' is ' + rate);
            return rate;
        }
        else {
            return 1;
        }
    } catch(error)
    {
        console.log(error);
        return -1;
    }
}

export function GetExchangeRateEndpointURL(oldCurrency, newCurrency) {
    const HTTPbase = 'https://api.frankfurter.app/latest?from=';
    const HTTPmidPoint = '&to=';
    return HTTPbase + oldCurrency + HTTPmidPoint + newCurrency;
}