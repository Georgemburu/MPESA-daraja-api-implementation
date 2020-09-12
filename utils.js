exports.handleError = function handleError(type,err){
    console.log('Error getting '+type)
    console.log(err)
}
exports.handleSuccess =  function handleSuccess(type,success){
    console.log('-------------SUccess '+type+'----------')
    console.log(success)
}