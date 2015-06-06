// Problem 1

String.prototype.format = function(options) {
    var prop,
        result = this;
    for (prop in options) {
        result = result.replace(new RegExp('#{' + prop + '}', 'g'), options[prop]);
    }
    return result;
};

var options = {
        name: 'John',
        age: 13
    },
    result = 'My name is #{name} and I am #{age}-years-old.'.format(options);

console.log('Problem 1: ' + result);

// Problem 2

String.prototype.bind = function(obj) {
    var prop,
        reContent,
        reHref,
        reClass,
        result = this;

    for (prop in obj) {
        reContent = new RegExp('(<.*data-bind-content="' + prop + '".*>)(.*)(<.*>)', 'gi'),
            reHref = new RegExp('(<.*data-bind-href="' + prop + '")', 'gi'),
            reClass = new RegExp('(data-bind-class="' + prop + '")', 'gi');

        result = result.replace(reContent, function(none, opening, content, closing) {
                content = obj[prop];
                return opening + content + closing;
            })
            .replace(reHref, function(none, content) {
                return content + ' href="' + obj[prop] + '"';
            })
            .replace(reClass, 'data-bind-class="' + obj[prop] + '"');
    }
    return result;
};

var str = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>';
result = str.bind({
    name: 'Elena',
    link: 'http://telerikacademy.com'
});
console.log('Problem 2: ' + result);
