export default function(handlebarsInstance) {
    handlebarsInstance.registerHelper('uppercase', function(str) {
        return str.toUpperCase();
    });
}