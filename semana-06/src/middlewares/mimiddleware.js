export const mimiddleware = ( req, res, next) => {
    console.log('Son un middleware');
    next()
}