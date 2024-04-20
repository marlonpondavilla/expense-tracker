
export function fixDecimal(money){
    return money.toFixed(2); 
}

export const moneySigns = ["₱", "+", "-"];

export function saveToStorage(key, value) {
    const data_serialized = JSON.stringify(value);
    
    localStorage.setItem(key, data_serialized);
    console.log("Running");
}

