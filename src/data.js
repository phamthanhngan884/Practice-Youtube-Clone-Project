export const API_KEY = 'AIzaSyAkKUhP3GyH-gse7iTRbi4PhN4GFz62EB0';
export const value_converter = (value) => {
    if(value >= 1000000){
        return Math.round(value/1000000)+"M";
    }
    else if(value >= 1000){
        return Math.round(value/1000)+"K";
    }
    else {
        return value;
    }
}