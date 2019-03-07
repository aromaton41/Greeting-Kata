function greet(name){
    if(name == null){
        return 'Hello, my friend.'

    }if(Array.isArray(name)){
        if(name.length == 2){
            return `Hello, ${name.join(" and ")}.`
        }else{
            return `Hello, ${name.slice(0,name.length-1).join(", ")}, and ${name[name.length-1]}.`
        }
    }if(name == name.toUpperCase()){
        return `HELLO ${name.toUpperCase()}!`
    }
    return `Hello, ${name}.`;
}
module.exports = greet;