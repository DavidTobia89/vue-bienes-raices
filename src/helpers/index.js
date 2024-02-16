
export const propertyPrice =  (priece) => 
        Number(priece).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    

