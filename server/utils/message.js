module.exports.generator = function(from,text){
return {
    from,
    text,
    createdAt: new Date().getTime()
}
};