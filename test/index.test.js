const assert = require('assert');
const { generateDocumentation } = require('../src/code-documentation-generator');

describe('Code Documentation Generator', function() {
    it('should generate documentation for a given JavaScript file', function() {
        // Contoh penggunaan
        const documentation = generateDocumentation('path/to/your/file.js');
        
        // Assertion
        assert.equal(typeof documentation, 'string');
        assert.ok(documentation.includes('ExampleFunction'));
        assert.ok(documentation.includes('Parameters'));
        assert.ok(documentation.includes('Returns'));
        assert.ok(documentation.includes('Examples'));
    });
});
